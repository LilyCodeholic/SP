const funcPageTask = () =>
{
loadTask();

const tabTask = document.getElementById("tabTask");
tabTask.addEventListener("prechange", (event) =>
{
	textToolbar = `${event.tabItem.textContent}`;
	document.querySelector("#pageTask .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageTask ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.Task.Status;
	toast.toggle();
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();
	for(const items of SPDB.Task[tab])
	{
		if(items.name == "？？？")
		{
			continue;
		}
		const list_item = document.createElement("ons-list-item");
		list_item.setAttribute("expandable", "");
		switch(tab)
		{
			case "Mission":
				list_item.innerHTML = `
					<span class="list-item__title">
						${items.name}
					</span>
					<span class="list-item__subtitle">
						　${items.flag}
					</span>
					<div class="expandable-content">
						<ons-row>
							<ons-col width="20%">報酬</ons-col>
							<ons-col>${items.prize.replace(/,/gi, "<br>")}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="20%">期間</ons-col>
							<ons-col>${items.term}</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Quest":
				list_item.innerHTML = `
					<span class="list-item__title">
						★${items.difficulty} ${items.name}
					</span>
					<span class="list-item__subtitle">
						${Array.isArray(items.goal) ?
							items.goal.length > 2 ?
								`　${items.goal[0]}<br>　${items.goal[1]}<br>　${items.goal[2]}` :
								`　${items.goal[0]}<br>　${items.goal[1]}`
							:
							`　${items.goal}`
						}
					</span>
					<div class="expandable-content">
						${Array.isArray(items.prize) ?
							`
								<ons-row>
									<ons-col width="25%">初回報酬</ons-col>
									<ons-col>${items.prize[0]}</ons-col>
								</ons-row>
								<ons-row>
									<ons-col width="25%">2回目以降</ons-col>
									<ons-col>${items.prize[1]}</ons-col>
								</ons-row>
							` :
							`
								<ons-row>
									<ons-col width="25%">報酬</ons-col>
									<ons-col>${items.prize}</ons-col>
								</ons-row>
							`
						}
						<ons-row>
							<ons-col width="25%">出現条件</ons-col>
							<ons-col>${items.flag}</ons-col>
						</ons-row>
					</div>
				`;
				break;
			default:
				console.error("Task: error");
				break;
		}
		fragment.appendChild(list_item);
	}

	const findElement = (query) =>
	{
		const listTitle = document.getElementById(query);
		if(listTitle != null)
		{
			clearInterval(idSetInterval);
			listTitle.appendChild(fragment);
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listTask_${tab}`);
};

const tabs = ["Mission", "Quest"];
for(const tab of tabs)
{
	appendData(tab);
}
};

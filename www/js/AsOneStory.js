const funcPageAsOneStory = () =>
{
loadAsOneStory();

const fullName =
{
	"ヒカリ":"ヒカリ・ソラ",
	"レイカ":"レイカ・フロストエッジ",
	"シャーリー":"シャルロッテ・ダヴェーヌ",
	"イサドラ":"イサドラ・エザルタード",
	"ナギ":"ナギ・オネス",
	"カズマ":"カズマ・アブレイズ"
};
const tabAsOneStory = document.getElementById("tabAsOneStory");
tabAsOneStory.addEventListener("prechange", (event) =>
{
	textToolbar = `${fullName[event.tabItem.textContent]}`;
	document.querySelector("#pageAsOneStory .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageAsOneStory ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.AsOneStory.Status;
	toast.toggle();
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	// SPDB.AsOneStory.Story
	const form = document.createElement("form");
	form.setAttribute("name", `story${tab}`);

	for(const [categoryOrder, categories] of SPDB.AsOneStory.Story[tab].entries())
	{
		const list_header = document.createElement("ons-list-header");
		list_header.innerHTML = categories.category;
		form.appendChild(list_header);
		for(const [titleOrder, items] of categories.scene.entries())
		{
			if(items.title == "？？？")
			{
				continue;
			}

			const list_item = document.createElement("ons-list-item");
			list_item.setAttribute("expandable", "");
			const expandableContent = document.createElement("div");
			expandableContent.setAttribute("class", "expandable-content");

			for(const [dialogOrder, dialog] of items.dialog.entries())
			{
				const nameRadio = `${tab}${categoryOrder}-${titleOrder}`;
				const idRadio = `${tab}${categoryOrder}-${titleOrder}-${dialogOrder}`;
				const idList_item = `li${tab}${categoryOrder}-${titleOrder}-${dialogOrder}`;

				const label = document.createElement("label");
				label.setAttribute("for", idRadio);

				const expandableList_item = document.createElement("ons-list-item");
				expandableList_item.setAttribute("tappable", "");
				expandableList_item.setAttribute("id", idList_item);
				if(dialogOrder != 0)
				{
					expandableList_item.setAttribute("class", "hidden asoneStory");
				}
				else
				{
					expandableList_item.setAttribute("class", "asoneStory");
				}

				const input = document.createElement("input");
				input.setAttribute("type", "radio");
				input.setAttribute("name", nameRadio);
				input.setAttribute("id", idRadio);
				input.setAttribute("value", dialogOrder);
				input.setAttribute("class", "hidden");
				input.onclick = () =>
				{
					const radioNodeList = document.forms[`story${tab}`][nameRadio];
					const value = Number(document.forms[`story${tab}`][nameRadio].value);
					const targetNum = value + 1;
					if(radioNodeList.length > targetNum)
					{
						const edit = document.getElementById(`li${tab}${categoryOrder}-${titleOrder}-${targetNum}`);
						edit.setAttribute("class", "asoneStory");
						edit.scrollIntoView(false);
					}
				};

				const alignDialog = () =>
				{
					console.log(dialog[2])

					const area =
						dialog[0][0] === "C" ? "area8":
						dialog[0][0] === "R" ? "area9":
						dialog[0][0] === "L" ? "area7":"";

					if(area === "")
					{
						return "<ons-col>このアズワンストーリーはまだ入力されていません。</ons-col>";
					}
					else
					{
						const decolate = [];
						if(dialog[0].includes("Bold"))
						{
							decolate.push("bold");
						}
						if(dialog[0].includes("Large"))
						{
							decolate.push("large");
						}

						const dialogHtml = decolate.length <= 0 ?
							area === "area8" ?
								`${dialog[2]}`:
								`${dialog[1]}<br>「${dialog[2]}」`
							:
							`${dialog[1]}<br><span class="${decolate.join(" ")}">「${dialog[2]}」</span>`;
						return `<ons-col class="${area}">${dialogHtml}</ons-col>`;
					}
				};
				expandableList_item.innerHTML = `
					<ons-row>
						${alignDialog()}
					</ons-row>
				`;

				expandableList_item.appendChild(input);
				label.appendChild(expandableList_item);
				expandableContent.appendChild(label);
			}
			list_item.innerHTML = `
				${items.title}
				<span class="list-item__subtitle">
					　${items.flag}
				</span>
			`;
			list_item.appendChild(expandableContent);
			form.appendChild(list_item);
		}
	}
	fragment.appendChild(form);

	// // SPDB.AsOneStory.Quotes
	// {
	//	 const list_header = document.createElement("ons-list-header");
	//	 list_header.innerHTML = `セリフ`;
	//	 fragment.appendChild(list_header);
	// }
	// for(const items of SPDB.AsOne.Quotes[tab])
	// {
	//	 const list_item = document.createElement("ons-list-item");
	//	 list_item.setAttribute("expandable", "");
	//	 list_item.innerHTML = `
	//		 ${items.when}
	//		 <div class="expandable-content">
	//			 ${items.quote}
	//		 </div>
	//	 `;
	//	 fragment.appendChild(list_item);
	// }

	const findElement = (query) =>
	{
		const listAsOneStory = document.getElementById(query);
		if(listAsOneStory != null)
		{
			clearInterval(idSetInterval);
			listAsOneStory.appendChild(fragment);
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listAsOneStory_${tab}`);
};

const tabs = ["Hikari", "Reika", "Shirley", "Isadora", "Nagi", "Kazuma"];
for(const tab of tabs)
{
	appendData(tab);
}
};

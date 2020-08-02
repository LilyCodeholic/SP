const funcPageNicePlay = () =>
{
const NicePlay = SPDB.NicePlay;

const category =
{
	"AR": "エア・リアル",
	"敵勢力": "敵勢力",
	"ポート": "ポート",
	"コア": "コア",
	"他": "その他",
	"キザナ": "キザナ",
};
const tabNicePlay = document.getElementById("tabNicePlay");
tabNicePlay.addEventListener("prechange", (event) =>
{
	textToolbar = `ナイスプレイ - ${category[event.tabItem.textContent]}`;
	document.querySelector("#pageNicePlay .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageNicePlay ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = NicePlay.Status;
	toast.toggle();
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	// ons-list-header
	const fixedList_header = document.createElement("ons-list-header");
	const backList_header = document.createElement("ons-list-header");
	fixedList_header.setAttribute("class", "fixed");
	fixedList_header.innerHTML = `
		<ons-row>
			<ons-col width="80%">ナイスプレイ</ons-col>
			<ons-col>ポイント</ons-col>
		</ons-row>
	`;
	fragment.appendChild(fixedList_header);
	fragment.appendChild(backList_header);

	for(const items of NicePlay[tab])
	{
		if(items.play == "？？？")
		{
			continue;
		}
		const list_item = document.createElement("ons-list-item");
		list_item.innerHTML = `
			<ons-row>
				<ons-col width="80%">
					${items.play.includes("(") ?
						`<span class="list-item__title">
							${items.play.split(/\(|\)/)[0]}
						</span><br>
						<span class="list-item__subtitle">
							${items.play.split(/\(|\)/)[1]}
						</span>` :
						`${items.play}`
					}
				</ons-col>
				<ons-col class="area6">
					${items.point}
				</ons-col>
			</ons-row>
		`;
		fragment.appendChild(list_item);
	}

	const findElement = (query) =>
	{
		const listNicePlay = document.getElementById(query);
		if(listNicePlay != null)
		{
			clearInterval(idSetInterval);
			listNicePlay.appendChild(fragment);
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listNicePlay_${tab}`);
};

const tabs = ["AirReal", "Object", "Port", "Core", "Other", "Kizana"];
for(const tab of tabs)
{
	appendData(tab);
}
};

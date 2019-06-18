const funcPageNicePlay = () =>
{
loadNicePlay();

const category =
{
	"AR":"エア・リアル",
	"敵勢力":"敵勢力",
	"ポート":"ポート",
	"コア":"コア",
	"他":"その他"
};
const tabNicePlay = document.getElementById("tabNicePlay");
tabNicePlay.addEventListener("prechange", (event) =>
{
	textToolbar = `ナイスプレイ - ${category[event.tabItem.textContent]}`;
	document.querySelector("#pageNicePlay .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageNicePlay ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.NicePlay.Status;
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

	for(const items of SPDB.NicePlay[tab])
	{
		const list_item = document.createElement("ons-list-item");
		list_item.innerHTML = `
			<ons-row>
				<ons-col width="80%">
					${items.play}
				</ons-col>
				<ons-col style="text-align: right;">
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

const tabs = ["AirReal", "Object", "Port", "Core", "Other"];
for(const tab of tabs)
{
	appendData(tab);
}
};

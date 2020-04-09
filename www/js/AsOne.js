const funcPageAsOne = () =>
{
const AsOne = SPDB.AsOne;

const fullName =
{
	"ヒカリ":"ヒカリ・ソラ",
	"レイカ":"レイカ・フロストエッジ",
	"シャーリー":"シャルロッテ・ダヴェーヌ",
	"イサドラ":"イサドラ・エザルタード",
	"ナギ":"ナギ・オネス",
	"カズマ":"カズマ・アブレイズ"
};
const tabAsOne = document.getElementById("tabAsOne");
tabAsOne.addEventListener("prechange", (event) =>
{
	textToolbar = `${fullName[event.tabItem.textContent]}`;
	document.querySelector("#pageAsOne .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageAsOne ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.AsOne.Status;
	toast.toggle();
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	// SPDB.AsOne.Skill
	{
		const list_header = document.createElement("ons-list-header");
		list_header.innerHTML = `
			<ons-row>
				<ons-col width="85%">アズワンスキル</ons-col>
				<ons-col>チームLv</ons-col>
			</ons-row>
		`;
		fragment.appendChild(list_header);
	}
	for(const items of SPDB.AsOne.Skill[tab])
	{
		if(items.skill == "？？？")
		{
			continue;
		}
		const list_item = document.createElement("ons-list-item");
		list_item.innerHTML = `
			<ons-row>
				<ons-col width="85%">
					${items.skill}
					<br>
					<span style="font-size: small;">
						　${items.flag}
					</span>
				</ons-col>
				<ons-col vertical-align="center" style="text-align: right;">
					${items.level}
				</ons-col>
			</ons-row>
		`;
		fragment.appendChild(list_item);
	}

	const findElement = (query) =>
	{
		const listAsOne = document.getElementById(query);
		if(listAsOne != null)
		{
			clearInterval(idSetInterval);
			listAsOne.appendChild(fragment);
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listAsOne_${tab}`);
};

const tabs = ["Hikari", "Reika", "Shirley", "Isadora", "Nagi", "Kazuma"];
for(const tab of tabs)
{
	appendData(tab);
}
};

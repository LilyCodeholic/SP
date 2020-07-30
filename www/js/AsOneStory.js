const funcPageAsOneStory = () =>
{
performance.mark("S_funcPageAsOneStory");
const AsOneStory = SPDB.AsOneStory;

const fullName =
{
	"ヒカリ":"ヒカリ・ソラ",
	"レイカ":"レイカ・フロストエッジ",
	"シャーリー":"シャルロッテ・ダヴェーヌ",
	"イサドラ":"イサドラ・エザルタード",
	"ナギ":"ナギ・オネス",
	"カズマ":"カズマ・アブレイズ",
	"他":"その他",
};
const tabAsOneStory = document.getElementById("tabAsOneStory");
tabAsOneStory.addEventListener("prechange", (event) =>
{
	textToolbar = `${fullName[event.tabItem.textContent]}`;
	document.querySelector("#pageAsOneStory .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageAsOneStory ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = AsOneStory.Status;
	toast.toggle();
};
const alignDialog = (dialog) =>
{
	const align = dialog[0];
	const actor = dialog[1];
	const lines = dialog[2];

	const area =
		align[0] === "C" ? "area8":
		align[0] === "R" ? "area9":
		align[0] === "L" ? "area7":"";

	if(area === "")
	{
		return "<ons-col>このアズワンストーリーはまだ入力されていません。</ons-col>";
	}
	else
	{
		const decolate = [];
		if(align.includes("Bold"))
		{
			decolate.push("bold");
		}
		if(align.includes("Large"))
		{
			decolate.push("large");
		}

		const dialogHtml = decolate.length <= 0 ?
			area === "area8" ?
				`${lines}`:
				`${actor}<br>「${lines}」`
			:
			`${actor}<br><span class="${decolate.join(" ")}">「${lines}」</span>`;
		return `<ons-col class="${area}">${dialogHtml}</ons-col>`;
	}
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	// AsOneStory.Story
	const form = document.createElement("form");
	form.setAttribute("name", `story${tab}`);

	AsOneStory.Story[tab].forEach((categories, indexCategory) =>
	{
		const list_header = document.createElement("ons-list-header");
		list_header.innerHTML = categories.category;
		form.appendChild(list_header);
		categories.scene.forEach((titles, indexTitle) =>
		{

			if(titles.title == "？？？")
			{
				return;
			}

			const list_item = document.createElement("ons-list-item");
			list_item.setAttribute("expandable", "");
			const expandableContent = document.createElement("div");
			expandableContent.setAttribute("class", "expandable-content");

			titles.dialog.forEach((dialog, indexDialog) =>
			{

				const nameRadio = `${tab}${indexCategory}-${indexTitle}`;
				const idRadio = `${tab}${indexCategory}-${indexTitle}-${indexDialog}`;
				const idList_item = `li${tab}${indexCategory}-${indexTitle}-${indexDialog}`;

				const label = document.createElement("label");
				label.setAttribute("for", idRadio);

				const expandableList_item = document.createElement("ons-list-item");
				expandableList_item.setAttribute("tappable", "");
				expandableList_item.setAttribute("id", idList_item);
				if(indexDialog != 0)
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
				input.setAttribute("value", indexDialog);
				input.setAttribute("class", "hidden");
				input.onclick = () =>
				{
					const radioNodeList = document.forms[`story${tab}`][nameRadio];
					const value = Number(document.forms[`story${tab}`][nameRadio].value);
					const targetNum = value + 1;
					if(radioNodeList.length > targetNum)
					{
						const edit = document.getElementById(`li${tab}${indexCategory}-${indexTitle}-${targetNum}`);
						edit.setAttribute("class", "asoneStory");
						edit.scrollIntoView(false);
					}
				};

				expandableList_item.innerHTML = `
					<ons-row>
						${alignDialog(dialog)}
					</ons-row>
				`;

				expandableList_item.appendChild(input);
				label.appendChild(expandableList_item);
				expandableContent.appendChild(label);
			});
			list_item.innerHTML = `
				${titles.title}
				<span class="list-item__subtitle">
					　${titles.flag}
				</span>
			`;
			list_item.appendChild(expandableContent);
			form.appendChild(list_item);
		});
	});
	fragment.appendChild(form);

	// // AsOneStory.Quotes
	// {
	//	 const list_header = document.createElement("ons-list-header");
	//	 list_header.innerHTML = `セリフ`;
	//	 fragment.appendChild(list_header);
	// }
	// for(const items of AsOne.Quotes[tab])
	// {
	//	 const list_item = document.createElement("ons-list-item");
	//	 list_item.setAttribute("expandable", "");
	//	 list_item.innerHTML = `
	//		 ${titles.when}
	//		 <div class="expandable-content">
	//			 ${titles.quote}
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

const tabs = ["Hikari", "Reika", "Shirley", "Isadora", "Nagi", "Kazuma", "Other"];
for(const tab of tabs)
{
	appendData(tab);
}
performance.mark("E_funcPageAsOneStory");
performance.measure("funcPageAsOneStory", "S_funcPageAsOneStory", "E_funcPageAsOneStory");
console.log(performance.getEntriesByName("funcPageAsOneStory")[0].duration);
};

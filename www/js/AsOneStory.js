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
/*
const alignDialog = ([align, actor, lines]) =>
{
	const returnDialog = {decolate: []}
	switch(align[0])
	{
		case "C":
			returnDialog.area = "area8";
			returnDialog.html = lines;
			break;
		case "R":
			returnDialog.area = "area9";
			returnDialog.html = `${actor}<br>「${lines}」`;
			break;
		case "L":
			returnDialog.area = "area7";
			returnDialog.html = `${actor}<br>「${lines}」`;
			break;
		default:
			returnDialog.area = "area5";
			returnDialog.html = "このアズワンストーリーはまだ入力されていません。";
	}
	if(align.includes("Bold"))
	{
		returnDialog.decolate.push("bold");
	}
	if(align.includes("Large"))
	{
		returnDialog.decolate.push("large");
	}

	return `<div class="${returnDialog.area} ${returnDialog.decolate.join(" ")}">${returnDialog.html}</div>`;
};
*/
const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	// AsOneStory.Story
	const article = document.createElement("article");
	article.setAttribute("name", `story${tab}`);

	AsOneStory.Story[tab].forEach((categories, indexCategory) =>
	{
		const list_header = document.createElement("ons-list-header");
		list_header.innerHTML = categories.category;
		article.appendChild(list_header);
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
				const expandableDiv = document.createElement("div");
				const expandableSpan = document.createElement("span");

				const decolate = [];
				const [align, actor, lines] = dialog;
				const area = (() =>
				{
					switch(align[0])
					{
						case "C": return "area5";
						case "R": return "area6";
						case "L": return "area4";
						default : return "area5";
					}
				})();
				const html = (() =>
				{
					switch(align[0])
					{
						case "C": return lines;
						case "R": return `「${lines}」`;
						case "L": return `「${lines}」`;
						default : return "このアズワンストーリーはまだ入力されていません。";
					}
				})();
				if(align.includes("Bold"))
				{
					decolate.push("bold");
				}
				if(align.includes("Large"))
				{
					decolate.push("large");
				}

				expandableSpan.setAttribute("class", decolate.join(" "));
				expandableSpan.insertAdjacentHTML("beforeend", html);

				expandableDiv.setAttribute("class", area);

				const expandableList_item = document.createElement("ons-list-item");
				expandableList_item.setAttribute("tappable", "");
				expandableList_item.setAttribute("id", `${tab}${indexCategory}-${indexTitle}-${indexDialog}`);
				if(indexDialog === 0)
				{
					expandableList_item.setAttribute("class", "asoneStory");
				}
				else
				{
					expandableList_item.setAttribute("class", "hidden asoneStory");
				}
				expandableList_item.onclick = () =>
				{
					const targetNum = indexDialog + 1;
					if(titles.dialog.length > targetNum)
					{
						const edit = document.getElementById(`${tab}${indexCategory}-${indexTitle}-${targetNum}`);
						edit.setAttribute("class", "asoneStory");
						edit.scrollIntoView(false);
					}
				};

				expandableDiv.appendChild(expandableSpan)
				expandableDiv.insertAdjacentHTML("afterbegin", `${actor}<br>`);
				expandableList_item.appendChild(expandableDiv);
				expandableContent.appendChild(expandableList_item);
			});

			list_item.insertAdjacentHTML("beforeend", `
				${titles.title}
				<span class="list-item__subtitle">
					　${titles.flag}
				</span>
			`);
			list_item.appendChild(expandableContent);
			article.appendChild(list_item);
		});
	});
	fragment.appendChild(article);

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

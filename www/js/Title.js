const funcPageTitle = () =>
{
const Title = SPDB.Title

const tabTitle = document.getElementById("tabTitle")
tabTitle.addEventListener("prechange", (event) =>
{
	textToolbar = `称号 - ${event.tabItem.textContent}`
	document.querySelector("#pageTitle .center").innerHTML = textToolbar
}, false)
document.querySelector("#pageTitle ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = Title.Status
	toast.toggle()
}

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment()
	for(const items of Title[tab])
	{
		if(items.title == "？？？")
		{
			continue
		}
		const list_item = document.createElement("ons-list-item")
		list_item.innerHTML = `
			<span class="list-item__title">
				${items.title}
			</span>
			<span class="list-item__subtitle">
				　${items.flag}
			</span>
		`
		fragment.appendChild(list_item)
	}

	const findElement = (query) =>
	{
		const listTitle = document.getElementById(query)
		if(listTitle != null)
		{
			clearInterval(idSetInterval)
			listTitle.appendChild(fragment)
		}
		else
		{
			console.log(`${query} not found yet...`)
		}
	}
	const idSetInterval = setInterval(findElement, 100, `listTitle_${tab}`)
}

const tabs = ["Play", "Battle", "AsOne", "Special"]
for(const tab of tabs)
{
	appendData(tab)
}
}

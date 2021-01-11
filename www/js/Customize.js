const funcPageCustomize = () =>
{
const Customize = SPDB.Customize

const tabCustomize = document.getElementById("tabCustomize")
tabCustomize.addEventListener("prechange", (event) =>
{
	textToolbar = `${event.tabItem.textContent}`
	document.querySelector("#pageCustomize .center").innerHTML = textToolbar
}, false)
document.querySelector("#pageCustomize ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.Customize.Status
	toast.toggle()
}

const appendData = (tab) =>
{

	const fragment = document.createDocumentFragment()

	let headerWho = ""
	for(const items of SPDB.Customize[tab])
	{
		const list_header = document.createElement("ons-list-header")
		switch(tab)
		{
			case "VictoryPose":
				if(headerWho == "" || headerWho != items.who)
				{
					list_header.innerHTML = `
						${items.who}
					`
					fragment.appendChild(list_header)
				}
				headerWho = items.who
				break
			default:
				console.error("Customize: error")
				break
		}

		const list_item = document.createElement("ons-list-item")
		switch(tab)
		{
			case "VictoryPose":
				list_item.innerHTML = `
					<span class="list-item__title">
						${items.pose}
					</span>
					<span class="list-item__subtitle">
						　${items.flag}
					</span>
				`
				break
			case "LineColor":
				list_item.innerHTML = `
					<ons-row>
						<ons-col>
							${items.color}
						</ons-col>
						<ons-col style="background: linear-gradient(to bottom right, white 10%, ${items.RGB}, white 90%)">
						</ons-col>
					</ons-row>
				`
				break
			case "PartsColor":
				list_item.innerHTML = `
					<ons-row>
						<ons-col>
							${items.color}
						</ons-col>
						<ons-col style="background: ${items.RGB}">
						</ons-col>
					</ons-row>
				`
				break
			default:
				console.error("Customize: error")
				break
		}
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
	const idSetInterval = setInterval(findElement, 100, `listCustomize_${tab}`)
}

appendData("VictoryPose")
appendData("LineColor")
appendData("PartsColor")
}

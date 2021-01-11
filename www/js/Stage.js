const funcPageStage = () =>
{
loadStage()

const appendData = (list) =>
{
	const fragment = document.createDocumentFragment()
	for(const items of SPDB.Stage[list])
	{
		if(items.name == "？？？")
		{
			continue
		}
		const list_item = document.createElement("ons-list-item")
		list_item.setAttribute("expandable", "")
		list_item.innerHTML = `
			<span class="list-item__title">
				${items.name}
			</span>
		`

		const expandableContent = document.createElement("div")
		expandableContent.setAttribute("class", "expandable-content")
			expandableContent.innerHTML = items.svg

		list_item.appendChild(expandableContent)
		fragment.appendChild(list_item)
	}

	const findElement = (query) =>
	{
		const listStage = document.getElementById(query)
		if(listStage != null)
		{
			clearInterval(idSetInterval)
			listStage.appendChild(fragment)
		}
		else
		{
			console.log(`${query} not found yet...`)
		}
	}
	const idSetInterval = setInterval(findElement, 100, `listStage`)
}

appendData("Map")
}

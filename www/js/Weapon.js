const funcPageWeapon = () =>
{
const Weapon = SPDB.Weapon

const tabWeapon = document.getElementById("tabWeapon")
tabWeapon.addEventListener("prechange", (event) =>
{
	textToolbar = `武器 - ${event.tabItem.textContent}`
	document.querySelector("#pageWeapon .center").innerHTML = textToolbar
}, false)
document.querySelector("#pageWeapon ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = Weapon.Status
	toast.toggle()
}

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment()

	const pSection = document.createElement("section")
	pSection.setAttribute("class", "portrait")
	const lSection = document.createElement("section")
	lSection.setAttribute("class", "landscape")

	// ons-list-header
	const pFixedList_header = document.createElement("ons-list-header")
	const pBackList_header = document.createElement("ons-list-header")
	pFixedList_header.setAttribute("class", "fixed")
	pFixedList_header.innerHTML = `
		<ons-row class="expand">
			<ons-col width="60%">武器名</ons-col>
			<ons-col class="area5">AR</ons-col>
			<ons-col class="area5">マグ</ons-col>
			<ons-col class="area5">リロ</ons-col>
		</ons-row>
	`
	pSection.appendChild(pFixedList_header)
	pSection.appendChild(pBackList_header)

	const lFixedList_header = document.createElement("ons-list-header")
	const lBackList_header = document.createElement("ons-list-header")
	lFixedList_header.setAttribute("class", "fixed")
	lFixedList_header.innerHTML = `
		<ons-row class="expand">
			<ons-col width="40%">武器名</ons-col>
			<ons-col class="area5">対AR</ons-col>
			<ons-col class="area5">対マグ</ons-col>
			<ons-col class="area5">リロード</ons-col>
			<ons-col class="area5">弾数</ons-col>
			<ons-col width="20%" class="area5">特性</ons-col>
		</ons-row>
	`
	lSection.appendChild(lFixedList_header)
	lSection.appendChild(lBackList_header)

	// ons-list-item
	for(const items of Weapon[tab])
	{
		const pList_item = document.createElement("ons-list-item")
		pList_item.setAttribute("expandable", "")
		pList_item.innerHTML = `
			<ons-row>
				<ons-col width="7%" class="area4">${items.side}</ons-col>
				<ons-col width="53%">
					${items.name}
					<br>
					<span style="font-size:small">
						${items.weaponType} ${items.attackType}
					</span>
				</ons-col>
				<ons-col class="area5">${items.vsAr}</ons-col>
				<ons-col class="area5">${items.vsMag}</ons-col>
				<ons-col class="area5">${items.reload}</ons-col>
			</ons-row>
			<div class="expandable-content">
				${items.exParameter != undefined ?
					`<ons-row>
						<ons-col>　${items.exParameter[0]}</ons-col>
						<ons-col>${items.exParameter[1]}</ons-col>
					</ons-row>` :
					''
				}
				<ons-row>
					<ons-col>　弾数</ons-col>
					<ons-col>${items.ammo}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　トリガータイプ</ons-col>
					<ons-col>${items.triggerType}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　対象</ons-col>
					<ons-col>${items.target}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　リロードタイミング</ons-col>
					<ons-col>${items.reloadTiming}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　特性</ons-col>
					<ons-col>${items.feature}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　入手方法</ons-col>
					<ons-col>${items.howToGet}</ons-col>
				</ons-row>
			</div>
		`
		pSection.appendChild(pList_item)

		const lList_item = document.createElement("ons-list-item")
		lList_item.setAttribute("expandable", "")
		lList_item.innerHTML = `
			<ons-row>
				<ons-col width="7%" class="area4">${items.side}</ons-col>
				<ons-col width="33%">
					${items.name}
					<br>
					<span style="font-size:small">
						${items.weaponType} ${items.attackType}
					</span>
				</ons-col>
				<ons-col class="area5">${items.vsAR}</ons-col>
				<ons-col class="area5">${items.vsMAG}</ons-col>
				<ons-col class="area5">${items.reload}</ons-col>
				<ons-col class="area6">
					${/, /.test(items.ammo) ?
						`${items.ammo.replace(/, /, '　<br>')}　` :
						`${items.ammo}　`
					}
				</ons-col>
				<ons-col width="20%" class="area4">
					${/、/.test(items.feature) ?
						`${items.feature.replace(/、/, '<br>')}` :
						`${items.feature}`
					}
				</ons-col>
			</ons-row>
			<div class="expandable-content">
				${items.exParameter != undefined ?
					`<ons-row>
						<ons-col>　${items.exParameter[0]}</ons-col>
						<ons-col>${items.exParameter[1]}</ons-col>
					</ons-row>` :
					''
				}
				<ons-row>
					<ons-col>　トリガータイプ</ons-col>
					<ons-col>${items.triggerType}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　対象</ons-col>
					<ons-col>${items.target}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　リロードタイミング</ons-col>
					<ons-col>${items.reloadTiming}</ons-col>
				</ons-row>
				<ons-row>
					<ons-col>　入手方法</ons-col>
					<ons-col>${items.howToGet}</ons-col>
				</ons-row>
			</div>
		`
		lSection.appendChild(lList_item)

		fragment.appendChild(pSection)
		fragment.appendChild(lSection)
	}

	const findElement = (query) =>
	{
		const listWeapon = document.getElementById(query)
		if(listWeapon != null)
		{
			clearInterval(idSetInterval)
			listWeapon.appendChild(fragment)
			if(ons.orientation.isPortrait())
			{
				console.log("Portraiting.")
				const hideOrientation = document.getElementsByClassName("landscape")
				for(const section of hideOrientation)
				{
					section.classList.add("hidden")
				}
			}
			else
			{
				console.log("Landscaping.")
				const hideOrientation = document.getElementsByClassName("portrait")
				for(const section of hideOrientation)
				{
					section.classList.add("hidden")
				}
			}
		}
		else
		{
			console.log(`${query} not found yet...`)
		}
	}
	const idSetInterval = setInterval(findElement, 100, `listWeapon_${tab}`)
}

const tabs = ["Assault", "Vanguard", "Support"]
for(const tab of tabs)
{
	appendData(tab)
}

ons.orientation.on("change", (event) =>
{
	if(event.isPortrait)
	{
		console.log("Portraited.")
		const hideOrientation = document.getElementsByClassName("landscape")
		const showOrientation = document.getElementsByClassName("portrait")
		for(const section of hideOrientation)
		{
			section.classList.add("hidden")
		}
		for(const section of showOrientation)
		{
			section.classList.remove("hidden")
		}
	}
	else
	{
		console.log("Landscaped.")
		const hideOrientation = document.getElementsByClassName("portrait")
		const showOrientation = document.getElementsByClassName("landscape")
		for(const section of hideOrientation)
		{
			section.classList.add("hidden")
		}
		for(const section of showOrientation)
		{
			section.classList.remove("hidden")
		}
	}
})
}

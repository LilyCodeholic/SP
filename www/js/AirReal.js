const funcPageAirReal = () =>
{
const AirReal = SPDB.AirReal;

const partsName =
{
	"頭":"ヘッド",
	"腕":"アーム",
	"胴":"ボディ",
	"翼":"ウィング",
	"脚":"レッグ"
};
const tabAirReal = document.getElementById("tabAirReal");
tabAirReal.addEventListener("prechange", (event) =>
{
	textToolbar = `エア・リアル - ${partsName[event.tabItem.textContent]}`;
	document.querySelector("#pageAirReal .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageAirReal ons-toolbar-button").onclick = () =>
{
	document.getElementById("textToast").innerHTML = SPDB.AirReal.Status;
	toast.toggle();
};

const appendData = (tab) =>
{
	const fragment = document.createDocumentFragment();

	const pSection = document.createElement("section");
	pSection.setAttribute("class", "portrait");
	const lSection = document.createElement("section");
	lSection.setAttribute("class", "landscape");

	// ons-list-header
	const pFixedList_header = document.createElement("ons-list-header");
	const pBackList_header = document.createElement("ons-list-header");
	pFixedList_header.setAttribute("class", "fixed");
	switch(tab)
	{
		case "Head":
			pFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="70%"></ons-col>
					<ons-col>ロックオン</ons-col>
				</ons-row>
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">距離</ons-col>
					<ons-col class="area5">範囲</ons-col>
				</ons-row>
			`;
			pBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Arm":
			pFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">重量</ons-col>
				</ons-row>
			`;
			pBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Body":
			pFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="70%"></ons-col>
					<ons-col>アーマー</ons-col>
				</ons-row>
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">アーマー</ons-col>
					<ons-col class="area5">全回復</ons-col>
					<ons-col class="area5">回復待機</ons-col>
				</ons-row>
			`;
			pBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Wing":
			pFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">回避</ons-col>
					<ons-col class="area5">ダッシュ</ons-col>
					<ons-col class="area5">FD溜め</ons-col>
					<ons-col class="area5">ドリフト</ons-col>
				</ons-row>
			`;
			pBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Leg":
			pFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">ポート占拠</ons-col>
				</ons-row>
			`;
			pBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		default:
			console.error("AirReal: error");
			break;
	}
	pSection.appendChild(pFixedList_header);
	pSection.appendChild(pBackList_header);

	const lFixedList_header = document.createElement("ons-list-header");
	const lBackList_header = document.createElement("ons-list-header");
	lFixedList_header.setAttribute("class", "fixed");
	switch(tab)
	{
		case "Head":
			lFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="70%"></ons-col>
					<ons-col>ロックオン</ons-col>
				</ons-row>
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">距離</ons-col>
					<ons-col class="area5">範囲</ons-col>
				</ons-row>
			`;
			lBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Arm":
			lFixedList_header.innerHTML = `
				<ons-row class="notexpand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col width="40%" class="area5">特性</ons-col>
				</ons-row>
			`;
			lBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Body":
			lFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="76%"></ons-col>
					<ons-col>アーマー</ons-col>
				</ons-row>
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">アーマー</ons-col>
					<ons-col class="area5">全回復</ons-col>
					<ons-col class="area5">回復待機</ons-col>
				</ons-row>
			`;
			lBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Wing":
			lFixedList_header.innerHTML = `
				<ons-row class="expand">
					<ons-col width="40%">パーツ名</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">回避</ons-col>
					<ons-col class="area5">ダッシュ</ons-col>
					<ons-col class="area5">FD溜め</ons-col>
					<ons-col class="area5">ドリフト</ons-col>
				</ons-row>
			`;
			lBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		case "Leg":
			lFixedList_header.innerHTML = `
				<ons-row class="notexpand">
					<ons-col width="35%">パーツ名</ons-col>
					<ons-col class="area5">重量</ons-col>
					<ons-col class="area5">耐久値</ons-col>
					<ons-col class="area5">占拠</ons-col>
					<ons-col width="40%" class="area5">特性</ons-col>
				</ons-row>
			`;
			lBackList_header.innerHTML = `
				<ons-row><ons-col>background</ons-col></ons-row>
			`;
			break;
		default:
			console.error("AirReal: error");
			break;
	}
	lSection.appendChild(lFixedList_header);
	lSection.appendChild(lBackList_header);

	// ons-list-item
	for(const items of SPDB.AirReal[tab])
	{
		if(items.name == "？？？")
		{
			continue;
		}

		const pList_item = document.createElement("ons-list-item");
		pList_item.setAttribute("expandable", "");
		switch(tab)
		{
			case "Head":
				pList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area5">${items.length}</ons-col>
						<ons-col class="area5">${items.range}</ons-col>
					</ons-row>
					<div class="expandable-content">
						${items.armor ?
							`<ons-row>
								<ons-col width="25%">　アーマー</ons-col>
								<ons-col>+ ${items.armor}</ons-col>
							</ons-row>`:
							``
						}
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${items.feature.join('<br>')}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Arm":
				pList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
					</ons-row>
					<div class="expandable-content">
						${items.armor ?
							`<ons-row>
								<ons-col width="25%">　アーマー</ons-col>
								<ons-col>+ ${items.armor}</ons-col>
							</ons-row>`:
							``
						}
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${Array.isArray(items.feature) === true ?
									`${items.feature[0]}<br>${items.feature[1]}`:
									`${items.feature}`
								}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Body":
				pList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area6">${items.armor}</ons-col>
						<ons-col class="area5">${items.repairSpeed}</ons-col>
						<ons-col class="area5">${items.repairWaiting}</ons-col>
					</ons-row>
					<div class="expandable-content">
						<ons-row>
							<ons-col width="50%">　重量</ons-col>
							<ons-col>${items.weight}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${items.feature.join('<br>')}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Wing":
				pList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area5">${items.dodge}</ons-col>
						<ons-col class="area5">${items.dash}</ons-col>
						<ons-col class="area5">${items.fdCharge}</ons-col>
						<ons-col class="area5">${items.drift}</ons-col>
					</ons-row>
					<div class="expandable-content">
						${items.armor ?
							`<ons-row>
								<ons-col width="50%">　アーマー</ons-col>
								<ons-col>+ ${items.armor}</ons-col>
							</ons-row>`:
							``
						}
						<ons-row>
							<ons-col width="50%">　耐久値</ons-col>
							<ons-col>${items.durability}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="50%">　重量</ons-col>
							<ons-col>${items.weight}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="50%">　ダッシュタイプ</ons-col>
							<ons-col>${items.dashType}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="50%">　フルドライブタイプ</ons-col>
							<ons-col>${items.fdType}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${items.feature.join('<br>')}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Leg":
				pList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area5">${items.occupation}</ons-col>
					</ons-row>
					<div class="expandable-content">
						${items.armor ?
							`<ons-row>
								<ons-col width="25%">　アーマー</ons-col>
								<ons-col>+ ${items.armor}</ons-col>
							</ons-row>`:
							``
						}
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${items.feature.join('<br>')}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			default:
				console.error("AirReal: error");
				break;
		}
		pSection.appendChild(pList_item);

		const lList_item = document.createElement("ons-list-item");
		switch(tab)
		{
			case "Head":
				lList_item.setAttribute("expandable", "");
				lList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area5">${items.length}</ons-col>
						<ons-col class="area5">${items.range}</ons-col>
					</ons-row>
					<div class="expandable-content">
						${items.armor ?
							`<ons-row>
								<ons-col width="25%">　アーマー</ons-col>
								<ons-col>+ ${items.armor}</ons-col>
							</ons-row>`:
							``
						}
						<ons-row>
							<ons-col width="25%">　特性</ons-col>
							<ons-col>
								${items.feature.join('<br>')}
							</ons-col>
						</ons-row>
						</ons-row>
					</div>
				`;
				break;
			case "Arm":
				lList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%" class="area4">${items.name}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col width="40%">
							${Array.isArray(items.feature) === true ?
								items.armor ?
									`　${items.feature[0]}<br>　${items.feature[1]}<br>　アーマー +${items.armor}`:
									`　${items.feature[0]}<br>　${items.feature[1]}`
								:
								items.armor ?
									items.feature !== "-" ?
										`　${items.feature}<br>　アーマー +${items.armor}`:
										`　アーマー +${items.armor}`
									:
									`　${items.feature}`
							}
						</ons-col>
					</ons-row>
				`;
				break;
			case "Body":
				lList_item.setAttribute("expandable", "");
				lList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area6">${items.armor}</ons-col>
						<ons-col class="area5">${items.repairSpeed}</ons-col>
						<ons-col class="area5">${items.repairWaiting}</ons-col>
					</ons-row>
					<div class="expandable-content">
						<ons-row>
							<ons-col width="50%">　特性</ons-col>
							<ons-col>
								${Array.isArray(items.feature) === true ?
									`${items.feature[0]}<br>${items.feature[1]}`:
									`${items.feature}`
								}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Wing":
				lList_item.setAttribute("expandable", "");
				lList_item.innerHTML = `
					<ons-row>
						<ons-col width="40%">${items.name}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area5">${items.dodge}</ons-col>
						<ons-col class="area5">${items.dash}</ons-col>
						<ons-col class="area5">${items.fdCharge}</ons-col>
						<ons-col class="area5">${items.drift}</ons-col>
					</ons-row>
					<div class="expandable-content">
						<ons-row>
							<ons-col width="50%">　ダッシュタイプ</ons-col>
							<ons-col>${items.dashType}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="50%">　フルドライブタイプ</ons-col>
							<ons-col>${items.fdType}</ons-col>
						</ons-row>
						<ons-row>
							<ons-col width="50%">　特性</ons-col>
							<ons-col>
								${Array.isArray(items.feature) === true ?
									items.armor ?
										`${items.feature[0]}<br>${items.feature[1]}<br>アーマー +${items.armor}`:
										`${items.feature[0]}<br>${items.feature[1]}`
									:
									items.armor ?
										items.feature !== "-" ?
											`${items.feature}<br>アーマー +${items.armor}`:
											`アーマー +${items.armor}`
										:
										`${items.feature}`
								}
							</ons-col>
						</ons-row>
					</div>
				`;
				break;
			case "Leg":
				lList_item.innerHTML = `
					<ons-row>
						<ons-col width="35%">${items.name}</ons-col>
						<ons-col class="area6">${items.weight}</ons-col>
						<ons-col class="area6">${items.durability}</ons-col>
						<ons-col class="area5">${items.occupation}</ons-col>
						<ons-col width="40%">
							${Array.isArray(items.feature) === true ?
								items.armor ?
									`　${items.feature[0]}<br>　${items.feature[1]}<br>　アーマー +${items.armor}`:
									`　${items.feature[0]}<br>　${items.feature[1]}`
								:
								items.armor ?
									items.feature !== "-" ?
										`　${items.feature}<br>　アーマー +${items.armor}`:
										`　アーマー +${items.armor}`
									:
									`　${items.feature}`
							}
						</ons-col>
					</div>
				`;
				break;
			default:
				console.error("AirReal: error");
				break;
		}
		lSection.appendChild(lList_item);

		fragment.appendChild(pSection);
		fragment.appendChild(lSection);
	}

	const findElement = (query) =>
	{
		const listAirReal = document.getElementById(query);
		if(listAirReal != null)
		{
			clearInterval(idSetInterval);
			listAirReal.appendChild(fragment);
			if(ons.orientation.isPortrait())
			{
				console.log("Portraiting.");
				const hideOrientation = document.getElementsByClassName("landscape");
				for(const section of hideOrientation)
				{
					section.classList.add("hidden");
				}
			}
			else
			{
				console.log("Landscaping.");
				const hideOrientation = document.getElementsByClassName("portrait");
				for(const section of hideOrientation)
				{
					section.classList.add("hidden");
				}
			}
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listAirReal_${tab}`);
};

const tabs = ["Head", "Arm", "Body", "Wing", "Leg"];
for(const tab of tabs)
{
	appendData(tab);
}

ons.orientation.on("change", (event) =>
{
	if(event.isPortrait)
	{
		console.log("Portraited.");
		const hideOrientation = document.getElementsByClassName("landscape");
		const showOrientation = document.getElementsByClassName("portrait");
		for(const section of hideOrientation)
		{
			section.classList.add("hidden");
		}
		for(const section of showOrientation)
		{
			section.classList.remove("hidden");
		}
	}
	else
	{
		console.log("Landscaped.");
		const hideOrientation = document.getElementsByClassName("portrait");
		const showOrientation = document.getElementsByClassName("landscape");
		for(const section of hideOrientation)
		{
			section.classList.add("hidden");
		}
		for(const section of showOrientation)
		{
			section.classList.remove("hidden");
		}
	}
});
};

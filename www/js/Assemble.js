const funcPageAssemble = () =>
{
const AirReal = SPDB.AirReal;
const Weapon = SPDB.Weapon;
const AsOne = SPDB.AsOne;

const appendData = () =>
{
	// AsOnes[0].En -> "Hikari", AsOnes[0].Ja -> "ヒカリ"
	const AsOnes = Array.from(AsOne.Order);
	// Skills.Hikari[0] -> "武器切り替え速度上昇"
	const Skills = {}
	for(const asone of Object.keys(AsOne.Skill))
	{
		if(asone == "Status" || asone == "Order")
		{
			continue;
		}
		else if(Skills[asone] == undefined)
		{
			Skills[asone] = [];
		}
		for(const skill of AsOne.Skill[asone])
		{
			Skills[asone].push(skill.skill);
		}
	}
	// Weapons.Assault.L[0] -> "拳銃 天火", Weapons.Support.LR[0] -> "ヴァイト"
	const Weapons = {Assault: {L: [], R: [], LR: []}, Vanguard: {L: [], R: [], LR: []}, Support: {L: [], R: [], LR: []}};
	for(const role of Object.keys(Weapon))
	{
		if(role == "Status")
		{
			continue;
		}
		for(const weapon of Weapon[role])
		{
			switch(weapon.side)
			{
				case "L":
					Weapons[role].L.push(weapon.name);
					break;
				case "R":
					Weapons[role].R.push(weapon.name);
					break;
				case "LR":
					Weapons[role].LR.push(weapon.name);
					break;
			}
		}
	}
	// AirReals[0] -> "ソリディア"
	const AirReals = [];
	for(const part of AirReal.Head)
	{
		AirReals.push(part.name);
	}

	const fragment = document.createDocumentFragment();
	const pSection = document.createElement("section");
	pSection.setAttribute("class", "portrait");

	// AsOne
	const addAsOneExpandableContent = () =>
	{
		const pAsOneRadio = document.createElement("div");
		pAsOneRadio.setAttribute("id", "pAsOne");
		pAsOneRadio.setAttribute("class", "expandable-content");
		const pAsOneRow = document.createElement("ons-row");
		const pAsOneCol = document.createElement("ons-col");
		const pAsOneSkillCol = document.createElement("ons-col");
		const pAsOneSkillDiv = {};
		AsOnes.forEach((who, asoneIndex) =>
		{
			pAsOneCol.insertAdjacentHTML("beforeend", `
				<ons-list-item>
					<label class="left">
						<ons-radio name="pAsOne" input-id="pAsOne${asoneIndex}"
						${asoneIndex == 0 ?
							` checked`:
							``
						}></ons-radio>
					</label>
					<label for="pAsOne${asoneIndex}" class="center">${who.Ja}</label>
				</ons-list-item>
			`);

			pAsOneSkillDiv[who.En] = document.createElement("div");
			pAsOneSkillDiv[who.En].setAttribute("id", `pAsOne${who.En}`);
			if(asoneIndex != 0)
			{
				pAsOneSkillDiv[who.En].setAttribute("class", "hidden");
			}
			pAsOneSkillCol.innerHTML = "";
			Skills[who.En].forEach((skill, skillIndex) =>
			{
				if(skill == "？？？")
				{
					return;
				}
				pAsOneSkillCol.insertAdjacentHTML("beforeend", `
					<ons-list-item>
						<label class="left">
							<ons-radio name="pAsOneSkill" input-id="pAsOne${asoneIndex}-${skillIndex}"
							${asoneIndex == 0 && skillIndex == 0 ?
								` checked`:
								``
						}></ons-radio>
						</label>
						<label for="pAsOne${asoneIndex}-${skillIndex}" class="center">${skill}</label>
					</ons-list-item>
				`);
			});
			pAsOneSkillDiv[who.En].appendChild(pAsOneSkillCol.cloneNode(true));
		});
		pAsOneRow.appendChild(pAsOneCol);
		for(const who of AsOnes)
		{
			pAsOneRow.appendChild(pAsOneSkillDiv[who.En]);
		}
		pAsOneRadio.appendChild(pAsOneRow);

		return pAsOneRadio.outerHTML;
	};
	const pAsOneList_header = document.createElement("ons-list-header");
	pAsOneList_header.innerHTML = `
		<ons-row>
			<ons-col>
				アズワン
			</ons-col>
			<ons-col>
				アズワンスキル
			</ons-col>
		</ons-row>
	`;
	const pAsOneList_item = document.createElement("ons-list-item");
	pAsOneList_item.setAttribute("expandable", "");
	pAsOneList_item.innerHTML = `
		<ons-row>
			<ons-col id="pTxtAsOne" class="area5">
				${AsOnes[0].Ja}
			</ons-col>
			<ons-col id="pTxtSkill" class="area5">
				${Skills[AsOnes[0].En][0]}
			</ons-col>
		</ons-row>
		${addAsOneExpandableContent()}
	`;

	pSection.appendChild(pAsOneList_header);
	pSection.appendChild(pAsOneList_item);

	// Weapon
	const addWeaponExpandableContent = (role, order) =>
	{
		const pWeaponRadio = document.createElement("div");
		pWeaponRadio.setAttribute("id", `p${role}${order}`);
		pWeaponRadio.setAttribute("class", "expandable-content");
		const pWeaponSingleRow = document.createElement("ons-row");
		const pWeaponLCol = document.createElement("ons-col");
		const pWeaponRCol = document.createElement("ons-col");
		const pWeaponDoubleRow = document.createElement("ons-row");
		const pWeaponLRCol = document.createElement("ons-col");

		Weapons[role].L.forEach((weapon, weaponIndex) =>
		{
			pWeaponLCol.insertAdjacentHTML("beforeend", `
				<ons-list-item>
					<label class="left">
						<ons-radio name="p${role}${order}L" input-id="p${role}${order}L${weaponIndex}"
						${(order == "1st" && weaponIndex == 0) || (order == "2nd" && weaponIndex == 1) ?
							` checked`:
							``
						}></ons-radio>
					</label>
					<label for="p${role}${order}L${weaponIndex}" class="center">${weapon}</label>
				</ons-list-item>
			`);
		});
		Weapons[role].R.forEach((weapon, weaponIndex) =>
		{
			pWeaponRCol.insertAdjacentHTML("beforeend", `
				<ons-list-item>
					<label class="left">
						<ons-radio name="p${role}${order}R" input-id="p${role}${order}R${weaponIndex}"
						${(order == "1st" && weaponIndex == 0) || (order == "2nd" && weaponIndex == 1) ?
							` checked`:
							``
						}></ons-radio>
					</label>
					<label for="p${role}${order}R${weaponIndex}" class="center">${weapon}</label>
				</ons-list-item>
			`);
		});
		Weapons[role].LR.forEach((weapon, weaponIndex) =>
		{
			pWeaponLRCol.insertAdjacentHTML("beforeend", `
				<ons-list-item>
					<label class="left">
						<ons-radio name="p${role}${order}LR" input-id="p${role}${order}LR${weaponIndex}"></ons-radio>
					</label>
					<label for="p${role}${order}LR${weaponIndex}" class="center">${weapon}</label>
				</ons-list-item>
			`);
		});
		pWeaponSingleRow.appendChild(pWeaponLCol);
		pWeaponSingleRow.appendChild(pWeaponRCol);
		pWeaponDoubleRow.appendChild(pWeaponLRCol);
		pWeaponRadio.appendChild(pWeaponSingleRow);
		pWeaponRadio.appendChild(pWeaponDoubleRow);

		return pWeaponRadio.outerHTML;
	};
	const pAsList_header = document.createElement("ons-list-header");
	pAsList_header.innerHTML = `アサルト`;
	const pAs1st = document.createElement("ons-list-item");
	pAs1st.setAttribute("id", "pList_itemAssault1st");
	pAs1st.setAttribute("expandable", "");
	pAs1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtAssault1stL" class="area5">
				${Weapons.Assault.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtAssault1stR" class="area5">
				${Weapons.Assault.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtAssault1stLR" class="area5">
				${Weapons.Assault.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Assault", "1st")}
	`;
	const pAs2nd = document.createElement("ons-list-item");
	pAs2nd.setAttribute("id", "pList_itemAssault2nd");
	pAs2nd.setAttribute("expandable", "");
	pAs2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtAssault2ndL" class="area5">
				${Weapons.Assault.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtAssault2ndR" class="area5">
				${Weapons.Assault.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtAssault2ndLR" class="area5">
				${Weapons.Assault.LR[1]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Assault", "2nd")}
	`;
	const pVgList_header = document.createElement("ons-list-header");
	pVgList_header.innerHTML = `ヴァンガード`;
	const pVg1st = document.createElement("ons-list-item");
	pVg1st.setAttribute("id", "pList_itemVanguard1st");
	pVg1st.setAttribute("expandable", "");
	pVg1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtVanguard1stL" class="area5">
				${Weapons.Vanguard.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtVanguard1stR" class="area5">
				${Weapons.Vanguard.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtVanguard1stLR" class="area5">
				${Weapons.Vanguard.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Vanguard", "1st")}
	`;
	const pVg2nd = document.createElement("ons-list-item");
	pVg2nd.setAttribute("id", "pList_itemVanguard2nd");
	pVg2nd.setAttribute("expandable", "");
	pVg2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtVanguard2ndL" class="area5">
				${Weapons.Vanguard.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtVanguard2ndR" class="area5">
				${Weapons.Vanguard.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtVanguard2ndLR" class="area5">
				${Weapons.Vanguard.LR[1]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Vanguard", "2nd")}
	`;
	const pSpList_header = document.createElement("ons-list-header");
	pSpList_header.innerHTML = `サポート`;
	const pSp1st = document.createElement("ons-list-item");
	pSp1st.setAttribute("id", "pList_itemSupport1st");
	pSp1st.setAttribute("expandable", "");
	pSp1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtSupport1stL" class="area5">
				${Weapons.Support.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtSupport1stR" class="area5">
				${Weapons.Support.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtSupport1stLR" class="area5">
				${Weapons.Support.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Support", "1st")}
	`;
	const pSp2nd = document.createElement("ons-list-item");
	pSp2nd.setAttribute("id", "pList_itemSupport2nd");
	pSp2nd.setAttribute("expandable", "");
	pSp2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtSupport2ndL" class="area5">
				${Weapons.Support.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtSupport2ndR" class="area5">
				${Weapons.Support.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtSupport2ndLR" class="area5">
				${Weapons.Support.LR[1]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Support", "2nd")}
	`;
	pSection.appendChild(pAsList_header);
	pSection.appendChild(pAs1st);
	pSection.appendChild(pAs2nd);
	pSection.appendChild(pVgList_header);
	pSection.appendChild(pVg1st);
	pSection.appendChild(pVg2nd);
	pSection.appendChild(pSpList_header);
	pSection.appendChild(pSp1st);
	pSection.appendChild(pSp2nd);

	// AirReal
	const addAirRealExpandableContent = (part) =>
	{
		const pAirRealRadio = document.createElement("div");
		pAirRealRadio.setAttribute("id", `p${part}`);
		pAirRealRadio.setAttribute("class", "expandable-content");
		const pAirRealRow = document.createElement("ons-row");
		const pAirRealCol = document.createElement("ons-col");

		AirReals.forEach((series, partsIndex) =>
		{
			pAirRealCol.insertAdjacentHTML("beforeend", `
				<ons-list-item>
					<label class="left">
						<ons-radio name="p${part}" input-id="p${part}${partsIndex}"
						${partsIndex == 0?
							` checked`:
							``
						}></ons-radio>
					</label>
					<label for="p${part}${partsIndex}" class="center">${series}</label>
				</ons-list-item>
			`);
		});
		pAirRealRow.appendChild(pAirRealCol);
		pAirRealRadio.appendChild(pAirRealRow);

		return pAirRealRadio.outerHTML;
	};

	const pARList_header = document.createElement("ons-list-header");
	pARList_header.innerHTML = `エア・リアルパーツ`;
	const pHead = document.createElement("ons-list-item");
	pHead.setAttribute("id", "pList_itemHead");
	pHead.setAttribute("expandable", "");
	pHead.onclick = (event) =>
	{
		if(document.getElementById("pList_itemHead").classList.contains("expanded"))
		{
			// 装備を確定させる処理
			const pArmor = document.getElementById("pArmor");
			if(/ =&gt; /.test(pArmor.innerHTML))
			{
				pArmor.innerHTML = pArmor.innerHTML.split(/ =&gt; /)[1];
			}
			const pDurability = document.getElementById("pDurability");
			if(/ =&gt; /.test(pDurability.innerHTML))
			{
				pDurability.innerHTML = pDurability.innerHTML.split(/ =&gt; /)[1];
			}
			const pWeight = document.getElementById("pWeight");
			if(/ =&gt; /.test(pWeight.innerHTML))
			{
				pWeight.innerHTML = pWeight.innerHTML.split(/ =&gt; /)[1];
			}
			const pLength = document.getElementById("pLength");
			if(/ =&gt; /.test(pLength.innerHTML))
			{
				pLength.innerHTML = pLength.innerHTML.split(/ =&gt; /)[1];
			}
			const pRange = document.getElementById("pRange");
			if(/ =&gt; /.test(pRange.innerHTML))
			{
				pRange.innerHTML = pRange.innerHTML.split(/ =&gt; /)[1];
			}
		}
	};
	pHead.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				頭
			</ons-col>
			<ons-col id="pTxtHead" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtHeadFeature" width="50%">
				${Array.isArray(AirReal.Head[0].feature) === true ?
					`${AirReal.Head[0].feature[0]}<br>${AirReal.Head[0].feature[1]}`:
					`${AirReal.Head[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("head")}
	`;
	const pArm = document.createElement("ons-list-item");
	pArm.setAttribute("id", "pList_itemArm");
	pArm.setAttribute("expandable", "");
	pArm.onclick = (event) =>
	{
		console.log(event.target);
		if(document.getElementById("pList_itemArm").classList.contains("expanded"))
		{
			// 装備を確定させる処理
			const pArmor = document.getElementById("pArmor");
			if(/ =&gt; /.test(pArmor.innerHTML))
			{
				pArmor.innerHTML = pArmor.innerHTML.split(/ =&gt; /)[1];
			}
			const pDurability = document.getElementById("pDurability");
			if(/ =&gt; /.test(pDurability.innerHTML))
			{
				pDurability.innerHTML = pDurability.innerHTML.split(/ =&gt; /)[1];
			}
			const pWeight = document.getElementById("pWeight");
			if(/ =&gt; /.test(pWeight.innerHTML))
			{
				pWeight.innerHTML = pWeight.innerHTML.split(/ =&gt; /)[1];
			}
		}
	};
	pArm.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				腕
			</ons-col>
			<ons-col id="pTxtArm" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtArmFeature" width="50%">
				${Array.isArray(AirReal.Arm[0].feature) === true ?
					`${AirReal.Arm[0].feature[0]}<br>${AirReal.Arm[0].feature[1]}`:
					`${AirReal.Arm[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("arm")}
	`;
	const pBody = document.createElement("ons-list-item");
	pBody.setAttribute("id", "pList_itemBody");
	pBody.setAttribute("expandable", "");
	pBody.onclick = (event) =>
	{
		if(document.getElementById("pList_itemBody").classList.contains("expanded"))
		{
			// 装備を確定させる処理
			const pArmor = document.getElementById("pArmor");
			if(/ =&gt; /.test(pArmor.innerHTML))
			{
				pArmor.innerHTML = pArmor.innerHTML.split(/ =&gt; /)[1];
			}
			const pDurability = document.getElementById("pDurability");
			if(/ =&gt; /.test(pDurability.innerHTML))
			{
				pDurability.innerHTML = pDurability.innerHTML.split(/ =&gt; /)[1];
			}
			const pWeight = document.getElementById("pWeight");
			if(/ =&gt; /.test(pWeight.innerHTML))
			{
				pWeight.innerHTML = pWeight.innerHTML.split(/ =&gt; /)[1];
			}
			const pRepairSpeed = document.getElementById("pRepairSpeed");
			if(/ =&gt; /.test(pRepairSpeed.innerHTML))
			{
				pRepairSpeed.innerHTML = pRepairSpeed.innerHTML.split(/ =&gt; /)[1];
			}
			const pRepairLatency = document.getElementById("pRepairLatency");
			if(/ =&gt; /.test(pRepairLatency.innerHTML))
			{
				pRepairLatency.innerHTML = pRepairLatency.innerHTML.split(/ =&gt; /)[1];
			}
		}
	};
	pBody.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				胴
			</ons-col>
			<ons-col id="pTxtBody" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtBodyFeature" width="50%">
				${Array.isArray(AirReal.Body[0].feature) === true ?
					`${AirReal.Body[0].feature[0]}<br>${AirReal.Body[0].feature[1]}`:
					`${AirReal.Body[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("body")}
	`;
	const pWing = document.createElement("ons-list-item");
	pWing.setAttribute("id", "pList_itemWing");
	pWing.setAttribute("expandable", "");
	pWing.onclick = (event) =>
	{
		if(document.getElementById("pList_itemWing").classList.contains("expanded"))
		{
			// 装備を確定させる処理
			const pArmor = document.getElementById("pArmor");
			if(/ =&gt; /.test(pArmor.innerHTML))
			{
				pArmor.innerHTML = pArmor.innerHTML.split(/ =&gt; /)[1];
			}
			const pDurability = document.getElementById("pDurability");
			if(/ =&gt; /.test(pDurability.innerHTML))
			{
				pDurability.innerHTML = pDurability.innerHTML.split(/ =&gt; /)[1];
			}
			const pWeight = document.getElementById("pWeight");
			if(/ =&gt; /.test(pWeight.innerHTML))
			{
				pWeight.innerHTML = pWeight.innerHTML.split(/ =&gt; /)[1];
			}
			const pDashType = document.getElementById("pDashType");
			if(/ =&gt; /.test(pDashType.innerHTML))
			{
				pDashType.innerHTML = pDashType.innerHTML.split(/ =&gt; /)[1];
			}
			const pDodge = document.getElementById("pDodge");
			if(/ =&gt; /.test(pDodge.innerHTML))
			{
				pDodge.innerHTML = pDodge.innerHTML.split(/ =&gt; /)[1];
			}
			const pDash = document.getElementById("pDash");
			if(/ =&gt; /.test(pDash.innerHTML))
			{
				pDash.innerHTML = pDash.innerHTML.split(/ =&gt; /)[1];
			}
			const pFdType = document.getElementById("pFdType");
			if(/ =&gt; /.test(pFdType.innerHTML))
			{
				pFdType.innerHTML = pFdType.innerHTML.split(/ =&gt; /)[1];
			}
			const pFdCharge = document.getElementById("pFdCharge");
			if(/ =&gt; /.test(pFdCharge.innerHTML))
			{
				pFdCharge.innerHTML = pFdCharge.innerHTML.split(/ =&gt; /)[1];
			}
			const pDrift = document.getElementById("pDrift");
			if(/ =&gt; /.test(pDrift.innerHTML))
			{
				pDrift.innerHTML = pDrift.innerHTML.split(/ =&gt; /)[1];
			}
		}
	};
	pWing.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				翼
			</ons-col>
			<ons-col id="pTxtWing" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtWingFeature" width="50%">
				${Array.isArray(AirReal.Wing[0].feature) === true ?
					`${AirReal.Wing[0].feature[0]}<br>${AirReal.Wing[0].feature[1]}`:
					`${AirReal.Wing[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("wing")}
	`;
	const pLeg = document.createElement("ons-list-item");
	pLeg.setAttribute("id", "pList_itemLeg");
	pLeg.setAttribute("expandable", "");
	pLeg.onclick = (event) =>
	{
		if(document.getElementById("pList_itemLeg").classList.contains("expanded"))
		{
			// 装備を確定させる処理
			const pArmor = document.getElementById("pArmor");
			if(/ =&gt; /.test(pArmor.innerHTML))
			{
				pArmor.innerHTML = pArmor.innerHTML.split(/ =&gt; /)[1];
			}
			const pDurability = document.getElementById("pDurability");
			if(/ =&gt; /.test(pDurability.innerHTML))
			{
				pDurability.innerHTML = pDurability.innerHTML.split(/ =&gt; /)[1];
			}
			const pWeight = document.getElementById("pWeight");
			if(/ =&gt; /.test(pWeight.innerHTML))
			{
				pWeight.innerHTML = pWeight.innerHTML.split(/ =&gt; /)[1];
			}
			const pOccupation = document.getElementById("pOccupation");
			if(/ =&gt; /.test(pOccupation.innerHTML))
			{
				pOccupation.innerHTML = pOccupation.innerHTML.split(/ =&gt; /)[1];
			}
		}
	};
	pLeg.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				脚
			</ons-col>
			<ons-col id="pTxtLeg" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtLegFeature" width="50%">
				${Array.isArray(AirReal.Leg[0].feature) === true ?
					`${AirReal.Leg[0].feature[0]}<br>${AirReal.Leg[0].feature[1]}`:
					`${AirReal.Leg[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("leg")}
	`;
	pSection.appendChild(pARList_header);
	pSection.appendChild(pHead);
	pSection.appendChild(pArm);
	pSection.appendChild(pBody);
	pSection.appendChild(pWing);
	pSection.appendChild(pLeg);

	// Spec
	const pSpec = document.createElement("ons-list-item");
	pSpec.setAttribute("id", "pSpec");
	pSpec.innerHTML = `
		<ons-row>
			<ons-col>アーマー</ons-col>
			<ons-col id="pArmor" class="area5">
				${(AirReal.Head[0].armor | 0) + (AirReal.Arm[0].armor | 0) + (AirReal.Body[0].armor | 0) + (AirReal.Wing[0].armor | 0) + (AirReal.Leg[0].armor | 0)}
			</ons-col>
			<ons-col>耐久</ons-col>
			<ons-col id="pDurability" class="area5">
				${AirReal.Head[0].durability + AirReal.Arm[0].durability + AirReal.Body[0].durability + AirReal.Wing[0].durability + AirReal.Leg[0].durability}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>重量</ons-col>
			<ons-col id="pWeight" class="area5">
				${AirReal.Head[0].weight + AirReal.Arm[0].weight + AirReal.Body[0].weight + AirReal.Wing[0].weight + AirReal.Leg[0].weight}
			</ons-col>
			<ons-col width="50%"></ons-col>
		</ons-row>
		<ons-row>
			<ons-col>アーマー<br>全回復時間</ons-col>
			<ons-col id="pRepairSpeed" class="area2">
				${AirReal.Body[0].repairSpeed}
			</ons-col>
			<ons-col><br>回復待機</ons-col>
			<ons-col id="pRepairLatency" class="area2">
				${AirReal.Body[0].repairLatency}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>ロックオン<br>距離</ons-col>
			<ons-col id="pLength" class="area2">
				${AirReal.Head[0].length}
			</ons-col>
			<ons-col><br>範囲</ons-col>
			<ons-col id="pRange" class="area2">
				${AirReal.Head[0].range}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>ポート占拠速度</ons-col>
			<ons-col id="pOccupation" class="area5">
				${AirReal.Leg[0].occupation}
			</ons-col>
			<ons-col width="50%"></ons-col>
		</ons-row>
		<ons-row>
			<ons-col width="33%">ダッシュタイプ</ons-col>
			<ons-col id="pDashType" class="area5">
				${AirReal.Wing[0].dashType}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>回避回数</ons-col>
			<ons-col id="pDodge" class="area5">
				${AirReal.Wing[0].dodge}
			</ons-col>
			<ons-col>ダッシュ回数</ons-col>
			<ons-col id="pDash" class="area5">
				${AirReal.Wing[0].dash}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col width="33%">フルドライブタイプ</ons-col>
			<ons-col id="pFdType" class="area5">
				${AirReal.Wing[0].fdType}
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col width="25%">溜め時間</ons-col>
			<ons-col id="pFdCharge" class="area5">
				${AirReal.Wing[0].fdCharge}
			</ons-col>
			<ons-col width="25%">ドリフト</ons-col>
			<ons-col id="pDrift" class="area5">
				${AirReal.Wing[0].drift}
			</ons-col>
		</ons-row>
	`;
	pSection.style.marginBottom = "10em";
	fragment.appendChild(pSection);
	fragment.appendChild(pSpec);

	// hoist event
	const pageAssemble = document.getElementById("pageAssemble");
	const getOthersParameter = (part, getType) =>
	{
		const pHead = {query: document.querySelectorAll(`ons-radio[name="phead"]`)};
		const pArm = {query: document.querySelectorAll(`ons-radio[name="parm"]`)};
		const pBody = {query: document.querySelectorAll(`ons-radio[name="pbody"]`)};
		const pWing = {query: document.querySelectorAll(`ons-radio[name="pwing"]`)};
		const pLeg = {query: document.querySelectorAll(`ons-radio[name="pleg"]`)};
		for(const element of pHead.query)
		{
			if(element.checked)
			{
				pHead.checked = element.attributes["input-id"].value.split(/phead/)[1];
			}
		}
		for(const element of pArm.query)
		{
			if(element.checked)
			{
				pArm.checked = element.attributes["input-id"].value.split(/parm/)[1];
			}
		}
		for(const element of pBody.query)
		{
			if(element.checked)
			{
				pBody.checked = element.attributes["input-id"].value.split(/pbody/)[1];
			}
		}
		for(const element of pWing.query)
		{
			if(element.checked)
			{
				pWing.checked = element.attributes["input-id"].value.split(/pwing/)[1];
			}
		}
		for(const element of pLeg.query)
		{
			if(element.checked)
			{
				pLeg.checked = element.attributes["input-id"].value.split(/pleg/)[1];
			}
		}
		switch(getType)
		{
			case "armor":
				return (
				((part != "head" && AirReal.Head[pHead.checked].armor | 0) | 0) +
				((part != "arm" && AirReal.Arm[pArm.checked].armor | 0) | 0) +
				((part != "body" && AirReal.Body[pBody.checked].armor | 0) | 0) +
				((part != "wing" && AirReal.Wing[pWing.checked].armor | 0) | 0) +
				((part != "leg" && AirReal.Leg[pLeg.checked].armor | 0) | 0)
				);
			case "durability":
				return (
				(part != "head" && AirReal.Head[pHead.checked].durability | 0) +
				(part != "arm" && AirReal.Arm[pArm.checked].durability | 0) +
				(part != "body" && AirReal.Body[pBody.checked].durability | 0) +
				(part != "wing" && AirReal.Wing[pWing.checked].durability | 0) +
				(part != "leg" && AirReal.Leg[pLeg.checked].durability | 0)
				);
			case "weight":
				return (
				(part != "head" && AirReal.Head[pHead.checked].weight | 0) +
				(part != "arm" && AirReal.Arm[pArm.checked].weight | 0) +
				(part != "body" && AirReal.Body[pBody.checked].weight | 0) +
				(part != "wing" && AirReal.Wing[pWing.checked].weight | 0) +
				(part != "leg" && AirReal.Leg[pLeg.checked].weight | 0)
				);
			default:
				break;
		}
	};
	pageAssemble.addEventListener("change", (event) =>
	{
		const eventName = event.srcElement.name;
		const eventId = event.srcElement.id;
		switch(eventName)
		{
			case "pAsOne":
				{
					// ["", "0"]
					const removeIndex = event.srcElement.id.split("pAsOne");
					AsOnes.forEach((asone, index) =>
					{
						const skill = document.getElementById(`pAsOne${AsOnes[index].En}`);
						if(index == removeIndex[1])
						{
							skill.classList.remove("hidden");
						}
						else
						{
							skill.classList.add("hidden");
						}
					});
				}
				break;
			case "pAsOneSkill":
				{
					// ["", "0", "0"]
					const [,asoneIndex,asoneSkillIndex] = eventId.split(/pAsOne|-/);
					const pTxtAsOne = document.getElementById("pTxtAsOne");
					pTxtAsOne.innerHTML = AsOnes[asoneIndex].Ja;
					const pTxtSkill = document.getElementById("pTxtSkill");
					pTxtSkill.innerHTML = Skills[AsOnes[asoneIndex].En][asoneSkillIndex];
				}
				break;
			case "phead":
				{
					// ["", "0"]
					const selectIndex = event.srcElement.id.split(/phead/)[1];
					const pTxtHead = document.getElementById("pTxtHead");
					pTxtHead.innerHTML = AirReals[selectIndex];
					const pTxtHeadFeature = document.getElementById("pTxtHeadFeature");
					pTxtHeadFeature.innerHTML = `
					${Array.isArray(AirReal.Head[selectIndex].feature) === true ?
						`${AirReal.Head[selectIndex].feature[0]}<br>${AirReal.Head[selectIndex].feature[1]}`:
						`${AirReal.Head[selectIndex].feature}<br>-`
					}`;
					// 性能の差分を表示する処理
					const pArmor = document.getElementById("pArmor");
					const pNowArmor = pArmor.innerHTML.split(/ =&gt; /)[0];
					pArmor.innerHTML = `${pNowArmor} => ${(AirReal.Head[selectIndex].armor | 0) + getOthersParameter("head", "armor")}`;
					const pDurability = document.getElementById("pDurability");
					const pNowDurability = pDurability.innerHTML.split(/ =&gt; /)[0];
					pDurability.innerHTML = `${pNowDurability} => ${AirReal.Head[selectIndex].durability + getOthersParameter("head", "durability")}`;
					const pWeight = document.getElementById("pWeight");
					const pNowWeight = pWeight.innerHTML.split(/ =&gt; /)[0];
					pWeight.innerHTML = `${pNowWeight} => ${AirReal.Head[selectIndex].weight + getOthersParameter("head", "weight")}`;
					const pLength = document.getElementById("pLength");
					const pNowLength = pLength.innerHTML.split(/ =&gt; /)[0];
					pLength.innerHTML = `${pNowLength} => ${AirReal.Head[selectIndex].length}`;
					const pRange = document.getElementById("pRange");
					const pNowRange = pRange.innerHTML.split(/ =&gt; /)[0];
					pRange.innerHTML = `${pNowRange} => ${AirReal.Head[selectIndex].range}`;
				}
				break;
			case "parm":
				{
					// ["", "0"]
					const selectIndex = event.srcElement.id.split(/parm/)[1];
					const pTxtArm = document.getElementById(`pTxtArm`);
					pTxtArm.innerHTML = AirReals[selectIndex];
					const pTxtArmFeature = document.getElementById("pTxtArmFeature");
					pTxtArmFeature.innerHTML = `
					${Array.isArray(AirReal.Arm[selectIndex].feature) === true ?
						`${AirReal.Arm[selectIndex].feature[0]}<br>${AirReal.Arm[selectIndex].feature[1]}`:
						`${AirReal.Arm[selectIndex].feature}<br>-`
					}`;
					// 性能の差分を表示する処理
					const pArmor = document.getElementById("pArmor");
					const pNowArmor = pArmor.innerHTML.split(/ =&gt; /)[0];
					pArmor.innerHTML = `${pNowArmor} => ${(AirReal.Arm[selectIndex].armor | 0) + getOthersParameter("arm", "armor")}`;
					const pDurability = document.getElementById("pDurability");
					const pNowDurability = pDurability.innerHTML.split(/ =&gt; /)[0];
					pDurability.innerHTML = `${pNowDurability} => ${AirReal.Arm[selectIndex].durability + getOthersParameter("arm", "durability")}`;
					const pWeight = document.getElementById("pWeight");
					const pNowWeight = pWeight.innerHTML.split(/ =&gt; /)[0];
					pWeight.innerHTML = `${pNowWeight} => ${AirReal.Arm[selectIndex].weight + getOthersParameter("arm", "weight")}`;
				}
				break;
			case "pbody":
				{
					// ["", "0"]
					const selectIndex = event.srcElement.id.split(/pbody/)[1];
					const pTxtBody = document.getElementById(`pTxtBody`);
					pTxtBody.innerHTML = AirReals[selectIndex];
					const pTxtBodyFeature = document.getElementById("pTxtBodyFeature");
					pTxtBodyFeature.innerHTML = `
					${Array.isArray(AirReal.Body[selectIndex].feature) === true ?
						`${AirReal.Body[selectIndex].feature[0]}<br>${AirReal.Body[selectIndex].feature[1]}`:
						`${AirReal.Body[selectIndex].feature}<br>-`
					}`;
					// 性能の差分を表示する処理
					const pArmor = document.getElementById("pArmor");
					const pNowArmor = pArmor.innerHTML.split(/ =&gt; /)[0];
					pArmor.innerHTML = `${pNowArmor} => ${(AirReal.Body[selectIndex].armor | 0) + getOthersParameter("body", "armor")}`;
					const pDurability = document.getElementById("pDurability");
					const pNowDurability = pDurability.innerHTML.split(/ =&gt; /)[0];
					pDurability.innerHTML = `${pNowDurability} => ${AirReal.Body[selectIndex].durability + getOthersParameter("body", "durability")}`;
					const pWeight = document.getElementById("pWeight");
					const pNowWeight = pWeight.innerHTML.split(/ =&gt; /)[0];
					pWeight.innerHTML = `${pNowWeight} => ${AirReal.Body[selectIndex].weight + getOthersParameter("body", "weight")}`;
					const pRepairSpeed = document.getElementById("pRepairSpeed");
					const pNowRepairSpeed = pRepairSpeed.innerHTML.split(/ =&gt; /)[0];
					pRepairSpeed.innerHTML = `${pNowRepairSpeed} => ${AirReal.Body[selectIndex].repairSpeed}`;
					const pRepairLatency = document.getElementById("pRepairLatency");
					const pNowRepairLatency = pRepairLatency.innerHTML.split(/ =&gt; /)[0];
					pRepairLatency.innerHTML = `${pNowRepairLatency} => ${AirReal.Body[selectIndex].repairLatency}`;
				}
				break;
			case "pwing":
				{
					// ["", "0"]
					const selectIndex = event.srcElement.id.split(/pwing/)[1];
					const pTxtWing = document.getElementById(`pTxtWing`);
					pTxtWing.innerHTML = AirReals[selectIndex];
					const pTxtWingFeature = document.getElementById("pTxtWingFeature");
					pTxtWingFeature.innerHTML = `
					${Array.isArray(AirReal.Wing[selectIndex].feature) === true ?
						`${AirReal.Wing[selectIndex].feature[0]}<br>${AirReal.Wing[selectIndex].feature[1]}`:
						`${AirReal.Wing[selectIndex].feature}<br>-`
					}`;
					// 性能の差分を表示する処理
					const pArmor = document.getElementById("pArmor");
					const pNowArmor = pArmor.innerHTML.split(/ =&gt; /)[0];
					pArmor.innerHTML = `${pNowArmor} => ${(AirReal.Wing[selectIndex].armor | 0) + getOthersParameter("wing", "armor")}`;
					const pDurability = document.getElementById("pDurability");
					const pNowDurability = pDurability.innerHTML.split(/ =&gt; /)[0];
					pDurability.innerHTML = `${pNowDurability} => ${AirReal.Wing[selectIndex].durability + getOthersParameter("wing", "durability")}`;
					const pWeight = document.getElementById("pWeight");
					const pNowWeight = pWeight.innerHTML.split(/ =&gt; /)[0];
					pWeight.innerHTML = `${pNowWeight} => ${AirReal.Wing[selectIndex].weight + getOthersParameter("wing", "weight")}`;
					const pDashType = document.getElementById("pDashType");
					const pNowDashType = pDashType.innerHTML.split(/ =&gt; /)[0];
					pDashType.innerHTML = `${pNowDashType} => ${AirReal.Wing[selectIndex].dashType}`;
					const pDodge = document.getElementById("pDodge");
					const pNowDodge = pDodge.innerHTML.split(/ =&gt; /)[0];
					pDodge.innerHTML = `${pNowDodge} => ${AirReal.Wing[selectIndex].dodge}`;
					const pDash = document.getElementById("pDash");
					const pNowDash = pDash.innerHTML.split(/ =&gt; /)[0];
					pDash.innerHTML = `${pNowDash} => ${AirReal.Wing[selectIndex].dash}`;
					const pFdType = document.getElementById("pFdType");
					const pNowFdType = pFdType.innerHTML.split(/ =&gt; /)[0];
					pFdType.innerHTML = `${pNowFdType} => ${AirReal.Wing[selectIndex].fdType}`;
					const pFdCharge = document.getElementById("pFdCharge");
					const pNowFdCharge = pFdCharge.innerHTML.split(/ =&gt; /)[0];
					pFdCharge.innerHTML = `${pNowFdCharge} => ${AirReal.Wing[selectIndex].fdCharge}`;
					const pDrift = document.getElementById("pDrift");
					const pNowDrift = pDrift.innerHTML.split(/ =&gt; /)[0];
					pDrift.innerHTML = `${pNowDrift} => ${AirReal.Wing[selectIndex].drift}`;
				}
				break;
			case "pleg":
				{
					// ["", "0"]
					const selectIndex = event.srcElement.id.split(/pleg/)[1];
					const pTxtLeg = document.getElementById(`pTxtLeg`);
					pTxtLeg.innerHTML = AirReals[selectIndex];
					const pTxtLegFeature = document.getElementById("pTxtLegFeature");
					pTxtLegFeature.innerHTML = `
					${Array.isArray(AirReal.Leg[selectIndex].feature) === true ?
						`${AirReal.Leg[selectIndex].feature[0]}<br>${AirReal.Leg[selectIndex].feature[1]}`:
						`${AirReal.Leg[selectIndex].feature}<br>-`
					}`;
					// 性能の差分を表示する処理
					const pArmor = document.getElementById("pArmor");
					const pNowArmor = pArmor.innerHTML.split(/ =&gt; /)[0];
					pArmor.innerHTML = `${pNowArmor} => ${(AirReal.Leg[selectIndex].armor | 0) + getOthersParameter("leg", "armor")}`;
					const pDurability = document.getElementById("pDurability");
					const pNowDurability = pDurability.innerHTML.split(/ =&gt; /)[0];
					pDurability.innerHTML = `${pNowDurability} => ${AirReal.Leg[selectIndex].durability + getOthersParameter("leg", "durability")}`;
					const pWeight = document.getElementById("pWeight");
					const pNowWeight = pWeight.innerHTML.split(/ =&gt; /)[0];
					pWeight.innerHTML = `${pNowWeight} => ${AirReal.Leg[selectIndex].weight + getOthersParameter("leg", "weight")}`;
					const pOccupation = document.getElementById("pOccupation");
					const pNowOccupation = pOccupation.innerHTML.split(/ =&gt; /)[0];
					pOccupation.innerHTML = `${pNowOccupation} => ${AirReal.Leg[selectIndex].occupation}`;
				}
				break;
			case "pAssault1stL":
			case "pAssault1stR":
			case "pAssault2ndL":
			case "pAssault2ndR":
			case "pVanguard1stL":
			case "pVanguard1stR":
			case "pVanguard2ndL":
			case "pVanguard2ndR":
			case "pSupport1stL":
			case "pSupport1stR":
			case "pSupport2ndL":
			case "pSupport2ndR":
				{
					// ["", "0"]
					const [,weaponIndex] = event.srcElement.id.split(RegExp(eventName));
					// "Assault"
					const role = eventName.split(RegExp(["1st", "2nd"].join("|")))[0].slice(1);
					// "1st"
					const order = eventName.split(RegExp(["Assault", "Vanguard", "Support"].join("|")))[1].substring(0, 3);
					// "L"
					const side = eventName.slice(-1);
					// "pTxtAssault1stL"
					const pTxt = {[eventName]: document.getElementById(`pTxt${eventName.slice(1)}`)};
					pTxt[eventName].innerHTML = Weapons[role][side][weaponIndex];

					// singleとdoubleでラジオボタンの選択状態を排他する
					const pRadioLR = {[eventName]: document.getElementsByName(`${eventName.slice(0, -1)}LR`)}
					for(const radio of pRadioLR[eventName])
					{
						radio.checked = false;
					}
					// singleとdoubleの表示を入れ替える
					const single = document.querySelector(`#pList_item${role}${order} .single`);
					const double = document.querySelector(`#pList_item${role}${order} .double`);
					single.classList.remove("hidden");
					double.classList.add("hidden");
				}
				break;

			case "pAssault1stLR":
			case "pAssault2ndLR":
			case "pVanguard1stLR":
			case "pVanguard2ndLR":
			case "pSupport1stLR":
			case "pSupport2ndLR":
				{
					// ["", "0"]
					const [,weaponIndex] = event.srcElement.id.split(RegExp(eventName));
					// "Assault"
					const role = eventName.split(RegExp(["1st", "2nd"].join("|")))[0].slice(1);
					// "1st"
					const order = eventName.split(RegExp(["Assault", "Vanguard", "Support"].join("|")))[1].substring(0, 3);
					// "LR"
					const side = "LR";
					// "pTxtAssault1stLR"
					const pTxt = {[eventName]: document.getElementById(`pTxt${eventName.slice(1)}`)};
					pTxt[eventName].innerHTML = Weapons[role][side][weaponIndex];

					// singleとdoubleでラジオボタンの選択状態を排他する
					const pRadioL = {[eventName]: document.getElementsByName(`${eventName.slice(0, -2)}L`)}
					const pRadioR = {[eventName]: document.getElementsByName(`${eventName.slice(0, -2)}R`)}
					for(const radio of pRadioL[eventName])
					{
						radio.checked = false;
					}
					for(const radio of pRadioR[eventName])
					{
						radio.checked = false;
					}
					// singleとdoubleの表示を入れ替える
					const single = document.querySelector(`#pList_item${role}${order} .single`);
					const double = document.querySelector(`#pList_item${role}${order} .double`);
					double.classList.remove("hidden");
					single.classList.add("hidden");
				}
				break;

			default:
				break;
		}
	});

	const findElement = (query) =>
	{
		const listAssemble = document.getElementById(query);
		if(listAssemble != null)
		{
			clearInterval(idSetInterval);
			listAssemble.appendChild(fragment);
		}
		else
		{
			console.log(`${query} not found yet...`);
		}
	};
	const idSetInterval = setInterval(findElement, 100, `listAssemble`);
};

appendData();
};

const funcPageAssemble = () =>
{
loadAirReal();
loadWeapon();
loadAsOne();

const appendData = () =>
{
	// AsOnes[0].En -> "Hikari", AsOnes[0].Ja -> "ヒカリ"
	const AsOnes = Array.from(SPDB.AsOne.Order);
	// Skills.Hikari[0] -> "武器切り替え速度上昇"
	const Skills = {}
	for(const asone of Object.keys(SPDB.AsOne.Skill))
	{
		if(asone == "Status" || asone == "Order")
		{
			continue;
		}
		else if(Skills[asone] == undefined)
		{
			Skills[asone] = [];
		}
		for(const skill of SPDB.AsOne.Skill[asone])
		{
			Skills[asone].push(skill.skill);
		}
	}
	// Weapons.Assault.L[0] -> "拳銃 天火", Weapons.Support.LR[0] -> "ヴァイト"
	const Weapons = {Assault: {L: [], R: [], LR: []}, Vanguard: {L: [], R: [], LR: []}, Support: {L: [], R: [], LR: []}};
	for(const role of Object.keys(SPDB.Weapon))
	{
		if(role == "Status")
		{
			continue;
		}
		for(const weapon of SPDB.Weapon[role])
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
	for(const part of SPDB.AirReal.Head)
	{
		AirReals.push(part.name);
	}

	const fragment = document.createDocumentFragment();
	const pSection = document.createElement("section");
	pSection.setAttribute("class", "portrait");

	// AsOne
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
	`;
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
	pAsOneList_item.appendChild(pAsOneRadio);

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
						${weapon == weaponIndex ?
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
						${weapon == weaponIndex ?
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
	pAs1st.setAttribute("expandable", "");
	pAs1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col id="pTxtAs1stL" class="area5">
				${Weapons.Assault.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col id="pTxtAs1stR" class="area5">
				${Weapons.Assault.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col id="pTxtAs1stLR" class="area5">
				${Weapons.Assault.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Assault", "1st")}
	`;
	const pAs2nd = document.createElement("ons-list-item");
	pAs2nd.setAttribute("expandable", "");
	pAs2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col class="area5">
				${Weapons.Assault.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col class="area5">
				${Weapons.Assault.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col class="area5">
				${Weapons.Assault.LR[1]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Assault", "2nd")}
	`;
	const pVgList_header = document.createElement("ons-list-header");
	pVgList_header.innerHTML = `ヴァンガード`;
	const pVg1st = document.createElement("ons-list-item");
	pVg1st.setAttribute("expandable", "");
	pVg1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Vanguard", "1st")}
	`;
	const pVg2nd = document.createElement("ons-list-item");
	pVg2nd.setAttribute("expandable", "");
	pVg2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col class="area5">
				${Weapons.Vanguard.LR[1]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Vanguard", "2nd")}
	`;
	const pSpList_header = document.createElement("ons-list-header");
	pSpList_header.innerHTML = `サポート`;
	const pSp1st = document.createElement("ons-list-item");
	pSp1st.setAttribute("expandable", "");
	pSp1st.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col class="area5">
				${Weapons.Support.L[0]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col class="area5">
				${Weapons.Support.R[0]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col class="area5">
				${Weapons.Support.LR[0]}
			</ons-col>
		</ons-row>
		${addWeaponExpandableContent("Support", "1st")}
	`;
	const pSp2nd = document.createElement("ons-list-item");
	pSp2nd.setAttribute("expandable", "");
	pSp2nd.innerHTML = `
		<ons-row class="single">
			<ons-col width="7%" class="area5">
				L
			</ons-col>
			<ons-col class="area5">
				${Weapons.Support.L[1]}
			</ons-col>
			<ons-col width="7%" class="area5">
				R
			</ons-col>
			<ons-col class="area5">
				${Weapons.Support.R[1]}
			</ons-col>
		</ons-row>
		<ons-row class="double hidden">
			<ons-col width="7%" class="area5">
				LR
			</ons-col>
			<ons-col class="area5">
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
	pHead.setAttribute("expandable", "");
	pHead.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				頭
			</ons-col>
			<ons-col id="pTxtHead" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtHeadFeature" width="50%">
				${Array.isArray(SPDB.AirReal.Head[0].feature) === true ?
					`${SPDB.AirReal.Head[0].feature[0]}<br>${SPDB.AirReal.Head[0].feature[1]}`:
					`${SPDB.AirReal.Head[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("head")}
	`;
	const pArm = document.createElement("ons-list-item");
	pArm.setAttribute("expandable", "");
	pArm.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				腕
			</ons-col>
			<ons-col id="pTxtArm" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtArmFeature" width="50%">
				${Array.isArray(SPDB.AirReal.Arm[0].feature) === true ?
					`${SPDB.AirReal.Arm[0].feature[0]}<br>${SPDB.AirReal.Arm[0].feature[1]}`:
					`${SPDB.AirReal.Arm[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("arm")}
	`;
	const pBody = document.createElement("ons-list-item");
	pBody.setAttribute("expandable", "");
	pBody.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				胴
			</ons-col>
			<ons-col id="pTxtBody" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtBodyFeature" width="50%">
				${Array.isArray(SPDB.AirReal.Body[0].feature) === true ?
					`${SPDB.AirReal.Body[0].feature[0]}<br>${SPDB.AirReal.Body[0].feature[1]}`:
					`${SPDB.AirReal.Body[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("body")}
	`;
	const pWing = document.createElement("ons-list-item");
	pWing.setAttribute("expandable", "");
	pWing.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				翼
			</ons-col>
			<ons-col id="pTxtWing" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtWingFeature" width="50%">
				${Array.isArray(SPDB.AirReal.Wing[0].feature) === true ?
					`${SPDB.AirReal.Wing[0].feature[0]}<br>${SPDB.AirReal.Wing[0].feature[1]}`:
					`${SPDB.AirReal.Wing[0].feature}<br>-`
				}
			</ons-col>
		</ons-row>
		${addAirRealExpandableContent("wing")}
	`;
	const pLeg = document.createElement("ons-list-item");
	pLeg.setAttribute("expandable", "");
	pLeg.innerHTML = `
		<ons-row>
			<ons-col width="5%" class="area5">
				脚
			</ons-col>
			<ons-col id="pTxtLeg" class="area5">
				${AirReals[0]}
			</ons-col>
			<ons-col id="pTxtLegFeature" width="50%">
				${Array.isArray(SPDB.AirReal.Leg[0].feature) === true ?
					`${SPDB.AirReal.Leg[0].feature[0]}<br>${SPDB.AirReal.Leg[0].feature[1]}`:
					`${SPDB.AirReal.Leg[0].feature}<br>-`
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
	pSpec.innerHTML = `
		<ons-row>
			<ons-col width="50%">
				アーマー
			</ons-col>
			<ons-col class="area6">
				${(SPDB.AirReal.Head[0].armor | 0) + (SPDB.AirReal.Arm[0].armor | 0) + (SPDB.AirReal.Body[0].armor | 0) + (SPDB.AirReal.Wing[0].armor | 0) + (SPDB.AirReal.Leg[0].armor | 0)}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area6">
					200
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col width="50%">
				耐久
			</ons-col>
			<ons-col class="area6">
				${SPDB.AirReal.Head[0].durability + SPDB.AirReal.Arm[0].durability + SPDB.AirReal.Body[0].durability + SPDB.AirReal.Wing[0].durability + SPDB.AirReal.Leg[0].durability}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area6">
					1000
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col width="50%">
				重量
			</ons-col>
			<ons-col class="area6">
				${SPDB.AirReal.Head[0].weight + SPDB.AirReal.Arm[0].weight + SPDB.AirReal.Body[0].weight + SPDB.AirReal.Wing[0].weight + SPDB.AirReal.Leg[0].weight}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area6">
					10000
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				アーマー全回復時間
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Body[0].repairSpeed}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				アーマー回復待機
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Body[0].repairLatency}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ロックオン距離
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Head[0].length}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ロックオン範囲
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Head[0].range}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ポート占拠速度
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Leg[0].occupation}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ダッシュタイプ
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].dashType}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				回避回数
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].dodge}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ダッシュ回数
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].dash}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				フルドライブタイプ
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].fdType}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				フルドライブ溜め時間
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].fdCharge}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
		<ons-row>
			<ons-col>
				ドリフト
			</ons-col>
			<ons-col class="area5">
				${SPDB.AirReal.Wing[0].drift}
			</ons-col>
			<div class="hidden">
				<ons-col class="area5">
					->
				</ons-col>
				<ons-col class="area5">
					A
				</ons-col>
			</div>
		</ons-row>
	`;
	pSection.appendChild(pSpec);

	fragment.appendChild(pSection);

	// hoist event
	const pageAssemble = document.getElementById("pageAssemble");
	pageAssemble.addEventListener("change", (event) =>
	{
				console.log(event.srcElement.name);
				console.log(event.srcElement.id);
		switch(event.srcElement.name)
		{
			case "pAsOne":
				console.log(event.srcElement.id);
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
					const [,asoneIndex,asoneSkillIndex] = event.srcElement.id.split(/pAsOne|-/);
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
					${Array.isArray(SPDB.AirReal.Head[selectIndex].feature) === true ?
						`${SPDB.AirReal.Head[selectIndex].feature[0]}<br>${SPDB.AirReal.Head[selectIndex].feature[1]}`:
						`${SPDB.AirReal.Head[selectIndex].feature}<br>-`
					}`;
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
					${Array.isArray(SPDB.AirReal.Arm[selectIndex].feature) === true ?
						`${SPDB.AirReal.Arm[selectIndex].feature[0]}<br>${SPDB.AirReal.Arm[selectIndex].feature[1]}`:
						`${SPDB.AirReal.Arm[selectIndex].feature}<br>-`
					}`;
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
					${Array.isArray(SPDB.AirReal.Body[selectIndex].feature) === true ?
						`${SPDB.AirReal.Body[selectIndex].feature[0]}<br>${SPDB.AirReal.Body[selectIndex].feature[1]}`:
						`${SPDB.AirReal.Body[selectIndex].feature}<br>-`
					}`;
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
					${Array.isArray(SPDB.AirReal.Wing[selectIndex].feature) === true ?
						`${SPDB.AirReal.Wing[selectIndex].feature[0]}<br>${SPDB.AirReal.Wing[selectIndex].feature[1]}`:
						`${SPDB.AirReal.Wing[selectIndex].feature}<br>-`
					}`;
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
					${Array.isArray(SPDB.AirReal.Leg[selectIndex].feature) === true ?
						`${SPDB.AirReal.Leg[selectIndex].feature[0]}<br>${SPDB.AirReal.Leg[selectIndex].feature[1]}`:
						`${SPDB.AirReal.Leg[selectIndex].feature}<br>-`
					}`;
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

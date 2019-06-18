const funcPageAssemble = () =>
{
loadAirReal();
loadWeapon();
loadAsOne();

	/*
	switch(id)
	{
		case "A":
			const title = "A";
			const cancelable = true;
			const buttons = [];
			for(const i in SPDB.AirReal.Head)
			{
				//append?
			}
			break;
		default:
			break;
	}
	*/

const appendData = () =>
{
	const fragment = document.createDocumentFragment();
	const pSection = document.createElement("section");
	pSection.setAttribute("class", "portrait");

	// Spec
	const pSpec = document.createElement("ons-list-item");
	pSpec.innerHTML = `
		<ons-row>
			<ons-col>
				アーマー
			</ons-col>
			<ons-col class="area6">
				200 ->
			</ons-col>
			<ons-col class="area6">
				200
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				耐久
			</ons-col>
			<ons-col class="area6">
				1000 ->
			</ons-col>
			<ons-col class="area6">
				1000
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				重量
			</ons-col>
			<ons-col class="area6">
				10000 ->
			</ons-col>
			<ons-col class="area6">
				10000
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				アーマー全回復時間
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				アーマー回復待機
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ロックオン距離
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ロックオン範囲
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ポート占拠速度
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ダッシュタイプ
			</ons-col>
			<ons-col class="area4">
				持続ダッシュ ->
			</ons-col>
			<ons-col class="area4">
				加速ダッシュ
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				回避回数
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ダッシュ回数
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				フルドライブタイプ
			</ons-col>
			<ons-col class="area4">
				長距離持続 ->
			</ons-col>
			<ons-col class="area4">
				短距離加速
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				フルドライブ溜め時間
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
		<ons-row>
			<ons-col>
				ドリフト
			</ons-col>
			<ons-col class="area5">
				A ->
			</ons-col>
			<ons-col class="area5">
				A
			</ons-col>
		</ons-row>
	`;
	pSection.appendChild(pSpec);

	// AirReal
	const pHead = document.createElement("ons-list-item");
	pHead.innerHTML = `
		<ons-row>
			<ons-col class="area4">
				頭 ソリディア
			</ons-col>
			<ons-col>
				-<br>-
			</ons-col>
		</ons-row>
	`;
	const pArm = document.createElement("ons-list-item");
	pArm.innerHTML = `
		<ons-row>
			<ons-col class="area4">
				腕 ソリディア
			</ons-col>
			<ons-col>
				-<br>-
			</ons-col>
		</ons-row>
	`;
	const pBody = document.createElement("ons-list-item");
	pBody.innerHTML = `
		<ons-row>
			<ons-col class="area4">
				銅 ソリディア
			</ons-col>
			<ons-col>
				-<br>-
			</ons-col>
		</ons-row>
	`;
	const pWing = document.createElement("ons-list-item");
	pWing.innerHTML = `
		<ons-row>
			<ons-col class="area4">
				翼 ソリディア
			</ons-col>
			<ons-col>
				-<br>-
			</ons-col>
		</ons-row>
	`;
	const pLeg = document.createElement("ons-list-item");
	pLeg.innerHTML = `
		<ons-row>
			<ons-col class="area4">
				脚 ソリディア
			</ons-col>
			<ons-col>
				-<br>-
			</ons-col>
		</ons-row>
	`;
	pSection.appendChild(pHead);
	pSection.appendChild(pArm);
	pSection.appendChild(pBody);
	pSection.appendChild(pWing);
	pSection.appendChild(pLeg);

	// Weapon
	const pWeapon = document.createElement("ons-list-item");
	pWeapon.innerHTML = `
		<div as1st>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div as1stlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div as2nd>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div as2ndlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div vg1st>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div vg1stlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div vg2nd>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div vg2ndlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div sp1st>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div sp1stlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div sp2nd>
			<ons-row>
				<ons-col>
					<ons-list-item>
						L
					</ons-list-item>
				</ons-col>
				<ons-col>
					<ons-list-item>
						R
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
		<div sp2ndlr class="hidden">
			<ons-row>
				<ons-col>
					<ons-list-item>
						LR
					</ons-list-item>
				</ons-col>
			</ons-row>
		</div>
	`;
	pSection.appendChild(pWeapon);

	fragment.appendChild(pSection);

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

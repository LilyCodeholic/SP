const funcPageWeapon = () =>
{
SPDB.Weapon =
{
    Status:`
        ステータス<br>
        　武器情報: すべて埋まっています。<br>
        <br>
        「使いやすさ」はデータとしては持っていますが現在記載していません。`,
    Assault:
    [
        {
            "side":"L",
            "name":"拳銃 天火",
            "vsAR":"D",
            "vsMAG":"C",
            "reload":"A",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":20,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"単装導弾 堕撃",
            "vsAR":"C",
            "vsMAG":"B",
            "reload":"A",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":4,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"グルナード",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"B",
            "weaponType":"実弾",
            "ammo":3,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"750CP"
        },
        {
            "side":"L",
            "name":"ボンバルド",
            "vsAR":"C",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"A",
            "weaponType":"実弾/妨害",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"炎上",
            "howToGet":"1400CP"
        },
        {
            "side":"L",
            "name":"インパルスショット",
            "vsAR":"E",
            "vsMAG":"D",
            "reload":"C",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":6,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"怯み特性",
            "howToGet":"2600CP"
        },
        {
            "side":"L",
            "name":"ターレットMI",
            "vsAR":"B",
            "vsMAG":"A+",
            "reload":"D",
            "usability":"A",
            "weaponType":"設置/実弾",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"4400CP"
        },
        {
            "side":"R",
            "name":"ミトライユ",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":40,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"多連装導弾 大蛇",
            "vsAR":"B+",
            "vsMAG":"A",
            "reload":"B+",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":20,
            "attackType":"中距離射撃",
            "triggerType":"リリース",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"マルチロック",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"ミトラーム",
            "vsAR":"C",
            "vsMAG":"A",
            "reload":"A",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":28,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"750CP"
        },
        {
            "side":"R",
            "name":"グレイン-AS",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":10,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"-",
            "howToGet":"1400CP"
        },
        {
            "side":"R",
            "name":"グレイスピラ",
            "vsAR":"B",
            "vsMAG":"A",
            "reload":"B",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":8,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"-",
            "howToGet":"1400CP"
        },
        {
            "side":"R",
            "name":"L.O.V.E.",
            "vsAR":"B",
            "vsMAG":"A",
            "reload":"B",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":8,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"-",
            "howToGet":"現在入手不可(2/1-15までに全国対戦でチーム内5位以上を15回獲得する)"
        },
        {
            "side":"R",
            "name":"単装導弾 三皇",
            "vsAR":"？",
            "vsMAG":"？",
            "reload":"？",
            "usability":"？",
            "weaponType":"実弾",
            "ammo":12,
            "attackType":"中距離射撃？",
            "triggerType":"ホールド？",
            "target":"敵？",
            "reloadTiming":"弾切れ？",
            "feature":"-",
            "howToGet":"ドロップのみ"
        },
        {
            "side":"LR",
            "name":"ラゼル",
            "vsAR":"A",
            "vsMAG":"A+",
            "reload":"B",
            "usability":"B",
            "weaponType":"ビーム",
            "ammo":3000,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"怯み特性",
            "howToGet":"2回全国対戦する"
        },
        {
            "side":"LR",
            "name":"ブランキアル",
            "vsAR":"A+",
            "vsMAG":"C",
            "reload":"C",
            "usability":"D",
            "weaponType":"ビーム",
            "ammo":1,
            "attackType":"遠距離射撃",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"スコープ、ダウン特性",
            "howToGet":"1400CP"
        },
        {
            "side":"LR",
            "name":"ファイアサイス",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B",
            "usability":"A",
            "weaponType":"格闘/ビーム",
            "ammo":"L: 1, R: 9",
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"1400CP"
        },
        {
            "side":"LR",
            "name":"機関砲 騎神",
            "vsAR":"A",
            "vsMAG":"A",
            "reload":"C",
            "usability":"B",
            "weaponType":"実弾",
            "ammo":150,
            "attackType":"遠距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"",
            "howToGet":"2600CP"
        },
    ],
    Vanguard:
    [
        {
            "side":"L",
            "name":"レブンパレット",
            "vsAR":"C",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"B",
            "weaponType":"実弾",
            "ammo":2,
            "attackType":"近距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"怯み特性",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"デ・ファンス",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"D",
            "usability":"A",
            "exParameter":["耐久値", "B"],
            "weaponType":"-",
            "ammo":600,
            "attackType":"その他",
            "triggerType":"ホールド",
            "target":"自分",
            "reloadTiming":"常時",
            "feature":"シールド",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"拳銃 月牙",
            "vsAR":"C",
            "vsMAG":"D",
            "reload":"B+",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":14,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"",
            "howToGet":"750CP"
        },
        {
            "side":"L",
            "name":"バースト・ボム",
            "vsAR":"C",
            "vsMAG":"C",
            "reload":"C",
            "usability":"B",
            "weaponType":"設置/妨害",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"自分",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性、炎上",
            "howToGet":"1400CP"
        },
        {
            "side":"L",
            "name":"ブーメラング",
            "vsAR":"C",
            "vsMAG":"D",
            "reload":"B+",
            "usability":"B",
            "weaponType":"ビーム",
            "ammo":1,
            "attackType":"近距離射撃",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"怯み特性",
            "howToGet":"1400CP"
        },
        {
            "side":"L",
            "name":"マーノムガン",
            "vsAR":"D",
            "vsMAG":"B",
            "reload":"A",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":15,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"4400CP"
        },
        {
            "side":"R",
            "name":"グレイン-VG",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":8,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"刃刀刃",
            "vsAR":"B+",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"A",
            "weaponType":"格闘",
            "ammo":1,
            "attackType":"近距離格闘",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"烈火弾 煉獄",
            "vsAR":"B+",
            "vsMAG":"C",
            "reload":"B",
            "usability":"B",
            "weaponType":"ビーム/妨害",
            "ammo":4,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"炎上",
            "howToGet":"750CP"
        },
        {
            "side":"R",
            "name":"ミトライユ・コルト",
            "vsAR":"B",
            "vsMAG":"C",
            "reload":"A",
            "usability":"B",
            "weaponType":"実弾",
            "ammo":30,
            "attackType":"近距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"",
            "howToGet":"1400CP"
        },
        {
            "side":"R",
            "name":"ディトーレ",
            "vsAR":"B",
            "vsMAG":"B+",
            "reload":"B+",
            "usability":"B",
            "weaponType":"ビーム",
            "ammo":8,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"1400CP"
        },
        {
            "side":"R",
            "name":"火炎砲 散華",
            "vsAR":"B+",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"B",
            "weaponType":"妨害",
            "ammo":60,
            "attackType":"近距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"炎上",
            "howToGet":"ドロップのみ"
        },            
        {
            "side":"LR",
            "name":"ブレードジップ",
            "vsAR":"A",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"A",
            "weaponType":"格闘",
            "ammo":"L: 1, R: 1",
            "attackType":"近距離格闘",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"1400CP"
        },
        {
            "side":"LR",
            "name":"ブラックスミス",
            "vsAR":"A",
            "vsMAG":"B",
            "reload":"C",
            "usability":"B",
            "weaponType":"格闘/実弾",
            "ammo":"L: 1, R: 1",
            "attackType":"中距離射撃",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"1400CP"
        },
        {
            "side":"LR",
            "name":"飛翔拳 双天",
            "vsAR":"B+",
            "vsMAG":"D",
            "reload":"C",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":"L: 1, R: 1",
            "attackType":"中距離射撃",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"怯み特性",
            "howToGet":"4400CP"
        },
    ],
    Support:
    [
        {
            "side":"L",
            "name":"ターレットBR",
            "vsAR":"C",
            "vsMAG":"B",
            "reload":"D",
            "usability":"A",
            "weaponType":"設置/ビーム",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"-",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"デ・ファーリア",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"C",
            "usability":"A",
            "exParameter":["耐久値", "A"],
            "weaponType":"設置/補助",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"自分・味方",
            "reloadTiming":"弾切れ",
            "feature":"シールド",
            "howToGet":"初期所持武器"
        },
        {
            "side":"L",
            "name":"フォルツァ-A",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"B",
            "usability":"B",
            "weaponType":"補助",
            "ammo":"2？",
            "attackType":"中距離射撃",
            "triggerType":"1トリガー",
            "target":"味方",
            "reloadTiming":"弾切れ",
            "feature":"攻撃力上昇",
            "howToGet":"1400CP"
        },
        {
            "side":"L",
            "name":"ジャメル",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"C",
            "usability":"A",
            "weaponType":"妨害",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"対AR",
            "reloadTiming":"弾切れ",
            "feature":"ジャミング",
            "howToGet":"750CP"
        },
        {
            "side":"L",
            "name":"エレクトリット",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"B",
            "usability":"B",
            "weaponType":"設置/妨害",
            "ammo":1,
            "attackType":"投擲",
            "triggerType":"リリース",
            "target":"対AR",
            "reloadTiming":"弾切れ",
            "feature":"麻痺",
            "howToGet":"1400CP"
        },
        {
            "side":"L",
            "name":"メディク",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"B",
            "usability":"A",
            "exParameter":["回復量", "B"],
            "weaponType":"補助",
            "ammo":8,
            "attackType":"その他",
            "triggerType":"ホールド",
            "target":"味方",
            "reloadTiming":"常時",
            "feature":"回復",
            "howToGet":"4400CP"
        },
        {
            "side":"L",
            "name":"テレ・ヴニール",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"D",
            "usability":"C",
            "weaponType":"補助",
            "ammo":1,
            "attackType":"その他",
            "triggerType":"1トリガー",
            "target":"自分",
            "reloadTiming":"弾切れ",
            "feature":"",
            "howToGet":"4400CP"
        },
        {
            "side":"L",
            "name":"ラジオパレット",
            "vsAR":"C",
            "vsMAG":"C",
            "reload":"B",
            "usability":"B",
            "weaponType":"ビーム",
            "ammo":4,
            "attackType":"近距離射撃",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"(吹き飛ばし)",
            "howToGet":"ドロップのみ"
        },
        {
            "side":"R",
            "name":"ラーゴ",
            "vsAR":"B",
            "vsMAG":"B+",
            "reload":"B",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":3,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"プレストヒール",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"B+",
            "usability":"B",
            "exParameter":["回復量", "A"],
            "weaponType":"補助",
            "ammo":40,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"味方",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"初期所持武器"
        },
        {
            "side":"R",
            "name":"ミトライユ・バル",
            "vsAR":"C",
            "vsMAG":"B",
            "reload":"A",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":35,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"",
            "howToGet":"(？CP)"
        },
        {
            "side":"R",
            "name":"グレイン-SP",
            "vsAR":"B",
            "vsMAG":"B",
            "reload":"B+",
            "usability":"A",
            "weaponType":"ビーム",
            "ammo":8,
            "attackType":"中距離射撃",
            "triggerType":"ホールド",
            "target":"敵",
            "reloadTiming":"常時",
            "feature":"",
            "howToGet":"750CP"
        },
        {
            "side":"R",
            "name":"デトネイトランス",
            "vsAR":"B",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"B",
            "weaponType":"格闘",
            "ammo":1,
            "attackType":"近距離格闘",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"1400CP"
        },
        {
            "side":"R",
            "name":"ベツレヘイム-X",
            "vsAR":"B",
            "vsMAG":"C",
            "reload":"B+",
            "usability":"B",
            "weaponType":"格闘",
            "ammo":1,
            "attackType":"近距離格闘",
            "triggerType":"1トリガー",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"現在入手不可(12/12-25までにチーム内5位以上を10回獲得する)"
        },
        {
            "side":"LR",
            "name":"シールドヴァイト",
            "vsAR":"-",
            "vsMAG":"-",
            "reload":"C",
            "usability":"A, B",
            "exParameter":["耐久値", "L: B, R: C"],
            "weaponType":"補助",
            "ammo":1,
            "attackType":"その他",
            "triggerType":"1トリガー",
            "target":"L: 自分、R: 味方",
            "reloadTiming":"弾切れ",
            "feature":"シールド",
            "howToGet":"1400CP"
        },
        {
            "side":"LR",
            "name":"エステジオンボム",
            "vsAR":"B",
            "vsMAG":"D",
            "reload":"E",
            "usability":"A",
            "weaponType":"実弾",
            "ammo":1,
            "attackType":"その他",
            "triggerType":"サブモニター",
            "target":"敵",
            "reloadTiming":"弾切れ",
            "feature":"ダウン特性",
            "howToGet":"1400CP"
        },
    ]
};

const tabWeapon = document.getElementById("tabWeapon");
tabWeapon.addEventListener("prechange", (event) =>
{
    textToolbar = `武器 - ${event.tabItem.textContent}`;
    document.querySelector("#pageWeapon .center").innerHTML = textToolbar;
}, false);
document.querySelector("#pageWeapon ons-toolbar-button").onclick = () =>
{
    document.getElementById("textToast").innerHTML = SPDB.Weapon.Status;
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
    pFixedList_header.innerHTML = `
        <ons-row class="expand">
            <ons-col width="60%">武器名</ons-col>
            <ons-col class="area5">AR</ons-col>
            <ons-col class="area5">マグ</ons-col>
            <ons-col class="area5">リロ</ons-col>
        </ons-row>
    `;
    pSection.appendChild(pFixedList_header);
    pSection.appendChild(pBackList_header);

    const lFixedList_header = document.createElement("ons-list-header");
    const lBackList_header = document.createElement("ons-list-header");
    lFixedList_header.setAttribute("class", "fixed");
    lFixedList_header.innerHTML = `
        <ons-row class="expand">
            <ons-col width="40%">武器名</ons-col>
            <ons-col class="area5">対AR</ons-col>
            <ons-col class="area5">対マグ</ons-col>
            <ons-col class="area5">リロード</ons-col>
            <ons-col class="area5">弾数</ons-col>
            <ons-col width="20%" class="area5">特性</ons-col>
        </ons-row>
    `;
    lSection.appendChild(lFixedList_header);
    lSection.appendChild(lBackList_header);

    // ons-list-item
    for(const items of SPDB.Weapon[tab])
    {
        const pList_item = document.createElement("ons-list-item");
        pList_item.setAttribute("expandable", "");
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
                <ons-col class="area5">${items.vsAR}</ons-col>
                <ons-col class="area5">${items.vsMAG}</ons-col>
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
        `;
        pSection.appendChild(pList_item);

        const lList_item = document.createElement("ons-list-item");
        lList_item.setAttribute("expandable", "");
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
        `;
        lSection.appendChild(lList_item);

        fragment.appendChild(pSection);
        fragment.appendChild(lSection);
    }

    const findElement = (query) =>
    {
        const listWeapon = document.getElementById(query);
        if(listWeapon != null)
        {
            clearInterval(idSetInterval);
            listWeapon.appendChild(fragment);
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
    const idSetInterval = setInterval(findElement, 100, `listWeapon_${tab}`);
};

const tabs = ["Assault", "Vanguard", "Support"];
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

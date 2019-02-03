const funcPageWeapon = () =>
{
    SPDB.Weapon =
    {
        Assault:
        [
            {
                "side":"L",
                "name":"ボンバルド",
                "vsAR":"？",
                "vsMAG":"？",
                "reload":"？",
                "usability":"？",
                "weaponType":"妨害",
                "ammo":0,
                "attackType":"？",
                "triggerType":"？",
                "target":"？",
                "reloadTiming":"？",
                "feature":"？",
                "howToGet":"ドロップのみ"
            },
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
                "weaponType":"妨害",
                "ammo":3,
                "attackType":"投擲",
                "triggerType":"リリース",
                "target":"敵",
                "reloadTiming":"弾切れ",
                "feature":"ダウン特性",
                "howToGet":"1400CP"
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
                "name":"ミトラーム",
                "vsAR":"C",
                "vsMAG":"A",
                "reload":"A",
                "usability":"A",
                "weaponType":"実弾",
                "ammo":28,
                "attackType":"中距離射撃",
                "triggerType":"ホールド",
                "target":"敵",
                "reloadTiming":"弾切れ",
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
                "howToGet":"2600CP"
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
                "howToGet":"ドロップのみ(1400CP)"
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
                "side":"LR",
                "name":"ラゼル",
                "vsAR":"A",
                "vsMAG":"A+",
                "reload":"B",
                "usability":"B",
                "weaponType":"両手、ビーム",
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
                "weaponType":"両手、ビーム",
                "ammo":1,
                "attackType":"遠距離射撃",
                "triggerType":"1トリガー",
                "target":"敵",
                "reloadTiming":"弾切れ",
                "feature":"スコープ、ダウン特性",
                "howToGet":"ドロップのみ(4400CP)"
            }
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
                "ammo":3,
                "attackType":"近距離射撃",
                "triggerType":"ホールド",
                "target":"敵",
                "reloadTiming":"弾切れ",
                "feature":"怯み特性",
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
                "howToGet":"ドロップのみ"
            },
            {
                "side":"L",
                "name":"バースト・ボム",
                "vsAR":"C",
                "vsMAG":"C",
                "reload":"C",
                "usability":"B",
                "weaponType":"-",
                "ammo":1,
                "attackType":"投擲",
                "triggerType":"リリース",
                "target":"自分",
                "reloadTiming":"弾切れ",
                "feature":"ダウン特性、炎上",
                "howToGet":"ドロップのみ(1400CP)"
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
                "name":"ミトライユ・コルト",
                "vsAR":"B+",
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
                "howToGet":"2600CP"
            },
            {
                "side":"R",
                "name":"烈火弾 煉獄",
                "vsAR":"B+",
                "vsMAG":"C",
                "reload":"B",
                "usability":"B",
                "weaponType":"ビーム",
                "ammo":4,
                "attackType":"中距離射撃",
                "triggerType":"ホールド",
                "target":"敵",
                "reloadTiming":"常時",
                "feature":"炎上",
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
                "howToGet":"ドロップのみ(1400CP)"
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
                "howToGet":"ドロップのみ(4400CP)"
            }
        ],
        Support:
        [
            {
                "side":"L",
                "name":"フォルツァA",
                "vsAR":"-",
                "vsMAG":"-",
                "reload":"B",
                "usability":"B",
                "weaponType":"補助",
                "ammo":1,
                "attackType":"中距離射撃",
                "triggerType":"1トリガー",
                "target":"味方",
                "reloadTiming":"弾切れ",
                "feature":"攻撃力上昇",
                "howToGet":"ドロップのみ(1400CP)"
            },
            {
                "side":"L",
                "name":"ターレットBR",
                "vsAR":"C",
                "vsMAG":"B",
                "reload":"D",
                "usability":"A",
                "weaponType":"妨害？",
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
                "weaponType":"補助",
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
                "howToGet":"1400CP"
            },
            {
                "side":"L",
                "name":"エレクトリット",
                "vsAR":"-",
                "vsMAG":"-",
                "reload":"B",
                "usability":"A",
                "weaponType":"妨害",
                "ammo":1,
                "attackType":"投擲",
                "triggerType":"リリース",
                "target":"対AR",
                "reloadTiming":"弾切れ",
                "feature":"麻痺",
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
                "weaponType":"-",
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
                "howToGet":"2600CP"
            },
            {
                "side":"R",
                "name":"ミトライユ・バル",
                "vsAR":"B",
                "vsMAG":"B",
                "reload":"B+",
                "usability":"A",
                "weaponType":"実弾",
                "ammo":35,
                "attackType":"中距離射撃",
                "triggerType":"ホールド",
                "target":"敵",
                "reloadTiming":"弾切れ",
                "feature":"",
                "howToGet":"ドロップのみ(？CP)"
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
                "howToGet":"現在入手不可(イベント)"
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
                "howToGet":"ドロップのみ(4400CP)"
            }
        ]
    };

    const tabWeapon = document.getElementById("tabWeapon");
    tabWeapon.addEventListener("prechange", (event) =>
    {
        textToolbar = `武器 - ${event.tabItem.textContent}`;
        document.querySelector("#pageWeapon .center").innerHTML = textToolbar;
    }, false);

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        const list_header = document.createElement("ons-list-header");
        list_header.innerHTML = `
<ons-row>
    <ons-col width="60%">武器名</ons-col>
    <ons-col>AR</ons-col>
    <ons-col>マグ</ons-col>
    <ons-col>リロ</ons-col>
    <ons-col></ons-col>
</ons-row>
        `;
        fragment.appendChild(list_header);

        for(const items of SPDB.Weapon[tab])
        {
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");
            list_item.innerHTML = `
<ons-row>
    <ons-col vertical-align="center">
        ${items.side}
    </ons-col>
    <ons-col width="60%">
        ${items.name}
        <br>
        <span style="font-size:small">
            ${items.weaponType} ${items.attackType}
        </span>
    </ons-col>
    <ons-col vertical-align="center">
        ${items.vsAR}
    </ons-col>
    <ons-col vertical-align="center">
        ${items.vsMAG}
    </ons-col>
    <ons-col vertical-align="center">
        ${items.reload}
    </ons-col>
</ons-row>
<div class="expandable-content">
    <ons-row>
        <ons-col>
            弾数
        </ons-col>
        <ons-col>
            ${items.ammo}
        </ons-col>
    </ons-row>
    <ons-row>
        <ons-col>
            トリガータイプ
        </ons-col>
        <ons-col>
            ${items.triggerType}
        </ons-col>
    </ons-row>
    <ons-row>
        <ons-col>
            対象
        </ons-col>
        <ons-col>
            ${items.target}
        </ons-col>
    </ons-row>
    <ons-row>
        <ons-col>
            リロードタイミング:
        </ons-col>
        <ons-col>
            ${items.reloadTiming}
        </ons-col>
    </ons-row>
    <ons-row>
        <ons-col>
            特性
        </ons-col>
        <ons-col>
            ${items.feature}
        </ons-col>
    </ons-row>
    <ons-row>
        <ons-col>
            入手方法
        </ons-col>
        <ons-col>
            ${items.howToGet}
        </ons-col>
    </ons-row>
</div>
            `;
            fragment.appendChild(list_item);
        }

        const findElement = (query) =>
        {
            const listTitle = document.getElementById(query);
            if(listTitle != null)
            {
                clearInterval(idSetInterval);
                listTitle.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listWeapon_${tab}`);
    };

    appendData("Assault");
    appendData("Vanguard");
    appendData("Support");
};

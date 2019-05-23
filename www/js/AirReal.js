const funcPageAirReal = () =>
{
SPDB.AirReal =
{
    Status:`
        ステータス<br>
        　パーツ情報: すべて埋まっています。<br>
        <br>
        色違いのパーツについては元パーツと同じ性能のため記載していません。`,
    Head:
    [
        {
            "name":"ソリディア",
            "durability":200,
            "length":"B",
            "range":"B",
            "weight":2000,
            "feature":"-"
        },
        {
            "name":"カーディナル",
            "durability":200,
            "length":"C",
            "range":"A+",
            "weight":1800,
            "feature":"対象ロスト耐性"
        },
        {
            "name":"スクラッパー",
            "durability":200,
            "length":"B",
            "range":"A",
            "weight":2100,
            "feature":"(ロックオン範囲が横に広い)"
        },
        {
            "name":"サイトヘッド",
            "durability":170,
            "length":"A+",
            "range":"E",
            "weight":2100,
            "feature":"-"
        },
        {
            "name":"CU・レイター",
            "durability":180,
            "length":"B+",
            "range":"D",
            "weight":1800,
            "feature":"ロックオン追従性能UP>"
        },
        {
            "name":"ゴールテン・D",
            "durability":220,
            "length":"C",
            "range":"A",
            "weight":2200,
            "feature":"(ロックオン範囲が縦に広い)"
        },
        {
            "name":"ディスドス",
            "durability":170,
            "length":"B+",
            "range":"D",
            "weight":2200,
            "feature":["対象ロスト耐性", "(ロックオンエリアが少し横に広い)"]
        },
        {
            "name":"サブライガ",
            "durability":200,
            "length":"D",
            "range":"B",
            "weight":2000,
            "feature":["対象ロスト耐性", "クリティカル範囲UP"]
        },
        {
            "name":"ファルマコン",
            "armor":10,
            "durability":200,
            "length":"E",
            "range":"A",
            "weight":1700,
            "feature":"ロックオン追従性能UP>"
        },
    ],
    Arm:
    [
        {
            "name":"ソリディア",
            "durability":200,
            "weight":2000,
            "feature":["両手武器リロード速度UP>>", "攻撃力UP>"]
        },
        {
            "name":"カーディナル",
            "durability":150,
            "weight":1800,
            "feature":["ビーム武器リロード速度UP>", "格闘武器リロード速度UP>>>"]
        },
        {
            "name":"スクラッパー",
            "durability":210,
            "weight":2100,
            "feature":["ビーム武器リロード速度UP>", "ビーム攻撃力UP>"]
        },
        {
            "name":"サイトヘッド",
            "durability":170,
            "weight":2100,
            "feature":"両手武器リロード速度UP>>>"
        },
        {
            "name":"CU・レイター",
            "durability":170,
            "weight":1800,
            "feature":["補助武器リロード速度UP>>>", "妨害武器リロード速度UP>>"]
        },
        {
            "name":"ゴールテン・D",
            "durability":220,
            "weight":2200,
            "feature":"実弾武器リロード速度UP>"
        },
        {
            "name":"ディスドス",
            "durability":180,
            "weight":2200,
            "feature":["状態異常攻撃時間延長>>>", "設置時間延長>>>"]
        },
        {
            "name":"サブライガ",
            "durability":170,
            "weight":2000,
            "feature":"片手武器リロード速度UP>"
        },
        {
            "name":"ファルマコン",
            "armor":20,
            "durability":160,
            "weight":1700,
            "feature":["格闘武器リロード速度UP>>", "片手武器 左 リロード速度UP>>"]
        },
    ],
    Body:
    [
        {
            "name":"ソリディア",
            "armor":200,
            "durability":200,
            "repairSpeed":"B",
            "repairLatency":"C",
            "weight":2000,
            "feature":"-"
        },
        {
            "name":"カーディナル",
            "armor":170,
            "durability":100,
            "repairSpeed":"A",
            "repairLatency":"B+",
            "weight":1800,
            "feature":"状態異常耐性>>>"
        },
        {
            "name":"スクラッパー",
            "armor":150,
            "durability":250,
            "repairSpeed":"B",
            "repairLatency":"C",
            "weight":2100,
            "feature":"-"
        },
        {
            "name":"サイトヘッド",
            "armor":250,
            "durability":150,
            "repairSpeed":"E",
            "repairLatency":"C",
            "weight":2100,
            "feature":"-"
        },
        {
            "name":"CU・レイター",
            "armor":120,
            "durability":130,
            "repairSpeed":"C",
            "repairLatency":"A+",
            "weight":1800,
            "feature":"状態異常耐性>"
        },
        {
            "name":"ゴールテン・D",
            "armor":300,
            "durability":130,
            "repairSpeed":"E",
            "repairLatency":"E",
            "weight":2200,
            "feature":"-"
        },
        {
            "name":"ディスドス",
            "armor":170,
            "durability":120,
            "repairSpeed":"E",
            "repairLatency":"A+",
            "weight":2200,
            "feature":"ダウン耐性>>"
        },
        {
            "name":"サブライガ",
            "armor":180,
            "durability":160,
            "repairSpeed":"A",
            "repairLatency":"B+",
            "weight":2000,
            "feature":"ダウン耐性>>"
        },
        {
            "name":"ファルマコン",
            "armor":160,
            "durability":70,
            "repairSpeed":"E",
            "repairLatency":"A+",
            "weight":1700,
            "feature":"状態異常耐性>>>"
        },
    ],
    Wing:
    [
        {
            "name":"ソリディア",
            "durability":200,
            "weight":2000,
            "dashType":"短距離ダッシュ",
            "dodge":"B",
            "dash":"C",
            "fdType":"長距離スタンダード",
            "fdCharge":"B",
            "drift":"B",
            "feature":"-"
        },
        {
            "name":"カーディナル",
            "durability":170,
            "weight":1800,
            "dashType":"高速ダッシュ",
            "dodge":"E",
            "dash":"D",
            "fdType":"短距離高速",
            "fdCharge":"A",
            "drift":"A",
            "feature":"(格闘時にブースト消費しない)"
        },
        {
            "name":"スクラッパー",
            "durability":250,
            "weight":2100,
            "dashType":"溜めダッシュ",
            "dodge":"B",
            "dash":"B",
            "fdType":"長距離持続",
            "fdCharge":"C",
            "drift":"B+",
            "feature":"-"
        },
        {
            "name":"サイトヘッド",
            "durability":250,
            "weight":2100,
            "dashType":"加速ダッシュ",
            "dodge":"B+",
            "dash":"A+",
            "fdType":"長距離スタンダード",
            "fdCharge":"B",
            "drift":"C",
            "feature":"-"
        },
        {
            "name":"CU・レイター",
            "durability":210,
            "weight":1800,
            "dashType":"短距離ダッシュ",
            "dodge":"A",
            "dash":"A",
            "fdType":"長距離スタンダード",
            "fdCharge":"B",
            "drift":"D",
            "feature":["(ジャンプ力が高い)", "(回避時のブースト消費が少ない)"]
        },
        {
            "name":"ゴールテン・D",
            "durability":300,
            "weight":2500,
            "dashType":"溜めダッシュ",
            "dodge":"B+",
            "dash":"B",
            "fdType":"短距離加速",
            "fdCharge":"B",
            "drift":"B",
            "feature":"-"
        },
        {
            "name":"ディスドス",
            "durability":220,
            "weight":2200,
            "dashType":"短距離ダッシュ",
            "dodge":"A",
            "dash":"B",
            "fdType":"短距離スタンダード",
            "fdCharge":"B",
            "drift":"B+",
            "feature":"(下方向への回避行動が可能)"
        },
        {
            "name":"サブライガ",
            "durability":200,
            "weight":2000,
            "dashType":"高速ダッシュ",
            "dodge":"B",
            "dash":"A",
            "fdType":"長距離スタンダード",
            "fdCharge":"B",
            "drift":"E",
            "feature":"-"
        },
        {
            "name":"ファルマコン",
            "armor":20,
            "durability":150,
            "weight":1700,
            "dashType":"短距離ダッシュ",
            "dodge":"B",
            "dash":"C",
            "fdType":"短距離高速",
            "fdCharge":"B+",
            "drift":"D",
            "feature":"(回避行動の際に自身の機体を一時的に透明にする)"
        },
    ],
    Leg:
    [
        {
            "name":"ソリディア",
            "durability":200,
            "occupation":"B",
            "weight":2000,
            "feature":"-"
        },
        {
            "name":"カーディナル",
            "durability":130,
            "occupation":"A",
            "weight":1800,
            "feature":"-"
        },
        {
            "name":"スクラッパー",
            "durability":170,
            "occupation":"B",
            "weight":2100,
            "feature":"地上ブースト回復速度UP>"
        },
        {
            "name":"サイトヘッド",
            "durability":170,
            "occupation":"B+",
            "weight":2100,
            "feature":"-"
        },
        {
            "name":"CU・レイター",
            "durability":130,
            "occupation":"A",
            "weight":1800,
            "feature":"-"
        },
        {
            "name":"ゴールテン・D",
            "durability":220,
            "occupation":"C",
            "weight":2200,
            "feature":"地上ブースト回復速度UP>"
        },
        {
            "name":"ディスドス",
            "durability":120,
            "occupation":"B",
            "weight":2200,
            "feature":"フルドライブ消費軽減>"
        },
        {
            "name":"サブライガ",
            "durability":120,
            "occupation":"B",
            "weight":2000,
            "feature":"ブースト消費軽減>>"
        },
        {
            "name":"ファルマコン",
            "armor":30,
            "durability":160,
            "occupation":"B",
            "weight":1700,
            "feature":"-"
        },
    ]
};

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
                                ${Array.isArray(items.feature) === true ?
                                    `${items.feature[0]}<br>${items.feature[1]}`:
                                    `${items.feature}`
                                }
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
                        <ons-col class="area5">${items.repairLatency}</ons-col>
                    </ons-row>
                    <div class="expandable-content">
                        <ons-row>
                            <ons-col width="50%">　重量</ons-col>
                            <ons-col>${items.weight}</ons-col>
                        </ons-row>
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
                                ${Array.isArray(items.feature) === true ?
                                    `${items.feature[0]}<br>${items.feature[1]}`:
                                    `${items.feature}`
                                }
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
                                ${Array.isArray(items.feature) === true ?
                                    `${items.feature[0]}<br>${items.feature[1]}`:
                                    `${items.feature}`
                                }
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
                        <ons-col class="area5">${items.repairLatency}</ons-col>
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

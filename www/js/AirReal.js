const funcPageAirReal = () =>
{
    SPDB.AirReal =
    {
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
                "feature":"(ロックオンエリアが縦に広い)"
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
                "durability":180,
                "length":"D",
                "range":"B",
                "weight":200,
                "feature":"(クリティカルの範囲が広い)"
            }
        ],
        Arm:
        [
            {
                "name":"ソリディア",
                "durability":200,
                "weight":2000,
                "feature":"両手武器リロード速度UP>>"
            },
            {
                "name":"カーディナル",
                "durability":150,
                "weight":1800,
                "feature":["ビーム武器リロード速度UP>", "格闘武器リロード速度UP>>>"]
            },
            {
                "name":"サイトヘッド",
                "durability":140,
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
                "feature":"状態異常攻撃時間延長>>>"
            },
            {
                "name":"サブライガ",
                "durability":170,
                "weight":2000,
                "feature":"片手武器リロード速度UP>"
            }
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
                "name":"サイトヘッド",
                "armor":230,
                "durability":170,
                "repairSpeed":"D",
                "repairLatency":"D",
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
                "feature":"-"
            },
            {
                "name":"サブライガ",
                "armor":180,
                "durability":160,
                "repairSpeed":"A",
                "repairLatency":"B+",
                "weight":2000,
                "feature":"-"
            }
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
                "durability":200,
                "weight":2000,
                "dashType":"高速ダッシュ",
                "dodge":"C",
                "dash":"D",
                "fdType":"短距離高速",
                "fdCharge":"A",
                "drift":"A",
                "feature":"(格闘時にブースト消費しない)"
            },
            {
                "name":"サイトヘッド",
                "durability":250,
                "weight":2100,
                "dashType":"加速ダッシュ",
                "dodge":"B+",
                "dash":"A+",
                "fdType":"長距離スタンダード",
                "fdCharge":"B+",
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
                "fdCharge":"C",
                "drift":"D",
                "feature":["(ジャンプ力が高い)", "(回避時のブースト消費が少ない)"]
            },
            {
                "name":"ゴールテン・D",
                "durability":300,
                "weight":2500,
                "dashType":"溜めダッシュ",
                "dodge":"B+",
                "dash":"B+",
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
                "dodge":"B+",
                "dash":"B",
                "fdType":"短距離スタンダード",
                "fdCharge":"B",
                "drift":"B+",
                "feature":"(下方向へ回避行動が可能)"
            },
            {
                "name":"サブライガ",
                "durability":190,
                "weight":2200,
                "dashType":"高速ダッシュ",
                "dodge":"B",
                "dash":"C",
                "fdType":"長距離スタンダード",
                "fdCharge":"B",
                "drift":"B",
                "feature":"-"
            }
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
                "feature":"(フルドライブ時の消費量が減る)"
            },
            {
                "name":"サブライガ",
                "durability":120,
                "occupation":"B",
                "weight":2000,
                "feature":"ブースト消費軽減>>"
            }
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
        document.getElementById("textToast").innerHTML = `
            ステータス:<br>
            　パーツ情報: すべて埋まっています。<br>
            <br>
            ディスドス・ソリディアカラーについてはディスドスと同じ性能のため記載していません。`;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        const list_header = document.createElement("ons-list-header");
        switch(tab)
        {
            case "Head":
                list_header.innerHTML = `
                    <ons-row>
                        <ons-col width="40%"></ons-col>
                        <ons-col></ons-col>
                        <ons-col>ロックオン</ons-col>
                        <ons-col width="5%"></ons-col>
                    </ons-row>
                    <ons-row>
                        <ons-col width="40%">パーツ名</ons-col>
                        <ons-col>耐久値</ons-col>
                        <ons-col>重量</ons-col>
                        <ons-col>距離</ons-col>
                        <ons-col>範囲</ons-col>
                        <ons-col width="5%"></ons-col>
                    </ons-row>
                `;
                break;
            case "Arm":
                list_header.innerHTML = `
                    <ons-row>
                        <ons-col width="40%">パーツ名</ons-col>
                        <ons-col>耐久値</ons-col>
                        <ons-col>重量</ons-col>
                    </ons-row>
                `;
                break;
            case "Body":
                list_header.innerHTML = `
                    <ons-row>
                        <ons-col width="40%"></ons-col>
                        <ons-col></ons-col>
                        <ons-col>アーマー</ons-col>
                        <ons-col width="5%"></ons-col>
                    </ons-row>
                    <ons-row>
                        <ons-col width="40%">パーツ名</ons-col>
                        <ons-col>耐久値</ons-col>
                        <ons-col>アーマー</ons-col>
                        <ons-col>全回復</ons-col>
                        <ons-col>回復待機</ons-col>
                        <ons-col width="5%"></ons-col>
                    </ons-row>
                `;
                break;
            case "Wing":
                list_header.innerHTML = `
                    <ons-row>
                        <ons-col width="40%">パーツ名</ons-col>
                        <ons-col>耐久値</ons-col>
                        <ons-col>重量</ons-col>
                    </ons-row>
                `;
                break;
            case "Leg":
                list_header.innerHTML = `
                    <ons-row>
                        <ons-col width="40%">パーツ名</ons-col>
                        <ons-col>耐久値</ons-col>
                        <ons-col>重量</ons-col>
                        <ons-col>ポート占拠</ons-col>
                        <ons-col width="5%"></ons-col>
                    </ons-row>
                `;
                break;
            default:
                console.error("AirReal: error");
                break;
        }
        fragment.appendChild(list_header);

        for(const items of SPDB.AirReal[tab])
        {
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");
            switch(tab)
            {
                case "Head":
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col width="40%">
                                ${items.name}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.durability}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.weight}
                            </ons-col>
                            <ons-col style="text-align: center;">
                                ${items.length}
                            </ons-col>
                            <ons-col style="text-align: center;">
                                ${items.range}
                            </ons-col>
                        </ons-row>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="25%">
                                    特性
                                </ons-col>
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
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col width="40%">
                                ${items.name}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.durability}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.weight}
                            </ons-col>
                        </ons-row>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="25%">
                                    特性
                                </ons-col>
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
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col width="40%">
                                ${items.name}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.durability}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.armor}
                            </ons-col>
                            <ons-col style="text-align: center;">
                                ${items.repairSpeed}
                            </ons-col>
                            <ons-col style="text-align: center;">
                                ${items.repairLatency}
                            </ons-col>
                        </ons-row>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="25%">
                                    特性
                                </ons-col>
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
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col width="40%">
                                ${items.name}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.durability}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.weight}
                            </ons-col>
                        </ons-row>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="50%">
                                    ダッシュタイプ
                                </ons-col>
                                <ons-col>
                                    ${items.dashType}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col>
                                    　回避
                                </ons-col>
                                <ons-col>
                                    ${items.dodge}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col>
                                    　ダッシュ
                                </ons-col>
                                <ons-col>
                                    ${items.dash}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col width="50%">
                                    フルドライブタイプ
                                </ons-col>
                                <ons-col>
                                    ${items.fdType}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col>
                                    　フルドライブ溜め
                                </ons-col>
                                <ons-col>
                                    ${items.fdCharge}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col>
                                    　ドリフト
                                </ons-col>
                                <ons-col>
                                    ${items.drift}
                                </ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col width="25%">
                                    特性
                                </ons-col>
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
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col width="40%">
                                ${items.name}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.durability}
                            </ons-col>
                            <ons-col style="text-align: right;">
                                ${items.weight}
                            </ons-col>
                            <ons-col style="text-align: center;">
                                ${items.occupation}
                            </ons-col>
                        </ons-row>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="25%">
                                    特性
                                </ons-col>
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
            fragment.appendChild(list_item);
        }

        const findElement = (query) =>
        {
            const listAirReal = document.getElementById(query);
            if(listAirReal != null)
            {
                clearInterval(idSetInterval);
                listAirReal.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listAirReal_${tab}`);
    };

    appendData("Head");
    appendData("Arm");
    appendData("Body");
    appendData("Wing");
    appendData("Leg");
};

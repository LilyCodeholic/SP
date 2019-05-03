const funcPageCustomize = () =>
{
    SPDB.Customize =
    {
        Status:`
            ステータス<br>
            　勝利ポーズ　: 埋まっています<br>
            　ラインカラー: 埋まっています<br>
            　パーツカラー: 埋まっています<br>
            <br>
            順番はアプリ、ゲームに準拠しています。<br>
            色は正確ではありません。`,
        VictoryPose:
        [
            {
                "pose":"旗あり",
                "who": "共通"
            },
            {
                "pose":"旗なし",
                "who": "共通"
            },
            {
                "pose":"余裕 旗なし",
                "who":"共通？"
            },
            {
                "pose":"ダブルピース！",
                "who": "ヒカリ専用"
            },
            {
                "pose":"ジャンプ！",
                "who": "レイカ専用"
            },
            {
                "pose":"大勝利！",
                "who": "シャーリー専用"
            },
            {
                "pose":"最高！",
                "who": "イサドラ専用"
            },
            {
                "pose":"もっと上を！",
                "who": "ナギ専用"
            },
            {
                "pose":"テッペン獲るぜ！",
                "who": "カズマ専用"
            },
        ],
        LineColor:
        [
            {
                "color":"ヒカリカラー",
                "RGB": "#9b72b0"
            },
            {
                "color":"レイカカラー",
                "RGB": "#0075c2"
            },
            {
                "color":"シャーリーカラー",
                "RGB": "#f5b2b2"
            },
            {
                "color":"イサドラカラー",
                "RGB": "#777e41"
            },
            {
                "color":"ナギカラー",
                "RGB": "#ee7800"
            },
            {
                "color":"カズマカラー",
                "RGB": "#fff3b8"
            },
            {
                "color":"レッド",
                "RGB": "#ea5550"
            },
            {
                "color":"イエロー",
                "RGB": "#ffdc00"
            },
            {
                "color":"ライトグリーン",
                "RGB": "#bee0c2"
            },
            {
                "color":"スカイブルー",
                "RGB": "#a0d8ef"
            },
            {
                "color":"ウルトラマリン",
                "RGB": "#434da2"
            },
            {
                "color":"ヴァイオレット",
                "RGB": "#5a4498"
            },
        ],
        PartsColor:
        [
            {
                "color":"デフォルトカラー",
                "RGB": "#000000"
            },
            {
                "color":"ワインレッド",
                "RGB": "#b33e5c"
            },
            {
                "color":"シャドーエメラルド",
                "RGB": "#008753"
            },
            {
                "color":"ダークターコイズ",
                "RGB": "#007c7f"
            },
            {
                "color":"シャドーパープル",
                "RGB": "#7c5b8c"
            },
            {
                "color":"ダークレッド",
                "RGB": "#bb4440"
            },
            {
                "color":"ダークグリーン",
                "RGB": "#384e36"
            },
            {
                "color":"ダークブルー",
                "RGB": "#001e43"
            },
            {
                "color":"ダークイエロー",
                "RGB": "#ccb000"
            },
            {
                "color":"レッド",
                "RGB": "#ea5550"
            },
            {
                "color":"イエロー",
                "RGB": "#ffdc00"
            },
            {
                "color":"クリームイエロー",
                "RGB": "#fff3b8"
            },
            {
                "color":"グリーン",
                "RGB": "#00a960"
            },
            {
                "color":"ブルー",
                "RGB": "#0075c2"
            },
            {
                "color":"ヴァイオレット",
                "RGB": "#5a4498"
            },
            {
                "color":"ローズ",
                "RGB": "#e95464"
            },
            {
                "color":"ホワイト",
                "RGB": "#ffffff"
            },
            {
                "color":"ブラック",
                "RGB": "#000000"
            },
        ]
    };

    const tabCustomize = document.getElementById("tabCustomize");
    tabCustomize.addEventListener("prechange", (event) =>
    {
        textToolbar = `${event.tabItem.textContent}`;
        document.querySelector("#pageCustomize .center").innerHTML = textToolbar;
    }, false);
    document.querySelector("#pageCustomize ons-toolbar-button").onclick = () =>
    {
        document.getElementById("textToast").innerHTML = SPDB.Customize.Status;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        for(const items of SPDB.Customize[tab])
        {
            const list_item = document.createElement("ons-list-item");
            switch(tab)
            {
                case "VictoryPose":
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col>
                                ${items.pose}
                            </ons-col>
                            <ons-col>
                                ${items.who}
                            </ons-col>
                        </ons-row>
                    `;
                    break;
                case "LineColor":
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col>
                                ${items.color}
                            </ons-col>
                            <ons-col style="background: linear-gradient(to bottom right, white 10%, ${items.RGB}, white 90%);">
                            </ons-col>
                        </ons-row>
                    `;
                    break;
                case "PartsColor":
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col>
                                ${items.color}
                            </ons-col>
                            <ons-col style="background: ${items.RGB};">
                            </ons-col>
                        </ons-row>
                    `;
                    break;
                default:
                    console.error("Customize: error");
                    break;
            }
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
        const idSetInterval = setInterval(findElement, 100, `listCustomize_${tab}`);
    };

    appendData("VictoryPose");
    appendData("LineColor");
    appendData("PartsColor");
};

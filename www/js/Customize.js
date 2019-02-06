const funcPageCustomize = () =>
{
    SPDB.Customize =
    {
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
                "pose":"ダブルピース！",
                "who": "ヒカリ"
            },
            {
                "pose":"ジャンプ！",
                "who": "レイカ"
            },
            {
                "pose":"大勝利！",
                "who": "シャーリー"
            },
            {
                "pose":"最高！",
                "who": "イサドラ"
            },
            {
                "pose":"もっと上を！",
                "who": "ナギ"
            },
            {
                "pose":"テッペン獲るぜ！",
                "who": "カズマ"
            },
        ],
        LineColor:
        [
            {
                "color":"ヒカリカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"レイカカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"シャーリーカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"イサドラカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"ナギカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"カズマカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"レッド",
                "RGB": "#ffffff"
            },
            {
                "color":"イエロー",
                "RGB": "#ffffff"
            },
            {
                "color":"ライトグリーン",
                "RGB": "#ffffff"
            },
            {
                "color":"スカイブルー",
                "RGB": "#ffffff"
            },
            {
                "color":"ウルトラマリン",
                "RGB": "#ffffff"
            },
            {
                "color":"ヴァイオレット",
                "RGB": "#ffffff"
            }
        ],
        PartsColor:
        [
            {
                "color":"デフォルトカラー",
                "RGB": "#ffffff"
            },
            {
                "color":"ワインレッド",
                "RGB": "#ffffff"
            },
            {
                "color":"シャドーエメラルド",
                "RGB": "#ffffff"
            },
            {
                "color":"ダークターコイズ",
                "RGB": "#ffffff"
            },
            {
                "color":"シャドーパープル",
                "RGB": "#ffffff"
            },
            {
                "color":"ダークレッド",
                "RGB": "#ffffff"
            },
            {
                "color":"ダークグリーン",
                "RGB": "#ffffff"
            },
            {
                "color":"ダークブルー",
                "RGB": "#ffffff"
            },
            {
                "color":"ダークイエロー",
                "RGB": "#ffffff"
            },
            {
                "color":"レッド",
                "RGB": "#ffffff"
            },
            {
                "color":"イエロー",
                "RGB": "#ffffff"
            },
            {
                "color":"クリームイエロー",
                "RGB": "#ffffff"
            },
            {
                "color":"グリーン",
                "RGB": "#ffffff"
            },
            {
                "color":"ブルー",
                "RGB": "#ffffff"
            },
            {
                "color":"ヴァイオレット",
                "RGB": "#ffffff"
            },
            {
                "color":"ローズ",
                "RGB": "#ffffff"
            },
            {
                "color":"ホワイト",
                "RGB": "#ffffff"
            },
            {
                "color":"ブラック",
                "RGB": "#000000"
            }
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
        document.getElementById("textToast").innerHTML = `
            ステータス:<br>
            　勝利ポーズ　: 埋まっています<br>
            　ラインカラー: 右側の色を塗っていません<br>
            　パーツカラー: 右側の色を塗っていません<br>
            <br>
            順番はアプリ、ゲームに準拠して記載しています。`;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        for(const items of SPDB.Customize[tab])
        {
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");
            switch(tab)
            {
                case "VictoryPose":
                    list_item.innerHTML = `
                        <ons-row>
                            <ons-col>
                                ${items.pose}
                            </ons-col>
                            <ons-col>
                                ${items.who}専用
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
                            <ons-col style="background-color: ${items.RGB};">
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
                            <ons-col style="background-color: ${items.RGB};">
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

}

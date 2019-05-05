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
                "who":"共通",
                "flag":"初めから所持"
            },
            {
                "pose":"旗なし",
                "who":"共通",
                "flag":"初めから所持"
            },
            {
                "pose":"？？？",
                "who":"ヒカリ専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"？？？",
                "who":"ヒカリ専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"ダブルピース！",
                "who":"ヒカリ専用",
                "flag":"20000CPで購入"
            },
            {
                "pose":"？？？",
                "who":"レイカ専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"優雅に翻す",
                "who":"レイカ専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"ジャンプ！",
                "who":"レイカ専用",
                "flag":"20000CPで購入"
            },
            {
                "pose":"私が一番！",
                "who":"シャーリー専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"まだまだね",
                "who":"シャーリー専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"大勝利！",
                "who":"シャーリー専用",
                "flag":"20000CPで購入"
            },
            {
                "pose":"余裕 旗なし",
                "who":"イサドラ専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"妖艶",
                "who":"イサドラ専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"最高！",
                "who":"イサドラ専用",
                "flag":"20000CPで購入"
            },
            {
                "pose":"？？？",
                "who":"ナギ専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"？？？",
                "who":"ナギ専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"もっと上を！",
                "who":"ナギ専用",
                "flag":"20000CPで購入"
            },
            {
                "pose":"？？？",
                "who":"カズマ専用",
                "flag":"クエスト「アクロバティック飛行」をクリア"
            },
            {
                "pose":"余裕",
                "who":"カズマ専用",
                "flag":"DePS 7000を達成"
            },
            {
                "pose":"テッペン獲るぜ！",
                "who":"カズマ専用",
                "flag":"20000CPで購入"
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

        let headerWho = "";
        for(const items of SPDB.Customize[tab])
        {
            const list_header = document.createElement("ons-list-header");
            switch(tab)
            {
                case "VictoryPose":
                    if(headerWho == "" || headerWho != items.who)
                    {
                        list_header.innerHTML = `
                            ${items.who}
                        `;
                        fragment.appendChild(list_header);
                    }
                    headerWho = items.who;
                    break;
                default:
                    console.error("Customize: error");
                    break;
            }

            const list_item = document.createElement("ons-list-item");
            switch(tab)
            {
                case "VictoryPose":
                    list_item.innerHTML = `
                        <span class="list-item__title">
                            ${items.pose}
                        </span>
                        <span class="list-item__subtitle">
                            　${items.flag}
                        </span>
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

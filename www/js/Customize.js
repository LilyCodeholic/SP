const funcPageCustomize = () =>
{
    SPDB.Customize =
    {
        VictoryPose:
        [
            {
                "pose":"？",
                "who": "？"
            },
        ],
        LineColor:
        [
            {
                "color":"？",
                "RGB": "#456789"
            },
        ],
        PartsColor:
        [
            {
                "color":"？",
                "RGB": "#456789"
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
        document.getElementById("textToast").innerHTML = `
            ステータス:<br>
            　勝利ポーズ　: 埋まっていません。<br>
            　ラインカラー: 埋まっていません。<br>
            　パーツカラー: 埋まっていません。<br>
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

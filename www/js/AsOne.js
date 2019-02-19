const funcPageAsOne = () =>
{
    SPDB.AsOne =
    {
        Skill:
        {
            Hikari:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ],
            Reika:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ],
            Shirley:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ],
            Isadora:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ],
            Nagi:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ],
            Kazuma:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "level":4
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                },
                {
                    "skill":"？",
                    "level":0
                }
            ]
        },
        Story:
        {
            Hikari:
            [
                {
                    "title":"aaa",
                    "dialog":
                    [
                        ["L", "1「」"],
                        ["R", "2「」"],
                        ["L", "1「」"]
                    ]
                }
            ],
            Reika:
            [
            ],
            Shirley:
            [
            ],
            Isadora:
            [
            ],
            Nagi:
            [
            ],
            Kazuma:
            [
            ]
        },
        Quotes:
        {
            Hikari:
            [
            ],
            Reika:
            [
            ],
            Shirley:
            [
            ],
            Isadora:
            [
            ],
            Nagi:
            [
            ],
            Kazuma:
            [
            ]
        }
    };

    const fullName =
    {
        "ヒカリ":"ヒカリ・ソラ",
        "レイカ":"レイカ・フロストエッジ",
        "シャーリー":"シャルロッテ・ダヴェーヌ",
        "イサドラ":"イサドラ・エザルタード",
        "ナギ":"ナギ・オネス",
        "カズマ":"カズマ・アブレイズ"
    };
    const tabAsOne = document.getElementById("tabAsOne");
    tabAsOne.addEventListener("prechange", (event) =>
    {
        textToolbar = `${fullName[event.tabItem.textContent]}`;
        document.querySelector("#pageAsOne .center").innerHTML = textToolbar;
    }, false);
    document.querySelector("#pageAsOne ons-toolbar-button").onclick = () =>
    {
        document.getElementById("textToast").innerHTML = `
            ステータス:<br>
            　ヒカリ　　: 初期スキル以外埋まっていません。<br>
            　レイカ　　: 初期スキル以外埋まっていません。<br>
            　シャーリー: 初期スキル以外埋まっていません。<br>
            　イサドラ　: 初期スキル以外埋まっていません。<br>
            　ナギ　　　: 初期スキル以外埋まっていません。<br>
            　カズマ　　: 初期スキル以外埋まっていません。`;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();

        // SPDB.AsOne.Skill
        {
            const list_header = document.createElement("ons-list-header");
            list_header.innerHTML = `
                <ons-row>
                    <ons-col width="75%">アズワンスキル</ons-col>
                    <ons-col>チームレベル</ons-col>
                </ons-row>
            `;
            fragment.appendChild(list_header);
        }
        for(const items of SPDB.AsOne.Skill[tab])
        {
            const list_item = document.createElement("ons-list-item");
            list_item.innerHTML = `
                <ons-row>
                    <ons-col width="75%">
                        ${items.skill}
                    </ons-col>
                    <ons-col style="text-align: right;">
                        ${items.level}
                    </ons-col>
                </ons-row>
            `;
            fragment.appendChild(list_item);
        }
/*
        // SPDB.AsOne.Story
        {
            const list_header = document.createElement("ons-list-header");
            list_header.innerHTML = `アズワンストーリー`;
            fragment.appendChild(list_header);
        }
        for(const items of SPDB.AsOne.Story[tab])
        {
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");

            const list_item_dialog = () =>
            {
                let tmpDialog = "";
                for(const dialog of items.dialog)
                {
                    const nameSwitch = `name="${tab}-${SPDB.AsOne.Story[tab].indexOf(items)}"`;
                    const idSwitch = `id="${tab}-${SPDB.AsOne.Story[tab].indexOf(items)}-${items.dialog.indexOf(dialog)}"`;
                    tmpDialog += `
                        <label>
                            <ons-list-item tappable>
                                ${dialog[0] === "R" ?
                                    `<div class="right">${dialog[1]}</div>`:
                                    `${dialog[1]}`}
                            <input type="radio" ${nameSwitch} ${idSwitch} style="visibility:hidden;">
                            </ons-list-item>
                        </label>
                    `;
                }
                return tmpDialog;
            }
            list_item.innerHTML = `
                ${items.title}
                <div class="expandable-content">
                    ${list_item_dialog()}
                </div>
            `;
            fragment.appendChild(list_item);
        }
*/
        // SPDB.AsOne.Quotes
        {}

        const findElement = (query) =>
        {
            const listAsOne = document.getElementById(query);
            if(listAsOne != null)
            {
                clearInterval(idSetInterval);
                listAsOne.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listAsOne_${tab}`);
    };

    appendData("Hikari");
    appendData("Reika");
    appendData("Shirley");
    appendData("Isadora");
    appendData("Nagi");
    appendData("Kazuma");
};

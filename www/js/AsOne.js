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
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"？？？",
                    "flag":"？？？",
                    "level":0
                }
            ],
            Reika:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"？？？",
                    "flag":"？？？",
                    "level":0
                }
            ],
            Shirley:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"？？？",
                    "flag":"？？？",
                    "level":0
                }
            ],
            Isadora:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"対象ロスト耐性上昇",
                    "flag":"クエスト「イサドラからの依頼1」をクリア",
                    "level":5
                },
                {
                    "skill":"ダッシュ速度上昇",
                    "flag":"クエスト「イサドラからの依頼2」をクリア",
                    "level":6
                },
                {
                    "skill":"？？？",
                    "flag":"クエスト「イサドラからの依頼？？？」をクリア",
                    "level":"？？？"
                },
                {
                    "skill":"対ビーム防御力上昇",
                    "flag":"DePS1500を達成",
                    "level":3
                },
                {
                    "skill":"？？？",
                    "flag":"DePS？？？を達成",
                    "level":"？？？"
                },
                {
                    "skill":"ビーム攻撃力上昇",
                    "flag":"クエスト「イサドラとスキルアップ1」をクリア",
                    "level":5
                },
                {
                    "skill":"？？？",
                    "flag":"クエスト「イサドラとスキルアップ？？？」をクリア",
                    "level":"？？？"
                }
            ],
            Nagi:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"？？？",
                    "flag":"？？？",
                    "level":0
                }
            ],
            Kazuma:
            [
                {
                    "skill":"武器切り替え速度上昇",
                    "flag":"初期所持スキル",
                    "level":4
                },
                {
                    "skill":"？？？",
                    "flag":"？？？",
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
                {
                    "when":"ログイン時",
                    "quote":"「」"
                },
                {
                    "when":"終了時",
                    "quote":"「」"
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

        // // SPDB.AsOne.Story
        // {
        //     const list_header = document.createElement("ons-list-header");
        //     list_header.innerHTML = `アズワンストーリー`;
        //     fragment.appendChild(list_header);
        // }
        // const form = document.createElement("form");
        // form.setAttribute("name", "story");

        // for(const items of SPDB.AsOne.Story[tab])
        // {
        //     const list_item = document.createElement("ons-list-item");
        //     list_item.setAttribute("expandable", "");

        //     const expandableContent = document.createElement("div");
        //     expandableContent.setAttribute("class", "expandable-content");
        //     for(const dialog of items.dialog)
        //     {
        //         const numStory = SPDB.AsOne.Story[tab].indexOf(items);
        //         const numOrder = items.dialog.indexOf(dialog);
        //         const nameRadio = `${tab}${numStory}`;
        //         const idRadio = `${tab}${numStory}-${numOrder}`;
        //         const idList_item = `li${tab}${numStory}-${numOrder}`;

        //         const label = document.createElement("label");
        //         label.setAttribute("for", idRadio);

        //         const expandableList_item = document.createElement("ons-list-item");
        //         expandableList_item.setAttribute("tappable", "");
        //         expandableList_item.setAttribute("id", idList_item);
        //         if(numOrder != 0)
        //         {
        //             expandableList_item.setAttribute("class", "hidden");
        //         }

        //         const input = document.createElement("input");
        //         input.setAttribute("type", "radio");
        //         input.setAttribute("name", nameRadio);
        //         input.setAttribute("id", idRadio);
        //         input.setAttribute("value", numOrder);
        //         input.setAttribute("class", "hidden");

        //         expandableList_item.innerHTML = `
        //             ${dialog[0] === "R" ?
        //                 `<div class="right">${dialog[1]}</div>`:
        //                 `${dialog[1]}`}
        //         `;
        //         expandableList_item.appendChild(input);

        //         input.onclick = () =>
        //         {
        //             const radioNodeList = document.forms.story[nameRadio];
        //             const value = Number(document.forms.story[nameRadio].value);
        //             const targetNum = value + 1;
        //             if(radioNodeList.length > targetNum)
        //             {
        //                 const edit = document.getElementById(`li${tab}${numStory}-${targetNum}`);
        //                 edit.removeAttribute("class");
        //             }
        //         };

        //         label.appendChild(expandableList_item);
        //         expandableContent.appendChild(label);
        //     }
        //     list_item.innerHTML = `${items.title}`;
        //     list_item.appendChild(expandableContent);
        //     form.appendChild(list_item);
        // }
        // fragment.appendChild(form);

        // // SPDB.AsOne.Quotes
        // {
        //     const list_header = document.createElement("ons-list-header");
        //     list_header.innerHTML = `セリフ`;
        //     fragment.appendChild(list_header);
        // }
        // for(const items of SPDB.AsOne.Quotes[tab])
        // {
        //     const list_item = document.createElement("ons-list-item");
        //     list_item.setAttribute("expandable", "");
        //     list_item.innerHTML = `
        //         ${items.when}
        //         <div class="expandable-content">
        //             ${items.quote}
        //         </div>
        //     `;
        //     fragment.appendChild(list_item);
        // }

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

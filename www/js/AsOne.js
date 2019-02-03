const funcPageAsOne = () =>
{
    SPDB.AsOne =
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

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        const list_header = document.createElement("ons-list-header");
        list_header.innerHTML = `
<ons-row>
    <ons-col width="75%">アズワンスキル</ons-col>
    <ons-col>チームレベル</ons-col>
</ons-row>
        `;
        fragment.appendChild(list_header);

        for(const items of SPDB.AsOne[tab])
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

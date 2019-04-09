const funcPageTask = () =>
{
    SPDB.Task =
    {
        Status:`
            ■ステータス<br>
            　ミッション: 作成中<br>
            　クエスト　: 作成中`,
        Mission:
        [
            {
                "name":"？？？",
                "flag":"",
                "prize":"",
                "term":""
            },
            {
                "name":"バレンタインキャンペーン1",
                "flag":"全国対戦で15回5位以上になる",
                "prize":"アサルト用武器「L.O.V.E」",
                "term":"2/1-15"
            },
            {
                "name":"バレンタインキャンペーン2",
                "flag":"全国対戦で10回1位になる",
                "prize":"称号「甘くはねぇぞ！」",
                "term":"2/1-15"
            },
            {
                "name":"ディスドスキャンペーン1",
                "flag":"「ディスドス・H」か「ディスドス・A」を装備して、敵ARを50体撃破する",
                "prize":"エア・リアルパーツ「ディスドス・H ソリディアカラー」「ディスドス・A ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン2",
                "flag":"「ディスドス・B」か「ディスドス・L」を装備して、自機がポート内にいる状態で敵ARに100000ダメージを与える",
                "prize":"エア・リアルパーツ「ディスドス・B ソリディアカラー」「ディスドス・L ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン3",
                "flag":"「ディスドス・W」を装備して、ポートを100回占拠する",
                "prize":"エア・リアルパーツ「ディスドス・W ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン4",
                "flag":"ディスドスキャンペーン1～3をクリア",
                "prize":"称号「愛機 ディスドス」",
                "term":"1/15-4/1"
            },
            {
                "name":"スクラッパーキャンペーン1",
                "flag":"「スクラッパー・H」か「スクラッパー・A」を装備して、ビーム武器で10000ダメージ与える",
                "prize":"エア・リアルパーツ「スクラッパー・H CU・レイターカラー」「スクラッパー・A CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン2",
                "flag":"「スクラッパー・B」か「スクラッパー・L」を装備して、ポート占拠時間を450秒達成する",
                "prize":"エア・リアルパーツ「スクラッパー・B CU・レイターカラー」「スクラッパー・L CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン3",
                "flag":"「スクラッパー・L」を装備して、敵コアへの攻撃を2試合行う",
                "prize":"エア・リアルパーツ「スクラッパー・W CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン4",
                "flag":"「スクラッパー」パーツをいずれか1つ装備して、ナイスプレイを1000回達成する",
                "prize":"エンブレム「スクラッパーサブ」、称号「愛機 スクラッパー」",
                "term":"3/6-4/17"
            },
        ],
        Quest:
        [
            {
                "name":"作成中",
                "flag":"作成中",
                "prize":"作成中"
            }
        ]
    };

    const tabTask = document.getElementById("tabTask");
    tabTask.addEventListener("prechange", (event) =>
    {
        textToolbar = `${event.tabItem.textContent}`;
        document.querySelector("#pageTask .center").innerHTML = textToolbar;
    }, false);
    document.querySelector("#pageTask ons-toolbar-button").onclick = () =>
    {
        document.getElementById("textToast").innerHTML = SPDB.Task.Status;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        for(const items of SPDB.Task[tab])
        {
            if(items.name == "？？？")
            {
                continue;
            }
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");
            switch(tab)
            {
                case "Mission":
                    list_item.innerHTML = `
                        <span class="list-item__title">
                            ${items.name}
                        </span>
                        <span class="list-item__subtitle">
                            ${items.flag}
                        </span>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="20%">報酬</ons-col>
                                <ons-col>${items.prize}</ons-col>
                            </ons-row>
                            <ons-row>
                                <ons-col width="20%">期間</ons-col>
                                <ons-col>${items.term}</ons-col>
                            </ons-row>
                        </div>
                    `;
                    break;
                case "Quest":
                    list_item.innerHTML = `
                        <span class="list-item__title">
                            ${items.name}
                        </span>
                        <span class="list-item__subtitle">
                            ${items.flag}
                        </span>
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="20%">報酬</ons-col>
                                <ons-col>${items.prize}</ons-col>
                            </ons-row>
                        </div>
                    `;
                    break;
                default:
                    console.error("Task: error");
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
        const idSetInterval = setInterval(findElement, 100, `listTask_${tab}`);
    };

    const tabs = ["Mission", "Quest"];
    for(const tab of tabs)
    {
        appendData(tab);
    }
};

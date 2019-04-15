const funcPageTask = () =>
{
    SPDB.Task =
    {
        Status:`
            ■ステータス<br>
            　ミッション: 埋まっています。<br>
            　クエスト　: 作成中です。`,
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
                "prize":"アサルト用武器,「L.O.V.E」",
                "term":"2/1-15"
            },
            {
                "name":"バレンタインキャンペーン2",
                "flag":"全国対戦で10回1位になる",
                "prize":"称号,「甘くはねぇぞ！」",
                "term":"2/1-15"
            },
            {
                "name":"ディスドスキャンペーン1",
                "flag":"「ディスドス・H」か「ディスドス・A」を装備して、敵ARを50体撃破する",
                "prize":"エア・リアルパーツ,「ディスドス・H ソリディアカラー」,「ディスドス・A ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン2",
                "flag":"「ディスドス・B」か「ディスドス・L」を装備して、自機がポート内にいる状態で敵ARに100000ダメージを与える",
                "prize":"エア・リアルパーツ,「ディスドス・B ソリディアカラー」,「ディスドス・L ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン3",
                "flag":"「ディスドス・W」を装備して、ポートを100回占拠する",
                "prize":"エア・リアルパーツ,「ディスドス・W ソリディアカラー」",
                "term":"1/15-4/1"
            },
            {
                "name":"ディスドスキャンペーン4",
                "flag":"ディスドスキャンペーン1～3をクリア",
                "prize":"称号,「愛機 ディスドス」",
                "term":"1/15-4/1"
            },
            {
                "name":"スクラッパーキャンペーン1",
                "flag":"「スクラッパー・H」か「スクラッパー・A」を装備して、ビーム武器で10000ダメージ与える",
                "prize":"エア・リアルパーツ,「スクラッパー・H CU・レイターカラー」,「スクラッパー・A CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン2",
                "flag":"「スクラッパー・B」か「スクラッパー・L」を装備して、ポート占拠時間を450秒達成する",
                "prize":"エア・リアルパーツ,「スクラッパー・B CU・レイターカラー」,「スクラッパー・L CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン3",
                "flag":"「スクラッパー・L」を装備して、敵コアへの攻撃を2試合行う",
                "prize":"エア・リアルパーツ,「スクラッパー・W CU・レイターカラー」",
                "term":"3/6-4/17"
            },
            {
                "name":"スクラッパーキャンペーン4",
                "flag":"「スクラッパー」パーツをいずれか1つ装備して、ナイスプレイを1000回達成する",
                "prize":"エンブレム,「スクラッパーサブ」,称号,「愛機 スクラッパー」",
                "term":"3/6-4/17"
            },
        ],
        Quest:
        [
            {
                "name":"？？？",
                "difficulty":0,
                "goal":"",
                "prize":"",
                "flag":""
            },
            {
                "name":"エア・リアル殲滅作戦1",
                "difficulty":1,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現",
            },
            {
                "name":"マグ殲滅作戦1",
                "difficulty":1,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"ポート奪還作戦1",
                "difficulty":1,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"Sマグ討伐作戦",
                "difficulty":2,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"アサルトの実戦1",
                "difficulty":2,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"ヴァンガードの実戦1",
                "difficulty":2,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"サポートの実戦1",
                "difficulty":2,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"射撃武器の訓練1",
                "difficulty":3,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"格闘武器の訓練1",
                "difficulty":3,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"初めから出現"
            },
            {
                "name":"戦略的撤退【1回限定】",
                "difficulty":1,
                "goal":"",
                "prize":"エンブレム",
                "flag":""
            },
            {
                "name":"[アズワン]からの依頼1【1回限定】",
                "difficulty":1,
                "goal":"",
                "prize":"アズワンスキル",
                "flag":""
            },
            {
                "name":"コミュニケーション【1回限定】",
                "difficulty":1,
                "goal":"",
                "prize":"称号「[アズワン]の物語」",
                "flag":""
            },
            {
                "name":"作戦報告【1回限定】",
                "difficulty":1,
                "goal":"",
                "prize":"エンブレム",
                "flag":""
            },
            {
                "name":"[アズワン]からの依頼2【1回限定】",
                "difficulty":2,
                "goal":"",
                "prize":"アズワンスキル",
                "flag":""
            },
            {
                "name":"エア・グランデ討伐作戦",
                "difficulty":2,
                "goal":"",
                "prize":["CP", "CP"],
                "flag":"クエスト「Sマグ討伐作戦」クリア"
            },
            {
                "name":"飛行訓練【1回限定】",
                "difficulty":2,
                "goal":"",
                "prize":"エンブレム",
                "flag":""
            },
            {
                "name":"戦略的戦闘訓練1",
                "difficulty":2,
                "goal":"",
                "prize":"",
                "flag":""
            },
            {
                "name":"[アズワン]とスキルアップ1【1回限定】",
                "difficulty":1,
                "goal":"",
                "prize":"アズワンスキル",
                "flag":"ランク2☆>に到達する？"
            },
            {
                "name":"アサルトの実戦2",
                "difficulty":2,
                "goal":["アサルトで5分対戦する", "ナイスプレイを30回達成する"],
                "prize":["200CP", "CP"],
                "flag":""
            },
            {
                "name":"ヴァンガードの実戦2",
                "difficulty":2,
                "goal":["ヴァンガードで5分対戦する", "ナイスプレイを30回達成する"],
                "prize":["200CP", "CP"],
                "flag":""
            },
            {
                "name":"サポートの実戦2",
                "difficulty":2,
                "goal":["サポートで5分対戦する", "ナイスプレイを30回達成する"],
                "prize":["200CP", "CP"],
                "flag":""
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
                                <ons-col>${items.prize.replace(/,/gi, "<br>")}</ons-col>
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
                        ★${items.difficulty} ${items.name}
                        <div class="expandable-content">
                            <ons-row>
                                <ons-col width="25%">達成条件</ons-col>
                                <ons-col>
                                    ${Array.isArray(items.goal) ?
                                        items.goal.length > 2 ?
                                            `${items.goal[0]}<br>${items.goal[1]}<br>${items.goal[2]}` :
                                            `${items.goal[0]}<br>${items.goal[1]}`
                                        :
                                        `${items.goal}`
                                    }
                                </ons-col>
                            </ons-row>
                            ${Array.isArray(items.prize) ?
                                `
                                    <ons-row>
                                        <ons-col width="25%">初回報酬</ons-col>
                                        <ons-col>${items.prize[0]}</ons-col>
                                    </ons-row>
                                    <ons-row>
                                        <ons-col width="25%">2回目以降</ons-col>
                                        <ons-col>${items.prize[1]}</ons-col>
                                    </ons-row>
                                ` :
                                `
                                    <ons-row>
                                        <ons-col width="25%">報酬</ons-col>
                                        <ons-col>${items.prize}</ons-col>
                                    </ons-row>
                                `
                            }
                            <ons-row>
                                <ons-col width="25%">出現条件</ons-col>
                                <ons-col>${items.flag}</ons-col>
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

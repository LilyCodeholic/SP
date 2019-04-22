const funcPageStage = () =>
{
    SPDB.Stage =
    {
        Status:`作成中`,
        Map:
        [
            {
                "name":"アナトミア平静峡谷 平原地域",
                "filename":"-"
            },
            {
                "name":"アナトミア平静峡谷 台地地域",
                "filename":"-"
            },
            {
                "name":"シーボルト分泌海 シーボルト海台",
                "filename":"-"
            },
            {
                "name":"シーボルト分泌海 シーボルト諸島",
                "filename":"-"
            },
            {
                "name":"ゲンタン膚化空洞 氷原区域",
                "filename":"-"
            }
        ]
    };

    const appendData = (list) =>
    {
        const fragment = document.createDocumentFragment();
        for(const items of SPDB.Stage[list])
        {
            if(items.name == "？？？")
            {
                continue;
            }
            const list_item = document.createElement("ons-list-item");
            list_item.setAttribute("expandable", "");
            list_item.innerHTML = `
                <span class="list-item__title">
                    ${items.name}
                </span>
                <div class="expandable-content">
                    ${items.filename}
                </div>
            `;
            fragment.appendChild(list_item);
        }

        const findElement = (query) =>
        {
            const listStage = document.getElementById(query);
            if(listStage != null)
            {
                clearInterval(idSetInterval);
                listStage.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listStage`);
    };

    appendData("Map");
};

const funcPageStage = () =>
{
    SPDB.Stage =
    {
        Status:`作成中`,
        Map:
        [
            {
                "name":"平原",
                "filename":"-"
            },
            {
                "name":"台地",
                "filename":"-"
            },
            {
                "name":"滝",
                "filename":"-"
            },
            {
                "name":"海",
                "filename":"-"
            },
            {
                "name":"洞窟",
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
                listTitle.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listStage_${tab}`);
    };

    appendData("Map");
};

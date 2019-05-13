const funcPageStage = () =>
{
    SPDB.Stage =
    {
        Status:`
            作成中`,
        Map:
        [
            {
                "name":"アナトミア平静峡谷 平原地域",
                "svg":`
<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
<!--
    <symbol id="" viewbox="0 0 16 16">
    </symbol>
-->
    <symbol id="tower" viewBox="0 0 16 16">
        <title>タワー</title>
        <path d="M1,1 L1,10 6,15 10,15 15,10 15,1 Z" stroke-width="5%" />
    </symbol>
    <symbol id="port" viewbox="0 0 16 16">
        <title>ポート</title>
        <g id="portOuter">
            <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" />
        </g>
        <g id="portInner">
            <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" />
        </g>
    </symbol>
    <symbol id="wordA" viewbox="0 0 16 16">
        <path d="M5,12 L8,4 11,12 M6,9 H10" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
    </symbol>
    <symbol id="wordB" viewbox="0 0 16 16">
        <path d="M5.5,5 V11 H10 A3,2,0,0,0,10,8 H5.5 H10 A3,2,0,0,0,10,5 H5.5 Z" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
    </symbol>
    <symbol id="wordC" viewbox="0 0 16 16">
        <path d="M5,8 A3,3,0,0,1,11,7 M5,8 A3,3,0,0,0,11,9" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
    </symbol>
    <symbol id="wordD" viewbox="0 0 16 16">
        <path d="M7,5 H5.5 V11 H7 A4,3,0,0,0,7,5" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
    </symbol>
    <symbol id="wordE" viewbox="0 0 16 16">
        <path d="M11,5 H6 V11 H11 M6,8 H10" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
    </symbol>
</svg>

<svg width="128px" height="64px" viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href="#tower" x="0" y="0" width="16" height="16" fill="rgb(193,41,51)" stroke="rgb(248,170,174)" />
    <use xlink:href="#tower" x="16" y="0" width="16" height="16" fill="rgb(14,74,134)" stroke="rgb(119,152,93)" />
</svg>
<svg width="320px" height="64px" viewBox="0 0 80 16" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href="#portOuter" x="0" y="0" width="16" height="16" fill="rgb(192,192,192)" />
    <use xlink:href="#portInner" x="0" y="0" width="16" height="16" fill="rgb(128,128,128)" />
    <use xlink:href="#wordA" x="0" y="0" width="16" height="16" />
</svg>

<!--
<svg id="portA" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ポートA(中立)</title>
    <desc>A rx ry x-axis-rotation large-arc-flag sweep-flag x y</desc>
    <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" fill="rgb(192,192,192)" />
    <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" fill="rgb(128,128,128)" />
    <path d="M5,12 L8,4 11,12 M6,9 H10" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
</svg>
<svg id="portB" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ポートB(敵100%)</title>
    <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" fill="rgb(255,104,114)" />
    <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" fill="rgb(193,41,51)" />
    <path d="M5.5,5 V11 H10 A3,2,0,0,0,10,8 H5.5 H10 A3,2,0,0,0,10,5 H5.5 Z" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
</svg>
<svg id="portC" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ポートC(100%)</title>
    <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" fill="rgb(135,195,255)" />
    <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" fill="rgb(14,74,134)" />
    <path d="M5,8 A3,3,0,0,1,11,7 M5,8 A3,3,0,0,0,11,9" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
</svg>
<svg id="portD" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ポートD(中立30%)</title>
    <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" fill="rgb(255,104,114)" />
    <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" fill="rgb(193,41,51)" />
    <path d="M7,5 H5.5 V11 H7 A4,3,0,0,0,7,5" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
</svg>
<svg id="portE" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ポートE(中立100%)</title>
    <path d="M8,0 A8,8,0,0,0,8,16 A8,8,0,0,0,8,0" fill="rgb(135,195,255)" />
    <path d="M8,3 A5,5,0,0,0,8,13 A5,5,0,0,0,8,3" fill="rgb(14,74,134)" />
    <path d="M11,5 H6 V11 H11 M6,8 H10" fill="none" stroke="rgb(192,192,192)" stroke-width="6%" />
</svg>

<svg id="assault" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>アサルト(敵機)</title>
    <path d="M0,8 L6,6 12,5 16,5 16,11 12,11 6,10" fill="rgb(193,41,51)" />
    <path d="M16,11 L12,11 6,10 0,8 6,6 12,5 16,5 16,11 14,5" fill="none" stroke="rgb(255,104,114)" stroke-width="7%" />
</svg>
<svg id="vanguard" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>ヴァンガード(敵機)</title>
    <path d="M2,4 L4,2 14,2 14,14 4,14 2,12" fill="rgb(193,41,51)" />
    <path d="M12,2 L14,2 14,14 4,14 2,12 2,4 4,2 12,2 12,14" fill="none" stroke="rgb(255,104,114)" stroke-width="7%" />
</svg>
<svg id="support" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>サポート(敵機)</title>
    <path d="M3,8 A5,6,0,0,0,13,8 A5,6,0,0,0,3,8" fill="rgb(193,41,51)" />
    <path d="M14,3 L13,8 A5,6,0,0,0,3,8 A2,3,0,0,0,7,8 A2,3,0,0,0,3,8 A5,6,0,0,0,13,8 L14,13" fill="none" stroke="rgb(255,104,114)" stroke-width="7%" />
</svg>

<svg id="core_e" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>敵コア(バリア)</title>
    <path d="M8,2 L2,8 8,14 14,8" fill="rgb(255,104,114)" />
    <path d="M0,8 A8,8,0,0,0,16,8 A8,8,0,0,0,0,8" fill="rgba(192,192,64,0.5)" />
</svg>

<svg id="arrow" width="64px" height="32px" viewBox="0 0 16 8" xmlns="http://www.w3.org/2000/svg">
    <title>矢印</title>
    <path d="M2,0 v8 m4,0 v-8 m4,0 v8 m4,0 v-8 M0,4 l2,-4 2,4 2,-4 2,4 2,-4 2,4 2,-4 2,4" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
</svg>
<svg id="upper" width="64px" height="16px" viewBox="0 0 64 16" xmlns="http://www.w3.org/2000/svg">
    <title>上位</title>
    <path d="M8,2 v12 M18,2 h12 v6 h-12 v6 h12 M34,2 h12 v12 h-12 m0,-6 h12 M50,2 v6 h12 m0,-6 v12" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
</svg>
<svg id="lower" width="64px" height="16px" viewBox="0 0 64 16" xmlns="http://www.w3.org/2000/svg">
    <title>下位</title>
    <path d="M14,2 h-12 v6 h12 v6 h-12 M30,2 h-12 v12 h12 v-6 h-12 M34,8 v-6 h12 v12 M50,2 v12 h12 v-12 h-12 m0,6 h12" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
</svg>

<svg id="airgrande" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>エア・グランデ</title>
    <path d="M8,2 L4,12 8,16 12,12" fill="rgb(12,122,211)" />
    <path d="M4,12 L8,2 12,12" fill="none" stroke="rgb(177,212,218)" stroke-width="7%" />
</svg>
<svg id="arrowAirgrande" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <title>エア・グランデの軌跡</title>
    <path d="M8,0 L0,8 h4 v8 h8 v-8 h4 Z" fill="rgb(82,152,214)" />
</svg>

<svg id="daichi" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>台地</title>
    <path d="M17,1 L15,2 13,3 11,5 9,7 8,8 V24 L8,24 9,25 11,27 13,29 15,30 17,31
             19,30 22,27 23,24 V8 L23,8 22,5 19,2 Z" fill="rgb(30,43,30)" stroke="rgb(79,129,103)" stroke-width="2%" />
</svg>
-->
`
            },
            {
                "name":"アナトミア平静峡谷 台地地域",
                "svg":``
            },
            {
                "name":"シーボルト分泌海 シーボルト海台",
                "svg":``
            },
            {
                "name":"シーボルト分泌海 シーボルト諸島",
                "svg":``
            },
            {
                "name":"ゲンタン膚化空洞 氷原区域",
                "svg":``
            },
            {
                "name":"？？？",
                "svg":""
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
            `;

            const expandableContent = document.createElement("div");
            expandableContent.setAttribute("class", "expandable-content");
            expandableContent.innerHTML = items.svg;

            list_item.appendChild(expandableContent);
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

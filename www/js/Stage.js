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
    <symbol id="word_A" viewbox="0 0 16 16">
        <path d="M5,12 L8,4 11,12 M6,9 H10" fill="none" stroke="rgba(192,192,192,0.75)" stroke-width="6%" />
    </symbol>
    <symbol id="word_B" viewbox="0 0 16 16">
        <path d="M5.5,5 V11 H10 A3,2,0,0,0,10,8 H5.5 H10 A3,2,0,0,0,10,5 H5.5 Z" fill="none" stroke="rgba(192,192,192,0.75)" stroke-width="6%" />
    </symbol>
    <symbol id="word_C" viewbox="0 0 16 16">
        <path d="M5,8 A3,3,0,0,1,11,7 M5,8 A3,3,0,0,0,11,9" fill="none" stroke="rgba(192,192,192,0.75)" stroke-width="6%" />
    </symbol>
    <symbol id="word_D" viewbox="0 0 16 16">
        <path d="M7,5 H5.5 V11 H7 A4,3,0,0,0,7,5" fill="none" stroke="rgba(192,192,192,0.75)" stroke-width="6%" />
    </symbol>
    <symbol id="word_E" viewbox="0 0 16 16">
        <path d="M11,5 H6 V11 H11 M6,8 H10" fill="none" stroke="rgba(192,192,192,0.75)" stroke-width="6%" />
    </symbol>

    <symbol id="port_N" viewbox="0 0 32 32">
        <title>中立ポート</title>
        <path d="M16,3 A13,13,0,0,0,16,29 A13,13,0,0,0,16,3" fill="rgb(128,128,128)" stroke="rgb(192,192,192)" stroke-width="20%" />
    </symbol>
     <symbol id="port_A" viewbox="0 0 32 32">
        <title>味方ポート</title>
        <path d="M16,3 A13,13,0,0,0,16,29 A13,13,0,0,0,16,3" fill="rgb(14,74,134)" stroke="rgb(192,192,192)" stroke-width="20%" />
    </symbol>
     <symbol id="port_E" viewbox="0 0 32 32">
        <title>敵ポート</title>
        <path d="M16,3 A13,13,0,0,0,16,29 A13,13,0,0,0,16,3" fill="rgb(193,41,51)" stroke="rgb(192,192,192)" stroke-width="20%"/>
    </symbol>
    <symbol id="port100_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port100_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port90_A" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,1,16,3" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-36,16,16)" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port90_E" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(36,16,16)" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port80_A" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,1,16,3" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-72,16,16)" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port80_E" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(72,16,16)" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port70_A" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,1,16,3" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-108,16,16)" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port70_E" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(108,16,16)" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port60_A" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,1,16,3" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-144,16,16)" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port60_E" viewbox="0 0 32 32">
        <path d="M16,29 A13,13,0,0,0,16,3" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(144,16,16)" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port50_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
    </symbol>
    <symbol id="port50_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
    </symbol>
    <symbol id="port40_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(144,16,16)" />
    </symbol>
    <symbol id="port40_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-144,16,16)" />
    </symbol>
    <symbol id="port30_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(108,16,16)" />
    </symbol>
    <symbol id="port30_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-108,16,16)" />
    </symbol>
    <symbol id="port20_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(72,16,16)" />
    </symbol>
    <symbol id="port20_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-72,16,16)" />
    </symbol>
    <symbol id="port10_A" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(102,151,187)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,1,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(36,16,16)" />
    </symbol>
    <symbol id="port10_E" viewbox="0 0 32 32">
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(248,170,174)" stroke-width="20%" />
        <path d="M16,3 A13,13,0,0,0,16,29" fill="none" stroke="rgb(192,192,192)" stroke-width="20%" transform="rotate(-36,16,16)" />
    </symbol>

    <symbol id="tower_A" viewBox="0 0 16 16">
        <title>味方タワー</title>
        <path d="M1,1 L1,10 6,15 10,15 15,10 15,1 Z" fill="rgb(14,74,134)" stroke="rgb(102,151,187)" stroke-width="7%" />
    </symbol>
    <symbol id="tower_E" viewBox="0 0 16 16">
        <title>敵タワー</title>
        <path d="M1,1 L1,10 6,15 10,15 15,10 15,1 Z" fill="rgb(193,41,51)" stroke="rgb(248,170,174)" stroke-width="7%" />
    </symbol>

    <symbol id="assault_A" viewbox="0 0 16 16">
        <title>味方アサルト</title>
        <path d="M15,11 L12,11 6,10 1,8 6,6 12,5 15,5 15,11 12,5" fill="rgb(14,74,134)" stroke="rgb(66,190,243)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="vanguard_A" viewBox="0 0 16 16">
        <title>味方ヴァンガード</title>
        <path d="M11,2 L14,2 14,14 4,14 2,12 2,4 4,2 11,2 11,14" fill="rgb(14,74,134)" stroke="rgb(66,190,243)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="support_A" viewBox="0 0 16 16">
        <title>味方サポート</title>
        <path d="M14,3 L13,8 A5,6,0,0,0,3,8 A2,3,0,0,0,7,8 A2,3,0,0,0,3,8 A5,6,0,0,0,13,8 L14,13 13,8" fill="rgb(14,74,134)" stroke="rgb(66,190,243)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="assault_E" viewbox="0 0 16 16">
        <title>敵アサルト</title>
        <path d="M15,11 L12,11 6,10 1,8 6,6 12,5 15,5 15,11 12,5" fill="rgb(193,41,51)" stroke="rgb(255,136,133)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="vanguard_E" viewBox="0 0 16 16">
        <title>敵ヴァンガード</title>
        <path d="M11,2 L14,2 14,14 4,14 2,12 2,4 4,2 11,2 11,14" fill="rgb(193,41,51)" stroke="rgb(255,136,133)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="support_E" viewBox="0 0 16 16">
        <title>敵サポート</title>
        <path d="M14,3 L13,8 A5,6,0,0,0,3,8 A2,3,0,0,0,7,8 A2,3,0,0,0,3,8 A5,6,0,0,0,13,8 L14,13 13,8" fill="rgb(193,41,51)" stroke="rgb(255,136,133)" stroke-width="7%" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="core_A" viewBox="0 0 16 16">
        <title>味方コア</title>
        <path d="M8,2 L2,8 8,14 14,8" fill="rgb(104,114,255)" />
    </symbol>
    <symbol id="core_E" viewBox="0 0 16 16">
        <title>敵コア</title>
        <path d="M8,2 L2,8 8,14 14,8" fill="rgb(255,104,114)" />
    </symbol>
    <symbol id="barrier" viewBox="0 0 16 16">
        <title>コアバリア</title>    
        <path d="M0,8 A8,8,0,0,0,16,8 A8,8,0,0,0,0,8" fill="rgba(192,192,64,0.5)" />
    </symbol>

    <symbol id="arrow" viewBox="0 0 16 8">
        <title>矢印</title>
        <path d="M0,4 l2,-4 v12 -12 l2,4 2,-4 v12 -12 l2,4 2,-4 v12 -12 l2,4 2,-4 v12 -12 l2,4" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
    </symbol>
    <symbol id="upper" viewBox="0 0 64 16">
        <title>上位</title>
        <path d="M8,2 v12 M18,2 h12 v6 h-12 v6 h12 M34,2 h12 v12 h-12 m0,-6 h12 M50,2 v6 h12 m0,-6 v12" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
    </symbol>
    <symbol id="lower" viewBox="0 0 64 16">
        <title>下位</title>
        <path d="M14,2 h-12 v6 h12 v6 h-12 M30,2 h-12 v12 h12 v-6 h-12 M34,8 v-6 h12 v12 M50,2 v12 h12 v-12 h-12 m0,6 h12" fill="none" stroke="rgb(0,0,0)" stroke-width="2%" />
    </symbol>

    <symbol id="airgrande" viewBox="0 0 16 16">
        <title>味方エア・グランデ</title>
        <g id="airgrande_base_A">
            <path d="M8,2 L4,12 8,16 12,12" fill="rgb(12,122,211)" />
        </g>
        <g id="airgrande_edge_A">
            <path d="M4,12 L8,2 12,12" fill="none" stroke="rgb(177,212,218)" stroke-width="7%" />
        </g>
    </symbol>
    <symbol id="airgrande" viewBox="0 0 16 16">
        <title>敵エア・グランデ</title>
        <g id="airgrande_base_E">
            <path d="M8,2 L4,12 8,16 12,12" fill="rgb(211,12,122)" />
        </g>
        <g id="airgrande_edge_E">
            <path d="M4,12 L8,2 12,12" fill="none" stroke="rgb(218,177,212)" stroke-width="7%" />
        </g>
    </symbol>
    <symbol id="airgrande_arrow_A" viewBox="0 0 16 16">
        <title>味方エア・グランデの軌跡</title>
        <path d="M8,0 L0,8 h4 v8 h8 v-8 h4 Z" fill="rgb(82,152,214)" />
    </symbol>
    <symbol id="airgrande_arrow_E" viewBox="0 0 16 16">
        <title>敵エア・グランデの軌跡</title>
        <path d="M8,0 L0,8 h4 v8 h8 v-8 h4 Z" fill="rgb(214,82,152)" />
    </symbol>

    <symbol id="daichi" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>台地</title>
        <path d="M17,1 L15,2 13,3 11,5 9,7 8,8 V24 L8,24 9,25 11,27 13,29 15,30 17,31 19,30 22,27 23,24 V8 L23,8 22,5 19,2 Z" fill="rgb(30,43,30)" stroke="rgb(79,129,103)" stroke-width="2%" />
    </symbol>
</svg>

<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 V256 H256 V0 Z" fill="rgba(0,0,0,0)" stroke="black" />
    <use xlink:href="#daichi" x="0" y="0" width="256" height="256" />

    <use xlink:href="#core_A" x="125" y="220" width="24" height="24" />
    <use xlink:href="#barrier" x="125" y="220" width="24" height="24" />
    <use xlink:href="#core_E" x="125" y="12" width="24" height="24" />

    <use xlink:href="#port_N" x="152" y="77" width="24" height="24" />
    <use xlink:href="#port30_A" x="152" y="77" width="24" height="24" />
    <use xlink:href="#word_A" x="152" y="77" width="24" height="24" />
    <use xlink:href="#port_A" x="82" y="77" width="24" height="24" />
    <use xlink:href="#port100_A" x="82" y="77" width="24" height="24" />
    <use xlink:href="#word_B" x="82" y="77" width="24" height="24" />
    <use xlink:href="#port_E" x="105" y="118" width="24" height="24" />
    <use xlink:href="#port70_E" x="105" y="118" width="24" height="24" />
    <use xlink:href="#word_C" x="105" y="118" width="24" height="24" />
    <use xlink:href="#port_A" x="152" y="157" width="24" height="24" />
    <use xlink:href="#port80_A" x="152" y="157" width="24" height="24" />
    <use xlink:href="#word_D" x="152" y="157" width="24" height="24" />
    <use xlink:href="#port_A" x="82" y="157" width="24" height="24" />
    <use xlink:href="#port10_A" x="82" y="157" width="24" height="24" />
    <use xlink:href="#word_E" x="82" y="157" width="24" height="24" />

    <use xlink:href="#tower_A" x="161" y="174" width="12" height="12" />
    <use xlink:href="#word_C" x="161" y="174" width="12" height="12" />
    <use xlink:href="#tower_A" x="80" y="178" width="12" height="12" />
    <use xlink:href="#word_D" x="80" y="178" width="12" height="12" />
    <use xlink:href="#tower_E" x="80" y="65" width="12" height="12" />
    <use xlink:href="#word_A" x="80" y="65" width="12" height="12" />
    <use xlink:href="#tower_E" x="162" y="72" width="12" height="12" />
    <use xlink:href="#word_B" x="162" y="72" width="12" height="12" />
</svg>
</svg>
<!--
<svg width="384px" height="64px" viewBox="0 0 96 16" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href="#assault_A" x="0" y="0" width="16" height="16" />
    <use xlink:href="#vanguard_A" x="16" y="0" width="16" height="16" />
    <use xlink:href="#support_A" x="32" y="0" width="16" height="16" />
    <use xlink:href="#assault_E" x="48" y="0" width="16" height="16" />
    <use xlink:href="#vanguard_E" x="64" y="0" width="16" height="16" />
    <use xlink:href="#support_E" x="80" y="0" width="16" height="16" />
</svg>
<svg width="128px" height="64px" viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href="#arrow" x="0" y="0" width="16" height="8" />
    <use xlink:href="#upper" x="0" y="8" width="16" height="8" />
    <use xlink:href="#arrow" x="16" y="0" width="16" height="8" />
    <use xlink:href="#lower" x="16" y="8" width="16" height="8" />
</svg>
<svg width="128px" height="128px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <use xlink:href="#airgrande_base_A" x="0" y="16" width="16" height="16" />
    <use xlink:href="#airgrande_edge_A" x="0" y="16" width="16" height="16" />
    <use xlink:href="#airgrande_arrow_A" x="0" y="0" width="16" height="16" />
    <use xlink:href="#airgrande_base_E" x="16" y="16" width="16" height="16" />
    <use xlink:href="#airgrande_edge_E" x="16" y="16" width="16" height="16" />
    <use xlink:href="#airgrande_arrow_E" x="16" y="0" width="16" height="16" />
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

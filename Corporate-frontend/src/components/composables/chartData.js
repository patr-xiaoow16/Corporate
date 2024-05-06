// 杜邦分析数据
export const data = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '1.92%',
    children: [{
        id: 'child-a',
        label: '资产净利率',
        subLabel: '6.00%',
        children: [{
            id: 'child-a-a',
            label: '销售净利率',
            subLabel: '9.18%',
            children: [{
                id: 'child-a-a-a',
                label: '净利润',
                subLabel: '3,695,435,858',
                children: [{
                    id: 'child-a-a-a-a',
                    label: '营业利润',
                    subLabel: '4,141,144,503',
                }, {
                    id: 'child-a-a-a-b',
                    label: '营业外支出',
                    subLabel: '-7,182,893',
                }, {
                    id: 'child-a-a-a-c',
                    label: '所得税',
                    subLabel: '438,525,752',
                }]
            }, {
                id: 'child-a-a-b',
                label: '营业总收入',
                subLabel: '40,257,239,155',
            }]
        }, {
            id: 'child-a-b',
            label: '资产周转率',
            subLabel: '65.32%',
            children: [{
                id: 'child-a-b-a',
                label: '营业总收入',
                subLabel: '40,257,239,155',
            }, {
                id: 'child-a-b-b',
                label: '总资产',
                subLabel: '61,626,211,527',
                children: [{
                    id: 'child-a-b-b-a',
                    label: '流动资产',
                    subLabel: '51,993,725,437',
                }, {
                    id: 'child-a-b-b-b',
                    label: '非流动资产',
                    subLabel: '9,632,486,090',
                }]
            }]
        }
        ]
    }, {
        id: 'child-b',
        label: '权益乘数',
        subLabel: '32.03%',
        children: [{
            id: 'child-b-a',
            label: '股东权益',
            subLabel: ' ',
        }, {
            id: 'child-b-b',
            label: '总资产',
            subLabel: '61,626,211,527',
        }]
    }
    ]
};


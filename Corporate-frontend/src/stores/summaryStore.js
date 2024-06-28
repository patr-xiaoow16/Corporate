import { defineStore } from 'pinia';

export const data2022 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '18.6%',
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
                    label: '营业外收支',
                    subLabel: '-7,182,893',
                }, {
                    id: 'child-a-a-a-c',
                    label: '所得税费用',
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
        subLabel: '3.1223704976063242',
        children: [{
            id: 'child-b-a',
            label: '股东权益',
            subLabel: '19736995201.0',
        }, {
            id: 'child-b-b',
            label: '总资产',
            subLabel: '61,626,211,527',
        }]
    }
    ]
};

export const data2021 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '10.0%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '3.98%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '7.06%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '1,703,994,571',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '1,897,577,353'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '-4,905,217'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '188,677,565'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '24,136,598,727'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '56.34%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '24,136,598,727'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '42,840,130,915',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '36,307,432,822'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '6,532,698,094'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.5647124417346343',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '16703678049.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '42,840,130,915'
                }
            ]
        }
    ]
}

export const data2020 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '17.5%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '7.05%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '10.24%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '1,975,515,329',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '2,168,341,287'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '13,200,597'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '206,026,556'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '19,285,641,347'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '68.87%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '19,285,641,347'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '28,002,933,995',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '23,253,041,619'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '4,749,892,376'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.5774242667417426',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '10864697115.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '28,002,933,995'
                }
            ]
        }
    ]
};

export const data2019 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '10.0%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '3.99%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '7.01%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '911,526,332',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '1,047,816,873'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '-16,114,219'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '120,176,322'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '13,003,331,784'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '56.98%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '13,003,331,784'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '22,819,128,262',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '18,429,304,933'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '4,389,823,329'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.6064672066574786',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '8754811188.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '22,819,128,262'
                }
            ]
        }
    ]
};

export const data2018 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '10.1%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '4.42%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '7.88%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '817,291,292',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '912,426,356'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '10,213,655'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '105,348,720'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '10,368,931,999'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '56.07%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '10,368,931,999'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '18,492,650,082',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '14,465,023,175'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '4,027,626,907'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.372426781982076',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '7794824364.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '18,492,650,082'
                }
            ]
        }
    ]
};

export const data2017 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '13.9%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '6.24%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '11.41%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '1,014,320,332',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '1,145,291,896'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '16,488,840'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '147,460,405'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '8,886,060,069'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '54.69%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '8,886,060,069'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '16,248,005,973',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '13,171,977,300'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '3,076,028,672'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.3135008442425375',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '7023125154.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '16,248,005,973'
                }
            ]
        }
    ]
};

export const data2016 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '7.2%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '4.69%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '9.10%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '546,129,904',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '613,286,548'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '54,849,162'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '122,005,806'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '6,003,662,456'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '51.50%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '6,003,662,456'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '11,656,799,147',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '9,350,293,472'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '2,306,505,675'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '1.9546369420619019',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '5963664605.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '11,656,799,147'
                }
            ]
        }
    ]
};

export const data2015 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '11.0%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '6.28%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '9.33%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '426,110,848',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '443,563,765'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '48,946,385'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '66,399,301'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '4,569,247,183'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '67.36%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '4,569,247,183'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '6,783,116,580',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '5,626,922,704'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '1,156,193,876'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.391973160983487',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '2835782897.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '6,783,116,580'
                }
            ]
        }
    ]
};

export const data2014 = {
    id: 'root',
    label: '净资产收益率',
    subLabel: '8.0%',
    children: [
        {
            id: 'child-a',
            label: '资产净利率',
            subLabel: '5.81%',
            children: [
                {
                    id: 'child-a-a',
                    label: '销售净利率',
                    subLabel: '9.25%',
                    children: [
                        {
                            id: 'child-a-a-a',
                            label: '净利润',
                            subLabel: '283,286,523',
                            children: [
                                {
                                    id: 'child-a-a-a-a',
                                    label: '营业利润',
                                    subLabel: '278,788,488'
                                },
                                {
                                    id: 'child-a-a-a-b',
                                    label: '营业外收支',
                                    subLabel: '46,869,895'
                                },
                                {
                                    id: 'child-a-a-a-c',
                                    label: '所得税费用',
                                    subLabel: '42,371,860'
                                }
                            ]
                        },
                        {
                            id: 'child-a-a-b',
                            label: '营业总收入',
                            subLabel: '3,062,247,399'
                        }
                    ]
                },
                {
                    id: 'child-a-b',
                    label: '资产周转率',
                    subLabel: '62.76%',
                    children: [
                        {
                            id: 'child-a-b-a',
                            label: '营业总收入',
                            subLabel: '3,062,247,399'
                        },
                        {
                            id: 'child-a-b-b',
                            label: '总资产',
                            subLabel: '4,879,350,944',
                            children: [
                                {
                                    id: 'child-a-b-b-a',
                                    label: '流动资产',
                                    subLabel: '4,432,848,117'
                                },
                                {
                                    id: 'child-a-b-b-b',
                                    label: '非流动资产',
                                    subLabel: '446,502,826'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'child-b',
            label: '权益乘数',
            subLabel: '2.0618327931912215',
            children: [
                {
                    id: 'child-b-a',
                    label: '股东权益',
                    subLabel: '2366511465.0',
                },
                {
                    id: 'child-b-b',
                    label: '总资产',
                    subLabel: '4,879,350,944'
                }
            ]
        }
    ]
}
export const useSummaryStore = defineStore('summaryStore', {
    state: () => ({
        chartData: {
            2014: data2014,
            2015: data2015,
            2016: data2016,
            2017: data2017,
            2018: data2018,
            2019: data2019,
            2020: data2020,
            2021: data2021,
            2022: data2022
        },
        selectedYear: 2022
    }),
    actions: {
        updateSelectedYear(year) {
            // 检查该年份是否存在于已知数据中
            if (Object.keys(this.chartData).includes(year)) {
                this.selectedYear = year;  // 更新当前选择的年份
                console.log("Selected year updated to:", year);
            } else {
                console.error("Attempted to select an unavailable year:", year);
                // 这里可以处理错误情况，例如提示用户或回退到默认年份
            }
        }
    }
});



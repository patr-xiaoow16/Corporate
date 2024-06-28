export const getNodeConfig = (label) => {
    const configs = {
        '非流动资产': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 非流动资产 over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "非流动资产",
                        "值": 9632486090.0
                    },
                    {
                        "年份": "2021",
                        "标签": "非流动资产",
                        "值": 6532698094.0
                    },
                    {
                        "年份": "2020",
                        "标签": "非流动资产",
                        "值": 4749892376.0
                    },
                    {
                        "年份": "2019",
                        "标签": "非流动资产",
                        "值": 4389823329.0
                    },
                    {
                        "年份": "2018",
                        "标签": "非流动资产",
                        "值": 4027626907.0
                    },
                    {
                        "年份": "2017",
                        "标签": "非流动资产",
                        "值": 3076028672.0
                    },
                    {
                        "年份": "2016",
                        "标签": "非流动资产",
                        "值": 2306505675.0
                    },
                    {
                        "年份": "2015",
                        "标签": "非流动资产",
                        "值": 1156193876.0
                    },
                    {
                        "年份": "2014",
                        "标签": "非流动资产",
                        "值": 446502826.3
                    }
                ]
            },
            "mark": {
                "type": "line",
                "point": {
                    "filled": false,
                    "fill": "white",
                    "stroke": "steelblue",
                    "strokeWidth": 1,
                    "size": 30
                },
                "color": "steelblue"
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份"
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "非流动资产的值 (元)"
                },
                "tooltip": [
                    {
                        "field": "年份",
                        "type": "ordinal",
                        "title": "年份"
                    },
                    {
                        "field": "值",
                        "type": "quantitative",
                        "title": "非流动资产的值 (元)",
                        "format": ",.0f"
                    }
                ]
            },
            "selection": {
                "brush": {
                    "type": "interval",
                    "encodings": ["x"]
                }
            },
            "transform": [
                {
                    "filter": {
                        "selection": "brush"
                    }
                }
            ],
            "insights": [
                { "year": 2014, "describe": "非流动资产最少，为 446,502,826.3 元" },
                { "year": 2022, "describe": "非流动资产最多，为 9,632,486,090.0 元" },
                { "year": 2015, "describe": "非流动资产波动最大，从2014年的 446,502,826.3 元增加到 1,156,193,876.0 元，增长率约为 159%" }
            ]
        },
        '净利润': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "公司财务表现：净利润、营业利润、营业外收支和所得税",
            "data": {
                "values": [
                    { "Date": "2014", "series": "净利润", "value": 283286523.03 },
                    { "Date": "2014", "series": "营业利润", "value": 278788487.5 },
                    { "Date": "2014", "series": "营业外收支", "value": 46869895.06 },
                    { "Date": "2014", "series": "所得税", "value": 42371859.53 },
                    { "Date": "2015", "series": "净利润", "value": 426110848.49 },
                    { "Date": "2015", "series": "营业利润", "value": 443563764.8 },
                    { "Date": "2015", "series": "营业外收支", "value": 48946384.64 },
                    { "Date": "2015", "series": "所得税", "value": 66399300.95 },
                    { "Date": "2016", "series": "净利润", "value": 546129904.26 },
                    { "Date": "2016", "series": "营业利润", "value": 613286547.9 },
                    { "Date": "2016", "series": "营业外收支", "value": 54849162.06 },
                    { "Date": "2016", "series": "所得税", "value": 122005805.7 },
                    { "Date": "2017", "series": "净利润", "value": 1014320331.56 },
                    { "Date": "2017", "series": "营业利润", "value": 1145291896 },
                    { "Date": "2017", "series": "营业外收支", "value": 16488840.46 },
                    { "Date": "2017", "series": "所得税", "value": 147460404.9 },
                    { "Date": "2018", "series": "净利润", "value": 817291291.59 },
                    { "Date": "2018", "series": "营业利润", "value": 912426356.4 },
                    { "Date": "2018", "series": "营业外收支", "value": 10213655.49 },
                    { "Date": "2018", "series": "所得税", "value": 105348720.3 },
                    { "Date": "2019", "series": "净利润", "value": 911526331.73 },
                    { "Date": "2019", "series": "营业利润", "value": 1047816873 },
                    { "Date": "2019", "series": "营业外收支", "value": -16114218.87 },
                    { "Date": "2019", "series": "所得税", "value": 120176322.4 },
                    { "Date": "2020", "series": "净利润", "value": 1975515328.56 },
                    { "Date": "2020", "series": "营业利润", "value": 2168341287 },
                    { "Date": "2020", "series": "营业外收支", "value": 13200597.46 },
                    { "Date": "2020", "series": "所得税", "value": 206026555.9 },
                    { "Date": "2021", "series": "净利润", "value": 1703994570.57 },
                    { "Date": "2021", "series": "营业利润", "value": 1897577353 },
                    { "Date": "2021", "series": "营业外收支", "value": -4905217.13 },
                    { "Date": "2021", "series": "所得税", "value": 188677565.3 },
                    { "Date": "2022", "series": "净利润", "value": 3695435858.45 },
                    { "Date": "2022", "series": "营业利润", "value": 4141144503 },
                    { "Date": "2022", "series": "营业外收支", "value": -7182892.85 },
                    { "Date": "2022", "series": "所得税", "value": 438525751.7 }
                ]
            },
            "transform": [
                {
                    "filter": "datum.series == '净利润' || datum.series == '营业利润' || datum.series == '营业外收支' || datum.series == '所得税'"
                }
            ],
            "encoding": {
                "x": {
                    "field": "Date",
                    "type": "ordinal",
                    "title": "年份"
                },
                "tooltip": [
                    { "field": "Date", "type": "ordinal", "title": "年份" },
                    { "field": "series", "type": "nominal", "title": "指标" },
                    { "field": "value", "type": "quantitative", "title": "金额", "format": ".2f" }
                ]
            },
            "layer": [
                {
                    "mark": "line",
                    "encoding": {
                        "y": {
                            "field": "value",
                            "type": "quantitative",
                            "title": "金额 (万元)",
                            "scale": { "zero": false }
                        },
                        "color": {
                            "field": "series",
                            "type": "nominal",
                            "title": "财务指标",
                            "scale": {
                                "domain": ["净利润", "营业利润", "营业外收支", "所得税"],
                                "range": ["#ff7f0e", "#AAC9FC", "#C1EEB2", "#C5BDFD"]
                            }
                        }
                    }
                },
                {
                    "mark": {
                        "type": "line",
                        "point": {
                            "filled": false,
                            "fill": "white",
                            "stroke": "lightgrey",
                            "strokeWidth": 1,
                            "size": 5
                        }
                    },
                    "encoding": {
                        "y": {
                            "field": "value",
                            "type": "quantitative",
                            "axis": {
                                "format": "s"
                            }
                        },
                        "color": {
                            "field": "series",
                            "type": "nominal"
                        }
                    }
                }
            ],
            "config": {
                "axisY": {
                    "labelColor": "#666",
                    "titleColor": "#666"
                }
            },
            "insights": [
                { "year": 2014, "describe": "净利润最少，为 283,286,523.03 元" },
                { "year": 2022, "describe": "净利润最多，为 3,695,435,858.45 元" },
                { "year": 2022, "describe": "净利润波动最大，从2021年的 1,703,994,570.57 增长到 3,695,435,858.45 元，增长率约为 116.9%" }
            ]
        },
        '净资产收益率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 净资产收益率 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "值": 0.18630615197108094
                    },
                    {
                        "年份": "2021",
                        "值": 0.0999633677176844
                    },
                    {
                        "年份": "2020",
                        "值": 0.17527114746999553
                    },
                    {
                        "年份": "2019",
                        "值": 0.10020006090964027
                    },
                    {
                        "年份": "2018",
                        "值": 0.1011475168717477
                    },
                    {
                        "年份": "2017",
                        "值": 0.13851752931469977
                    },
                    {
                        "年份": "2016",
                        "值": 0.07235993561042992
                    },
                    {
                        "年份": "2015",
                        "值": 0.11040697269922212
                    },
                    {
                        "年份": "2014",
                        "值": 0.07983712423298991
                    }
                ]
            },
            "mark": {
                "type": "area",
                "line": {
                    "color": "darkblue"
                },
                "color": {
                    "x1": 1,
                    "y1": 1,
                    "x2": 1,
                    "y2": 0,
                    "gradient": "linear",
                    "stops": [
                        {
                            "offset": 0,
                            "color": "skyblue"
                        },
                        {
                            "offset": 1,
                            "color": "blue"
                        }
                    ]
                },
                "point": {
                    "filled": false,
                    "fill": "white"
                },
                "interpolate": "monotone"
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelAngle": 0
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "净资产收益率",
                    "axis": {
                        "format": ".2%"
                    }
                },
                "tooltip": [
                    {
                        "field": "年份",
                        "type": "nominal",
                        "title": "年份"
                    },
                    {
                        "field": "值",
                        "type": "quantitative",
                        "title": "净资产收益率",
                        "format": ".2%"
                    }
                ]
            },
            "insights": [
                { "year": 2016, "describe": "净资产收益率最少，为 0.0724" },
                { "year": 2022, "describe": "净资产收益率最多，为 0.1863" },
                { "year": 2020, "describe": "净资产收益率波动最大，从2019年的 0.1002 增加到 0.1753，增长率约为 74.9%" }
            ]
        },
        '流动资产': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "流动资产",
                        "值": 51993725437.0
                    },
                    {
                        "年份": "2021",
                        "标签": "流动资产",
                        "值": 36307432822.0
                    },
                    {
                        "年份": "2020",
                        "标签": "流动资产",
                        "值": 23253041619.0
                    },
                    {
                        "年份": "2019",
                        "标签": "流动资产",
                        "值": 18429304933.0
                    },
                    {
                        "年份": "2018",
                        "标签": "流动资产",
                        "值": 14465023175.0
                    },
                    {
                        "年份": "2017",
                        "标签": "流动资产",
                        "值": 13171977300.0
                    },
                    {
                        "年份": "2016",
                        "标签": "流动资产",
                        "值": 9350293472.0
                    },
                    {
                        "年份": "2015",
                        "标签": "流动资产",
                        "值": 5626922704.0
                    },
                    {
                        "年份": "2014",
                        "标签": "流动资产",
                        "值": 4432848117.0
                    }
                ]
            },
            "mark": {
                "type": "line",
                "point": {
                    "filled": false,
                    "fill": "white",
                    "stroke": "steelblue",
                    "strokeWidth": 1,
                    "size": 30
                },
                "color": "steelblue"
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份"
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "流动资产的值 (元)"
                },
                "tooltip": [
                    {
                        "field": "年份",
                        "type": "ordinal",
                        "title": "年份"
                    },
                    {
                        "field": "值",
                        "type": "quantitative",
                        "title": "流动资产的值 (元)",
                        "format": ",.0f"
                    }
                ]
            },
            "selection": {
                "brush": { "type": "interval", "encodings": ["x"] }
            },
            "transform": [
                {
                    "filter": { "selection": "brush" }
                }
            ],
            "insights": [
                { "year": 2014, "describe": "流动资产最少，为 4,432,848,117 元" },
                { "year": 2022, "describe": "流动资产最多，为 51,993,725,437 元" },
                { "year": 2021, "describe": "流动资产波动最大，从2020年的 23,253,041,619 元增加到 36,307,432,822 元，增长率约为 56%" }
            ]
        },
        '权益乘数': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A visually enhanced bar chart displaying values over the years with an interactive brush and detailed tooltips.",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "值": 3.1223704976063242 },
                    { "年份": "2021", "值": 2.5647124417346343 },
                    { "年份": "2020", "值": 2.5774242667417426 },
                    { "年份": "2019", "值": 2.6064672066574786 },
                    { "年份": "2018", "值": 2.372426781982076 },
                    { "年份": "2017", "值": 2.3135008442425375 },
                    { "年份": "2016", "值": 1.9546369420619019 },
                    { "年份": "2015", "值": 2.391973160983487 },
                    { "年份": "2014", "值": 2.0618327931912215 }
                ]
            },
            "mark": "bar",
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelAngle": 0,
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "权益乘数",
                    "axis": {
                        "format": ".2f",
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "权益乘数", "format": ".2f" }
                ],
                "color": {
                    "field": "值",
                    "type": "quantitative",
                    "scale": {
                        "scheme": "blues"
                    },
                    "legend": {
                        "title": "数值",
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                }
            },
            "selection": {
                "brush": {
                    "type": "interval",
                    "encodings": ["x"],
                    "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
                    "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
                    "zoom": "wheel![event.shiftKey]"
                }
            },
            "insights": [
                { "year": 2016, "describe": "权益乘数最少，为 1.9546" },
                { "year": 2022, "describe": "权益乘数最多，为 3.1224" },
                { "year": 2016, "describe": "权益乘数波动最大，从2016年的 1.9546 增加到2017年的 2.3135，增长率约为 18.34%" }
            ]
        },
        '所得税费用': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 营业利润 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "所得税",
                        "值": 438525751.7
                    },
                    {
                        "年份": "2021",
                        "标签": "所得税",
                        "值": 188677565.3
                    },
                    {
                        "年份": "2020",
                        "标签": "所得税",
                        "值": 206026555.9
                    },
                    {
                        "年份": "2019",
                        "标签": "所得税",
                        "值": 120176322.4
                    },
                    {
                        "年份": "2018",
                        "标签": "所得税",
                        "值": 105348720.3
                    },
                    {
                        "年份": "2017",
                        "标签": "所得税",
                        "值": 147460404.9
                    },
                    {
                        "年份": "2016",
                        "标签": "所得税",
                        "值": 122005805.7
                    },
                    {
                        "年份": "2015",
                        "标签": "所得税",
                        "值": 66399300.95
                    },
                    {
                        "年份": "2014",
                        "标签": "所得税",
                        "值": 42371859.53
                    }
                ]
            },
            "selection": {
                "highlight": {
                    "type": "single",
                    "fields": ["年份"],
                    "bind": "legend",
                    "empty": "none",
                    "on": "click"
                }
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelOverlap": "parity"
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "所得税费用的值 (元)",
                    "axis": {
                        "format": "s"
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "所得税费用", "format": ",.2f" }
                ],
                "color": {
                    "condition": {
                        "selection": "highlight",
                        "value": "#9689FC"
                    },
                    "value": "#C5BDFD"
                }
            },
            "mark": {
                "type": "bar",
                "cursor": "pointer"
            },
            "insights": [
                { "year": 2014, "describe": "所得税费用最少，为 42,371,859.53 元" },
                { "year": 2022, "describe": "所得税费用最多，为 438,525,751.7 元" },
                { "year": 2021, "describe": "所得税费用波动最大，从2020年的 206,026,555.9 元增加到 188,677,565.3 元，增长率约为 -8.42%" }
            ]
        },
        '销售净利率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A visually enhanced bar chart displaying values over the years with an interactive brush and detailed tooltips.",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "标签": "销售净利率", "值": 0.09179556114669683 },
                    { "年份": "2021", "标签": "销售净利率", "值": 0.0705979574770763 },
                    { "年份": "2020", "标签": "销售净利率", "值": 0.10243451555565215 },
                    { "年份": "2019", "标签": "销售净利率", "值": 0.070099444271013 },
                    { "年份": "2018", "标签": "销售净利率", "值": 0.07882116419210977 },
                    { "年份": "2017", "标签": "销售净利率", "值": 0.11414736381296457 },
                    { "年份": "2016", "标签": "销售净利率", "值": 0.09096612413880852 },
                    { "年份": "2015", "标签": "销售净利率", "值": 0.09325624800412555 },
                    { "年份": "2014", "标签": "销售净利率", "值": 0.09250935215832311 }
                ]
            },
            "mark": "bar",
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelAngle": 0,
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "销售净利率",
                    "axis": {
                        "format": ".2f",
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "销售净利率", "format": ".4f" }
                ],
                "color": {
                    "field": "值",
                    "type": "quantitative",
                    "scale": {
                        "scheme": "lightorange"
                    },
                    "legend": {
                        "title": "数值",
                        "labelFontSize": 12,
                        "titleFontSize": 14
                    }
                }
            },
            "selection": {
                "brush": {
                    "type": "interval",
                    "encodings": ["x"],
                    "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
                    "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
                    "zoom": "wheel![event.shiftKey]"
                }
            },
            "insights": [
                { "year": 2019, "describe": "销售净利率最少，为 0.0701" },
                { "year": 2017, "describe": "销售净利率最多，为 0.1141" },
                { "year": 2020, "describe": "销售净利率波动最大，从2019年的 0.0701 增加到 0.1024，增长率约为 46.1%" }
            ]
        },
        '营业利润': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 营业利润 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "标签": "营业利润", "值": 4141144503.0 },
                    { "年份": "2021", "标签": "营业利润", "值": 1897577353.0 },
                    { "年份": "2020", "标签": "营业利润", "值": 2168341287.0 },
                    { "年份": "2019", "标签": "营业利润", "值": 1047816873.0 },
                    { "年份": "2018", "标签": "营业利润", "值": 912426356.4 },
                    { "年份": "2017", "标签": "营业利润", "值": 1145291896.0 },
                    { "年份": "2016", "标签": "营业利润", "值": 613286547.9 },
                    { "年份": "2015", "标签": "营业利润", "值": 443563764.8 },
                    { "年份": "2014", "标签": "营业利润", "值": 278788487.5 }
                ]
            },
            "selection": {
                "highlight": {
                    "type": "single",
                    "fields": ["年份"],
                    "bind": "legend",
                    "empty": "none",
                    "on": "click"
                }
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelOverlap": "parity"
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "营业利润的值 (元)",
                    "axis": {
                        "format": "s"
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "营业利润", "format": ",.2f" }
                ],
                "color": {
                    "condition": {
                        "selection": "highlight",
                        "value": "steelblue"
                    },
                    "value": "#AAC9FC"
                }
            },
            "mark": {
                "type": "bar",
                "cursor": "pointer"
            },
            "insights": [
                { "year": 2014, "describe": "营业利润最少，为 278,788,487.5 元" },
                { "year": 2022, "describe": "营业利润最多，为 4,141,144,503 元" },
                { "year": 2021, "describe": "营业利润波动最大，从2020年的 2,168,341,287 元增加到 1,897,577,353 元，增长率约为 -12.5%" }
            ]
        },
        '营业外收入': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "营业外收入",
                        "值": 9156115.54
                    },
                    {
                        "年份": "2021",
                        "标签": "营业外收入",
                        "值": 17119329.76
                    },
                    {
                        "年份": "2020",
                        "标签": "营业外收入",
                        "值": 35623699.15
                    },
                    {
                        "年份": "2019",
                        "标签": "营业外收入",
                        "值": 17146858.72
                    },
                    {
                        "年份": "2018",
                        "标签": "营业外收入",
                        "值": 14432081.36
                    },
                    {
                        "年份": "2017",
                        "标签": "营业外收入",
                        "值": 20747193.58
                    },
                    {
                        "年份": "2016",
                        "标签": "营业外收入",
                        "值": 57299758.72
                    },
                    {
                        "年份": "2015",
                        "标签": "营业外收入",
                        "值": 56510321.8
                    },
                    {
                        "年份": "2014",
                        "标签": "营业外收入",
                        "值": 47175526.6
                    }
                ]
            },
            "mark": "line",
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": { "labelOverlap": "parity" }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "营业外收入的值",
                    "format": ".2%"
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "Year" },
                    { "field": "值", "type": "quantitative", "title": "Value", "format": ".2%" }
                ]
            },
            "selection": {
                "brush": { "type": "interval", "encodings": ["x"] }
            },
            "transform": [
                {
                    "filter": { "selection": "brush" }
                }
            ]
        },
        '营业外收支': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "年度非经营性收入及支出",
            "data": {
                "values": [
                    { "Date": "2014", "Non-operating Income/Expenses": 46869895.06 },
                    { "Date": "2015", "Non-operating Income/Expenses": 48946384.64 },
                    { "Date": "2016", "Non-operating Income/Expenses": 54849162.06 },
                    { "Date": "2017", "Non-operating Income/Expenses": 16488840.46 },
                    { "Date": "2018", "Non-operating Income/Expenses": 10213655.49 },
                    { "Date": "2019", "Non-operating Income/Expenses": -16114218.87 },
                    { "Date": "2020", "Non-operating Income/Expenses": 13200597.46 },
                    { "Date": "2021", "Non-operating Income/Expenses": -4905217.13 },
                    { "Date": "2022", "Non-operating Income/Expenses": -7182892.85 },
                ]
            },
            "mark": "bar",
            "width": "container",
            "height": "container",
            "encoding": {
                "x": {
                    "field": "Date",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelOverlap": "parity"
                    },
                    "band": 1.2 // 增加柱的宽度
                },
                "y": {
                    "field": "Non-operating Income/Expenses",
                    "type": "quantitative",
                    "title": "营业外收支(元)",
                    "axis": {
                        "format": "s"
                    }
                },
                "tooltip": [
                    { "field": "Date", "type": "ordinal", "title": "年份" },
                    { "field": "Non-operating Income/Expenses", "type": "quantitative", "title": "营业外收支" }
                ],
                "color": {
                    "condition": {
                        "test": "datum['Non-operating Income/Expenses'] >= 0",
                        "value": "#C1EEB2"
                    },
                    "value": "#E9A0D7"
                }
            },
            "config": {
                "axis": {
                    "labelFontSize": 10,
                    "titleFontSize": 12
                },
                "bar": {
                    "cornerRadiusTopLeft": 2,
                    "cornerRadiusTopRight": 2
                }
            },
            "insights": [
                { "year": 2021, "describe": "营业外收支最少，为 -4,905,217.13 元" },
                { "year": 2016, "describe": "营业外收支最多，为 54,849,162.06 元" },
                { "year": 2019, "describe": "营业外收支波动最大，从2018年的 10,213,655.49 元减少到 -16,114,218.87 元，增长率约为 -257.7%" }
            ]
        },
        '营业总收入': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 营业利润 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "标签": "营业总收入", "值": 40257239155.0 },
                    { "年份": "2021", "标签": "营业总收入", "值": 24136598727.0 },
                    { "年份": "2020", "标签": "营业总收入", "值": 19285641347.0 },
                    { "年份": "2019", "标签": "营业总收入", "值": 13003331784.0 },
                    { "年份": "2018", "标签": "营业总收入", "值": 10368931999.0 },
                    { "年份": "2017", "标签": "营业总收入", "值": 8886060069.0 },
                    { "年份": "2016", "标签": "营业总收入", "值": 6003662456.0 },
                    { "年份": "2015", "标签": "营业总收入", "值": 4569247183.0 },
                    { "年份": "2014", "标签": "营业总收入", "值": 3062247399.0 }
                ]
            },
            "selection": {
                "highlight": {
                    "type": "single",
                    "fields": ["年份"],
                    "bind": "legend",
                    "empty": "none",
                    "on": "click"
                }
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelOverlap": "parity"
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "营业总收入的值 (元)",
                    "axis": {
                        "format": "s"
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "营业总收入", "format": ",.2f" }
                ],
                "color": {
                    "condition": {
                        "selection": "highlight",
                        "value": "#E58ECF"
                    },
                    "value": "#F2C8E8"
                }
            },
            "mark": {
                "type": "bar",
                "cursor": "pointer"
            },
            "insights": [
                { "year": 2014, "describe": "营业总收入最少，为 3,062,247,399.0 元" },
                { "year": 2022, "describe": "营业总收入最多，为 40,257,239,155.0 元" },
                { "year": 2021, "describe": "营业总收入波动最大，从2020年的 19,285,641,347.0 元增加到 24,136,598,727.0 元，增长率约为 25.1%" }
            ]
        },
        '资产净利率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Stacked bar chart showing asset net profit rate, sales net profit rate, and asset turnover rate over the years.",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "Date": "2014", "series": "资产净利率", "value": 0.0581 },
                    { "Date": "2014", "series": "销售净利率", "value": 0.0925 },
                    { "Date": "2014", "series": "资产周转率", "value": 0.6276 },
                    { "Date": "2015", "series": "资产净利率", "value": 0.0628 },
                    { "Date": "2015", "series": "销售净利率", "value": 0.0933 },
                    { "Date": "2015", "series": "资产周转率", "value": 0.6736 },
                    { "Date": "2016", "series": "资产净利率", "value": 0.0469 },
                    { "Date": "2016", "series": "销售净利率", "value": 0.0910 },
                    { "Date": "2016", "series": "资产周转率", "value": 0.5150 },
                    { "Date": "2017", "series": "资产净利率", "value": 0.0624 },
                    { "Date": "2017", "series": "销售净利率", "value": 0.1141 },
                    { "Date": "2017", "series": "资产周转率", "value": 0.5469 },
                    { "Date": "2018", "series": "资产净利率", "value": 0.0442 },
                    { "Date": "2018", "series": "销售净利率", "value": 0.0788 },
                    { "Date": "2018", "series": "资产周转率", "value": 0.5607 },
                    { "Date": "2019", "series": "资产净利率", "value": 0.0399 },
                    { "Date": "2019", "series": "销售净利率", "value": 0.0701 },
                    { "Date": "2019", "series": "资产周转率", "value": 0.5698 },
                    { "Date": "2020", "series": "资产净利率", "value": 0.0705 },
                    { "Date": "2020", "series": "销售净利率", "value": 0.1024 },
                    { "Date": "2020", "series": "资产周转率", "value": 0.6887 },
                    { "Date": "2021", "series": "资产净利率", "value": 0.0398 },
                    { "Date": "2021", "series": "销售净利率", "value": 0.0706 },
                    { "Date": "2021", "series": "资产周转率", "value": 0.5634 },
                    { "Date": "2022", "series": "资产净利率", "value": 0.0600 },
                    { "Date": "2022", "series": "销售净利率", "value": 0.0918 },
                    { "Date": "2022", "series": "资产周转率", "value": 0.6532 },
                    { "Date": "2023", "series": "资产净利率", "value": 0.0361 },
                    { "Date": "2023", "series": "销售净利率", "value": 0.0533 },
                    { "Date": "2023", "series": "资产周转率", "value": 0.6767 }
                ]
            },
            "mark": "bar",
            "encoding": {
                "x": {
                    "field": "Date",
                    "type": "ordinal",
                    "title": "Year",
                    "axis": { "labelAngle": 0 }
                },
                "y": {
                    "field": "value",
                    "type": "quantitative",
                    "title": "Value",
                    "stack": "zero"
                },
                "color": {
                    "field": "series",
                    "type": "nominal",
                    "scale": { "domain": ["资产净利率", "销售净利率", "资产周转率"], "range": ["#D6ACF2", "#ACC8F2", "#EBF2AC"] },
                    "title": "Series"
                },
                "tooltip": [
                    { "field": "Date", "type": "ordinal", "title": "Year" },
                    { "field": "series", "type": "nominal", "title": "Indicator" },
                    { "field": "value", "type": "quantitative", "title": "Value", "format": ".4f" }
                ]
            },
            "insights": [
                { "year": 2019, "describe": "资产净利率最少，为 0.0399" },
                { "year": 2020, "describe": "资产净利率最多，为 0.0705" },
                { "year": 2020, "describe": "资产净利率波动最大，从2019年的 0.0399 增加到 0.0705，增长率约为 76.7%" }
            ]
        },
        '资产周转率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 股东权益 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "资产周转率",
                        "值": 0.6532486446511853
                    },
                    {
                        "年份": "2021",
                        "标签": "资产周转率",
                        "值": 0.5634109469667572
                    },
                    {
                        "年份": "2020",
                        "标签": "资产周转率",
                        "值": 0.6887007393740778
                    },
                    {
                        "年份": "2019",
                        "标签": "资产周转率",
                        "值": 0.5698434942255902
                    },
                    {
                        "年份": "2018",
                        "标签": "资产周转率",
                        "值": 0.5607055750810264
                    },
                    {
                        "年份": "2017",
                        "标签": "资产周转率",
                        "值": 0.5469015757235899
                    },
                    {
                        "年份": "2016",
                        "标签": "资产周转率",
                        "值": 0.5150352494102213
                    },
                    {
                        "年份": "2015",
                        "标签": "资产周转率",
                        "值": 0.673620618061086
                    },
                    {
                        "年份": "2014",
                        "标签": "资产周转率",
                        "值": 0.6275931848611052
                    }
                ]
            },
            "mark": {
                "type": "area",
                "line": {
                    "color": "red"
                },
                "color": {
                    "x1": 1,
                    "y1": 1,
                    "x2": 1,
                    "y2": 0,
                    "gradient": "linear",
                    "stops": [
                        { "offset": 0, "color": "#3075DE" },
                        { "offset": 1, "color": "#EAF1FC" }
                    ]
                },
                "point": {
                    "filled": true,
                    "fill": "gray"
                }
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelAngle": -45
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "资产周转率",
                    "axis": {
                        "format": ",.2f",
                        "grid": true
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "股东权益", "format": ",.2f" }
                ]
            },
            "insights": [
                { "year": 2016, "describe": "资产周转率最少，为 0.5150" },
                { "year": 2020, "describe": "资产周转率最多，为 0.6887" },
                { "year": 2020, "describe": "资产周转率波动最大，从2019年的 0.5698 增加到 0.6887，增长率约为 20.9%" }
            ]
        },
        '总资产': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of total, current, and non-current assets over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "类型": "流动资产", "值": 51993725437.0 },
                    { "年份": "2022", "类型": "非流动资产", "值": 9632486090.0 },
                    { "年份": "2022", "类型": "总资产", "值": 61626211527.0 },
                    { "年份": "2021", "类型": "流动资产", "值": 36307432822.0 },
                    { "年份": "2021", "类型": "非流动资产", "值": 6532698094.0 },
                    { "年份": "2021", "类型": "总资产", "值": 42840130915.0 },
                    { "年份": "2020", "类型": "流动资产", "值": 23253041619.0 },
                    { "年份": "2020", "类型": "非流动资产", "值": 4749892376.0 },
                    { "年份": "2020", "类型": "总资产", "值": 28002933995.0 },
                    { "年份": "2019", "类型": "流动资产", "值": 18429304933.0 },
                    { "年份": "2019", "类型": "非流动资产", "值": 4389823329.0 },
                    { "年份": "2019", "类型": "总资产", "值": 22819128262.0 },
                    { "年份": "2018", "类型": "流动资产", "值": 14465023175.0 },
                    { "年份": "2018", "类型": "非流动资产", "值": 4027626907.0 },
                    { "年份": "2018", "类型": "总资产", "值": 18492650082.0 },
                    { "年份": "2017", "类型": "流动资产", "值": 13171977300.0 },
                    { "年份": "2017", "类型": "非流动资产", "值": 3076028672.0 },
                    { "年份": "2017", "类型": "总资产", "值": 16248005973.0 },
                    { "年份": "2016", "类型": "流动资产", "值": 9350293472.0 },
                    { "年份": "2016", "类型": "非流动资产", "值": 2306505675.0 },
                    { "年份": "2016", "类型": "总资产", "值": 11656799147.0 },
                    { "年份": "2015", "类型": "流动资产", "值": 5626922704.0 },
                    { "年份": "2015", "类型": "非流动资产", "值": 1156193876.0 },
                    { "年份": "2015", "类型": "总资产", "值": 6783116580.0 },
                    { "年份": "2014", "类型": "流动资产", "值": 4432848117.0 },
                    { "年份": "2014", "类型": "非流动资产", "值": 446502826.3 },
                    { "年份": "2014", "类型": "总资产", "值": 4879350944.0 }
                ]
            },
            "mark": "bar",
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份"
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "资产值 (元)"
                },
                "color": {
                    "field": "类型",
                    "type": "nominal",
                    "scale": {
                        "domain": ["总资产", "流动资产", "非流动资产"],
                        "range": ["#1f77b4", "#aec7e8", "#ffbb78"]
                    },
                    "legend": {
                        "title": "资产类型"
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "类型", "type": "nominal", "title": "资产类型" },
                    { "field": "值", "type": "quantitative", "title": "资产值", "format": ",.2f" }
                ]
            },
            "config": {
                "bar": {
                    "binSpacing": 0,
                    "align": "center"
                }
            },
            "insights": [
                { "year": 2014, "describe": "总资产最少，为 4,879,350,944.0 元" },
                { "year": 2022, "describe": "总资产最多，为 61,626,211,527.0 元" },
                { "year": 2021, "describe": "总资产波动最大，从2020年的 28,002,933,995.0 元增加到 42,840,130,915.0 元，增长率约为 53.0%" }
            ]
        },
        '股东权益': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of 股东权益 over the years",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    { "年份": "2022", "值": 19736995201.0 },
                    { "年份": "2021", "值": 16703678049.0 },
                    { "年份": "2020", "值": 10864697115.0 },
                    { "年份": "2019", "值": 8754811188.0 },
                    { "年份": "2018", "值": 7794824364.0 },
                    { "年份": "2017", "值": 7023125154.0 },
                    { "年份": "2016", "值": 5963664605.0 },
                    { "年份": "2015", "值": 2835782897.0 },
                    { "年份": "2014", "值": 2366511465.0 }
                ]
            },
            "mark": {
                "type": "area",
                "line": {
                    "color": "steelblue"
                },
                "color": {
                    "x1": 1,
                    "y1": 1,
                    "x2": 1,
                    "y2": 0,
                    "gradient": "linear",
                    "stops": [
                        { "offset": 0, "color": "skyblue" },
                        { "offset": 1, "color": "red" }
                    ]
                },
                "point": {
                    "filled": true,
                    "fill": "white"
                }
            },
            "encoding": {
                "x": {
                    "field": "年份",
                    "type": "ordinal",
                    "title": "年份",
                    "axis": {
                        "labelAngle": -45
                    }
                },
                "y": {
                    "field": "值",
                    "type": "quantitative",
                    "title": "股东权益",
                    "axis": {
                        "format": ",.2f",
                        "grid": true
                    }
                },
                "tooltip": [
                    { "field": "年份", "type": "ordinal", "title": "年份" },
                    { "field": "值", "type": "quantitative", "title": "股东权益", "format": ",.2f" }
                ]
            },
            "insights": [
                { "year": 2014, "describe": "股东权益最少，为 2,366,511,465.0 元" },
                { "year": 2022, "describe": "股东权益最多，为 19,736,995,201.0 元" },
                { "year": 2021, "describe": "股东权益波动最大，从2020年的 10,864,697,115.0 元增加到 16,703,678,049.0 元，增长率约为 53.7%" }
            ]
        }
    };
    return configs[label] || {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "Visualization of financial metrics over the years with tooltips",
        "data": {
            "values": [
                {
                    "年份": "2022",
                    "标签": "净资产收益率",
                    "值": 0.019205064213246126
                },
                {
                    "年份": "2022",
                    "标签": "资产净利率",
                    "值": 0.05996532590407471
                },
                {
                    "年份": "2022",
                    "标签": "权益乘数",
                    "值": 0.3202694878031359
                },
                {
                    "年份": "2022",
                    "标签": "销售净利率",
                    "值": 0.09179556114669683
                },
                {
                    "年份": "2022",
                    "标签": "资产周转率",
                    "值": 0.6532486446511853
                },
                {
                    "年份": "2022",
                    "标签": "净利润",
                    "值": 3695435858.4500003
                },
                {
                    "年份": "2022",
                    "标签": "营业总收入",
                    "值": 40257239155.0
                },
                {
                    "年份": "2022",
                    "标签": "总资产",
                    "值": 61626211527.0
                },
                {
                    "年份": "2022",
                    "标签": "流动资产",
                    "值": 51993725437.0
                },
                {
                    "年份": "2022",
                    "标签": "非流动资产",
                    "值": 9632486090.0
                },
                {
                    "年份": "2022",
                    "标签": "营业利润",
                    "值": 4141144503.0
                },
                {
                    "年份": "2022",
                    "标签": "营业外支出",
                    "值": 16339008.39
                },
                {
                    "年份": "2022",
                    "标签": "营业外收入",
                    "值": 9156115.54
                },
                {
                    "年份": "2022",
                    "标签": "所得税",
                    "值": 438525751.7
                },
                {
                    "年份": "2021",
                    "标签": "净资产收益率",
                    "值": 0.01550881940166995
                },
                {
                    "年份": "2021",
                    "标签": "资产净利率",
                    "值": 0.03977566207607841
                },
                {
                    "年份": "2021",
                    "标签": "权益乘数",
                    "值": 0.3899072596706606
                },
                {
                    "年份": "2021",
                    "标签": "销售净利率",
                    "值": 0.0705979574770763
                },
                {
                    "年份": "2021",
                    "标签": "资产周转率",
                    "值": 0.5634109469667572
                },
                {
                    "年份": "2021",
                    "标签": "净利润",
                    "值": 1703994570.57
                },
                {
                    "年份": "2021",
                    "标签": "营业总收入",
                    "值": 24136598727.0
                },
                {
                    "年份": "2021",
                    "标签": "总资产",
                    "值": 42840130915.0
                },
                {
                    "年份": "2021",
                    "标签": "流动资产",
                    "值": 36307432822.0
                },
                {
                    "年份": "2021",
                    "标签": "非流动资产",
                    "值": 6532698094.0
                },
                {
                    "年份": "2021",
                    "标签": "营业利润",
                    "值": 1897577353.0
                },
                {
                    "年份": "2021",
                    "标签": "营业外支出",
                    "值": 22024546.89
                },
                {
                    "年份": "2021",
                    "标签": "营业外收入",
                    "值": 17119329.76
                },
                {
                    "年份": "2021",
                    "标签": "所得税",
                    "值": 188677565.3
                },
                {
                    "年份": "2020",
                    "标签": "净资产收益率",
                    "值": 0.02737101823355801
                },
                {
                    "年份": "2020",
                    "标签": "资产净利率",
                    "值": 0.07054672660060311
                },
                {
                    "年份": "2020",
                    "标签": "权益乘数",
                    "值": 0.3879842418276571
                },
                {
                    "年份": "2020",
                    "标签": "销售净利率",
                    "值": 0.10243451555565215
                },
                {
                    "年份": "2020",
                    "标签": "资产周转率",
                    "值": 0.6887007393740778
                },
                {
                    "年份": "2020",
                    "标签": "净利润",
                    "值": 1975515328.56
                },
                {
                    "年份": "2020",
                    "标签": "营业总收入",
                    "值": 19285641347.0
                },
                {
                    "年份": "2020",
                    "标签": "总资产",
                    "值": 28002933995.0
                },
                {
                    "年份": "2020",
                    "标签": "流动资产",
                    "值": 23253041619.0
                },
                {
                    "年份": "2020",
                    "标签": "非流动资产",
                    "值": 4749892376.0
                },
                {
                    "年份": "2020",
                    "标签": "营业利润",
                    "值": 2168341287.0
                },
                {
                    "年份": "2020",
                    "标签": "营业外支出",
                    "值": 22423101.69
                },
                {
                    "年份": "2020",
                    "标签": "营业外收入",
                    "值": 35623699.15
                },
                {
                    "年份": "2020",
                    "标签": "所得税",
                    "值": 206026555.9
                },
                {
                    "年份": "2019",
                    "标签": "净资产收益率",
                    "值": 0.01532561474958754
                },
                {
                    "年份": "2019",
                    "标签": "资产净利率",
                    "值": 0.03994571226666608
                },
                {
                    "年份": "2019",
                    "标签": "权益乘数",
                    "值": 0.38366107098749785
                },
                {
                    "年份": "2019",
                    "标签": "销售净利率",
                    "值": 0.070099444271013
                },
                {
                    "年份": "2019",
                    "标签": "资产周转率",
                    "值": 0.5698434942255902
                },
                {
                    "年份": "2019",
                    "标签": "净利润",
                    "值": 911526331.73
                },
                {
                    "年份": "2019",
                    "标签": "营业总收入",
                    "值": 13003331784.0
                },
                {
                    "年份": "2019",
                    "标签": "总资产",
                    "值": 22819128262.0
                },
                {
                    "年份": "2019",
                    "标签": "流动资产",
                    "值": 18429304933.0
                },
                {
                    "年份": "2019",
                    "标签": "非流动资产",
                    "值": 4389823329.0
                },
                {
                    "年份": "2019",
                    "标签": "营业利润",
                    "值": 1047816873.0
                },
                {
                    "年份": "2019",
                    "标签": "营业外支出",
                    "值": 33261077.59
                },
                {
                    "年份": "2019",
                    "标签": "营业外收入",
                    "值": 17146858.72
                },
                {
                    "年份": "2019",
                    "标签": "所得税",
                    "值": 120176322.4
                },
                {
                    "年份": "2018",
                    "标签": "净资产收益率",
                    "值": 0.01862880091075739
                },
                {
                    "年份": "2018",
                    "标签": "资产净利率",
                    "值": 0.044195466196892914
                },
                {
                    "年份": "2018",
                    "标签": "权益乘数",
                    "值": 0.4215093201588867
                },
                {
                    "年份": "2018",
                    "标签": "销售净利率",
                    "值": 0.07882116419210977
                },
                {
                    "年份": "2018",
                    "标签": "资产周转率",
                    "值": 0.5607055750810264
                },
                {
                    "年份": "2018",
                    "标签": "净利润",
                    "值": 817291291.59
                },
                {
                    "年份": "2018",
                    "标签": "营业总收入",
                    "值": 10368931999.0
                },
                {
                    "年份": "2018",
                    "标签": "总资产",
                    "值": 18492650082.0
                },
                {
                    "年份": "2018",
                    "标签": "流动资产",
                    "值": 14465023175.0
                },
                {
                    "年份": "2018",
                    "标签": "非流动资产",
                    "值": 4027626907.0
                },
                {
                    "年份": "2018",
                    "标签": "营业利润",
                    "值": 912426356.4
                },
                {
                    "年份": "2018",
                    "标签": "营业外支出",
                    "值": 4218425.87
                },
                {
                    "年份": "2018",
                    "标签": "营业外收入",
                    "值": 14432081.36
                },
                {
                    "年份": "2018",
                    "标签": "所得税",
                    "值": 105348720.3
                },
                {
                    "年份": "2017",
                    "标签": "净资产收益率",
                    "值": 0.026983942231688936
                },
                {
                    "年份": "2017",
                    "标签": "资产净利率",
                    "值": 0.062427373134004205
                },
                {
                    "年份": "2017",
                    "标签": "权益乘数",
                    "值": 0.43224535771777933
                },
                {
                    "年份": "2017",
                    "标签": "销售净利率",
                    "值": 0.11414736381296457
                },
                {
                    "年份": "2017",
                    "标签": "资产周转率",
                    "值": 0.5469015757235899
                },
                {
                    "年份": "2017",
                    "标签": "净利润",
                    "值": 1014320331.5600001
                },
                {
                    "年份": "2017",
                    "标签": "营业总收入",
                    "值": 8886060069.0
                },
                {
                    "年份": "2017",
                    "标签": "总资产",
                    "值": 16248005973.0
                },
                {
                    "年份": "2017",
                    "标签": "流动资产",
                    "值": 13171977300.0
                },
                {
                    "年份": "2017",
                    "标签": "非流动资产",
                    "值": 3076028672.0
                },
                {
                    "年份": "2017",
                    "标签": "营业利润",
                    "值": 1145291896.0
                },
                {
                    "年份": "2017",
                    "标签": "营业外支出",
                    "值": 4258353.12
                },
                {
                    "年份": "2017",
                    "标签": "营业外收入",
                    "值": 20747193.58
                },
                {
                    "年份": "2017",
                    "标签": "所得税",
                    "值": 147460404.9
                },
                {
                    "年份": "2016",
                    "标签": "净资产收益率",
                    "值": 0.023969034568788305
                },
                {
                    "年份": "2016",
                    "标签": "资产净利率",
                    "值": 0.04685076043371239
                },
                {
                    "年份": "2016",
                    "标签": "权益乘数",
                    "值": 0.511603960040335
                },
                {
                    "年份": "2016",
                    "标签": "销售净利率",
                    "值": 0.09096612413880852
                },
                {
                    "年份": "2016",
                    "标签": "资产周转率",
                    "值": 0.5150352494102213
                },
                {
                    "年份": "2016",
                    "标签": "净利润",
                    "值": 546129904.26
                },
                {
                    "年份": "2016",
                    "标签": "营业总收入",
                    "值": 6003662456.0
                },
                {
                    "年份": "2016",
                    "标签": "总资产",
                    "值": 11656799147.0
                },
                {
                    "年份": "2016",
                    "标签": "流动资产",
                    "值": 9350293472.0
                },
                {
                    "年份": "2016",
                    "标签": "非流动资产",
                    "值": 2306505675.0
                },
                {
                    "年份": "2016",
                    "标签": "营业利润",
                    "值": 613286547.9
                },
                {
                    "年份": "2016",
                    "标签": "营业外支出",
                    "值": 2450596.66
                },
                {
                    "年份": "2016",
                    "标签": "营业外收入",
                    "值": 57299758.72
                },
                {
                    "年份": "2016",
                    "标签": "所得税",
                    "值": 122005805.7
                },
                {
                    "年份": "2015",
                    "标签": "净资产收益率",
                    "值": 0.026262556973159382
                },
                {
                    "年份": "2015",
                    "标签": "资产净利率",
                    "值": 0.06281933141859697
                },
                {
                    "年份": "2015",
                    "标签": "权益乘数",
                    "值": 0.41806489149269493
                },
                {
                    "年份": "2015",
                    "标签": "销售净利率",
                    "值": 0.09325624800412555
                },
                {
                    "年份": "2015",
                    "标签": "资产周转率",
                    "值": 0.673620618061086
                },
                {
                    "年份": "2015",
                    "标签": "净利润",
                    "值": 426110848.49
                },
                {
                    "年份": "2015",
                    "标签": "营业总收入",
                    "值": 4569247183.0
                },
                {
                    "年份": "2015",
                    "标签": "总资产",
                    "值": 6783116580.0
                },
                {
                    "年份": "2015",
                    "标签": "流动资产",
                    "值": 5626922704.0
                },
                {
                    "年份": "2015",
                    "标签": "非流动资产",
                    "值": 1156193876.0
                },
                {
                    "年份": "2015",
                    "标签": "营业利润",
                    "值": 443563764.8
                },
                {
                    "年份": "2015",
                    "标签": "营业外支出",
                    "值": 7563937.16
                },
                {
                    "年份": "2015",
                    "标签": "营业外收入",
                    "值": 56510321.8
                },
                {
                    "年份": "2015",
                    "标签": "所得税",
                    "值": 66399300.95
                },
                {
                    "年份": "2014",
                    "标签": "净资产收益率",
                    "值": 0.028158558318698266
                },
                {
                    "年份": "2014",
                    "标签": "资产净利率",
                    "值": 0.058058238950479554
                },
                {
                    "年份": "2014",
                    "标签": "权益乘数",
                    "值": 0.48500538128130183
                },
                {
                    "年份": "2014",
                    "标签": "销售净利率",
                    "值": 0.09250935215832311
                },
                {
                    "年份": "2014",
                    "标签": "资产周转率",
                    "值": 0.6275931848611052
                },
                {
                    "年份": "2014",
                    "标签": "净利润",
                    "值": 283286523.03
                },
                {
                    "年份": "2014",
                    "标签": "营业总收入",
                    "值": 3062247399.0
                },
                {
                    "年份": "2014",
                    "标签": "总资产",
                    "值": 4879350944.0
                },
                {
                    "年份": "2014",
                    "标签": "流动资产",
                    "值": 4432848117.0
                },
                {
                    "年份": "2014",
                    "标签": "非流动资产",
                    "值": 446502826.3
                },
                {
                    "年份": "2014",
                    "标签": "营业利润",
                    "值": 278788487.5
                },
                {
                    "年份": "2014",
                    "标签": "营业外支出",
                    "值": 305631.54
                },
                {
                    "年份": "2014",
                    "标签": "营业外收入",
                    "值": 47175526.6
                },
                {
                    "年份": "2014",
                    "标签": "所得税",
                    "值": 42371859.53
                }
            ]
        },
        "mark": "line",
        "width": "container",
        "height": "container",
        "encoding": {
            "x": { "field": "年份", "type": "ordinal", "title": "年份" },
            "y": { "field": "值", "type": "quantitative", "title": "总的值", "format": ".2%" },
            "color": { "field": "标签", "type": "nominal", "title": "指标" },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "标签", "type": "nominal", "title": "指标" },
                { "field": "值", "type": "quantitative", "title": "值", "format": ".2%" }
            ]
        }
    };
};

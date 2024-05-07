export const getNodeConfig = (label) => {
    const configs = {
        '非流动资产': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
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
                    "title": "非流动资产的值",
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
        '净利润': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "净利润",
                        "值": 3695435858.4500003
                    },
                    {
                        "年份": "2021",
                        "标签": "净利润",
                        "值": 1703994570.57
                    },
                    {
                        "年份": "2020",
                        "标签": "净利润",
                        "值": 1975515328.56
                    },
                    {
                        "年份": "2019",
                        "标签": "净利润",
                        "值": 911526331.73
                    },
                    {
                        "年份": "2018",
                        "标签": "净利润",
                        "值": 817291291.59
                    },
                    {
                        "年份": "2017",
                        "标签": "净利润",
                        "值": 1014320331.5600001
                    },
                    {
                        "年份": "2016",
                        "标签": "净利润",
                        "值": 546129904.26
                    },
                    {
                        "年份": "2015",
                        "标签": "净利润",
                        "值": 426110848.49
                    },
                    {
                        "年份": "2014",
                        "标签": "净利润",
                        "值": 283286523.03
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
                    "title": "净利润的值",
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
        '净资产收益率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "净资产收益率",
                        "值": 0.019205064213246126
                    },
                    {
                        "年份": "2021",
                        "标签": "净资产收益率",
                        "值": 0.01550881940166995
                    },
                    {
                        "年份": "2020",
                        "标签": "净资产收益率",
                        "值": 0.02737101823355801
                    },
                    {
                        "年份": "2019",
                        "标签": "净资产收益率",
                        "值": 0.01532561474958754
                    },
                    {
                        "年份": "2018",
                        "标签": "净资产收益率",
                        "值": 0.01862880091075739
                    },
                    {
                        "年份": "2017",
                        "标签": "净资产收益率",
                        "值": 0.026983942231688936
                    },
                    {
                        "年份": "2016",
                        "标签": "净资产收益率",
                        "值": 0.023969034568788305
                    },
                    {
                        "年份": "2015",
                        "标签": "净资产收益率",
                        "值": 0.026262556973159382
                    },
                    {
                        "年份": "2014",
                        "标签": "净资产收益率",
                        "值": 0.028158558318698266
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
                    "title": "净资产收益率的值",
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
                    "title": "流动资产的值",
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
        '权益乘数': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "权益乘数",
                        "值": 0.3202694878031359
                    },
                    {
                        "年份": "2021",
                        "标签": "权益乘数",
                        "值": 0.3899072596706606
                    },
                    {
                        "年份": "2020",
                        "标签": "权益乘数",
                        "值": 0.3879842418276571
                    },
                    {
                        "年份": "2019",
                        "标签": "权益乘数",
                        "值": 0.38366107098749785
                    },
                    {
                        "年份": "2018",
                        "标签": "权益乘数",
                        "值": 0.4215093201588867
                    },
                    {
                        "年份": "2017",
                        "标签": "权益乘数",
                        "值": 0.43224535771777933
                    },
                    {
                        "年份": "2016",
                        "标签": "权益乘数",
                        "值": 0.511603960040335
                    },
                    {
                        "年份": "2015",
                        "标签": "权益乘数",
                        "值": 0.41806489149269493
                    },
                    {
                        "年份": "2014",
                        "标签": "权益乘数",
                        "值": 0.48500538128130183
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
                    "title": "权益乘数的值",
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
        '所得税': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
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
                    "title": "所得税的值",
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
        '销售净利率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "销售净利率",
                        "值": 0.09179556114669683
                    },
                    {
                        "年份": "2021",
                        "标签": "销售净利率",
                        "值": 0.0705979574770763
                    },
                    {
                        "年份": "2020",
                        "标签": "销售净利率",
                        "值": 0.10243451555565215
                    },
                    {
                        "年份": "2019",
                        "标签": "销售净利率",
                        "值": 0.070099444271013
                    },
                    {
                        "年份": "2018",
                        "标签": "销售净利率",
                        "值": 0.07882116419210977
                    },
                    {
                        "年份": "2017",
                        "标签": "销售净利率",
                        "值": 0.11414736381296457
                    },
                    {
                        "年份": "2016",
                        "标签": "销售净利率",
                        "值": 0.09096612413880852
                    },
                    {
                        "年份": "2015",
                        "标签": "销售净利率",
                        "值": 0.09325624800412555
                    },
                    {
                        "年份": "2014",
                        "标签": "销售净利率",
                        "值": 0.09250935215832311
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
                    "title": "销售净利率的值",
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
        '营业利润': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "营业利润",
                        "值": 4141144503.0
                    },
                    {
                        "年份": "2021",
                        "标签": "营业利润",
                        "值": 1897577353.0
                    },
                    {
                        "年份": "2020",
                        "标签": "营业利润",
                        "值": 2168341287.0
                    },
                    {
                        "年份": "2019",
                        "标签": "营业利润",
                        "值": 1047816873.0
                    },
                    {
                        "年份": "2018",
                        "标签": "营业利润",
                        "值": 912426356.4
                    },
                    {
                        "年份": "2017",
                        "标签": "营业利润",
                        "值": 1145291896.0
                    },
                    {
                        "年份": "2016",
                        "标签": "营业利润",
                        "值": 613286547.9
                    },
                    {
                        "年份": "2015",
                        "标签": "营业利润",
                        "值": 443563764.8
                    },
                    {
                        "年份": "2014",
                        "标签": "营业利润",
                        "值": 278788487.5
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
                    "title": "营业利润的值",
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
        '营业外支出': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "营业外支出",
                        "值": 16339008.39
                    },
                    {
                        "年份": "2021",
                        "标签": "营业外支出",
                        "值": 22024546.89
                    },
                    {
                        "年份": "2020",
                        "标签": "营业外支出",
                        "值": 22423101.69
                    },
                    {
                        "年份": "2019",
                        "标签": "营业外支出",
                        "值": 33261077.59
                    },
                    {
                        "年份": "2018",
                        "标签": "营业外支出",
                        "值": 4218425.87
                    },
                    {
                        "年份": "2017",
                        "标签": "营业外支出",
                        "值": 4258353.12
                    },
                    {
                        "年份": "2016",
                        "标签": "营业外支出",
                        "值": 2450596.66
                    },
                    {
                        "年份": "2015",
                        "标签": "营业外支出",
                        "值": 7563937.16
                    },
                    {
                        "年份": "2014",
                        "标签": "营业外支出",
                        "值": 305631.54
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
                    "title": "营业外支出的值",
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
        '营业总收入': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "营业总收入",
                        "值": 40257239155.0
                    },
                    {
                        "年份": "2021",
                        "标签": "营业总收入",
                        "值": 24136598727.0
                    },
                    {
                        "年份": "2020",
                        "标签": "营业总收入",
                        "值": 19285641347.0
                    },
                    {
                        "年份": "2019",
                        "标签": "营业总收入",
                        "值": 13003331784.0
                    },
                    {
                        "年份": "2018",
                        "标签": "营业总收入",
                        "值": 10368931999.0
                    },
                    {
                        "年份": "2017",
                        "标签": "营业总收入",
                        "值": 8886060069.0
                    },
                    {
                        "年份": "2016",
                        "标签": "营业总收入",
                        "值": 6003662456.0
                    },
                    {
                        "年份": "2015",
                        "标签": "营业总收入",
                        "值": 4569247183.0
                    },
                    {
                        "年份": "2014",
                        "标签": "营业总收入",
                        "值": 3062247399.0
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
                    "title": "营业总收入的值",
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
        '资产净利率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "资产净利率",
                        "值": 0.05996532590407471
                    },
                    {
                        "年份": "2021",
                        "标签": "资产净利率",
                        "值": 0.03977566207607841
                    },
                    {
                        "年份": "2020",
                        "标签": "资产净利率",
                        "值": 0.07054672660060311
                    },
                    {
                        "年份": "2019",
                        "标签": "资产净利率",
                        "值": 0.03994571226666608
                    },
                    {
                        "年份": "2018",
                        "标签": "资产净利率",
                        "值": 0.044195466196892914
                    },
                    {
                        "年份": "2017",
                        "标签": "资产净利率",
                        "值": 0.062427373134004205
                    },
                    {
                        "年份": "2016",
                        "标签": "资产净利率",
                        "值": 0.04685076043371239
                    },
                    {
                        "年份": "2015",
                        "标签": "资产净利率",
                        "值": 0.06281933141859697
                    },
                    {
                        "年份": "2014",
                        "标签": "资产净利率",
                        "值": 0.058058238950479554
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
                    "title": "资产净利率的值",
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
        '资产周转率': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
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
                    "title": "资产周转率的值",
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
        '总资产': {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "Visualization of {label} over the years with tooltips",
            "width": "container",
            "height": "container",
            "data": {
                "values": [
                    {
                        "年份": "2022",
                        "标签": "总资产",
                        "值": 61626211527.0
                    },
                    {
                        "年份": "2021",
                        "标签": "总资产",
                        "值": 42840130915.0
                    },
                    {
                        "年份": "2020",
                        "标签": "总资产",
                        "值": 28002933995.0
                    },
                    {
                        "年份": "2019",
                        "标签": "总资产",
                        "值": 22819128262.0
                    },
                    {
                        "年份": "2018",
                        "标签": "总资产",
                        "值": 18492650082.0
                    },
                    {
                        "年份": "2017",
                        "标签": "总资产",
                        "值": 16248005973.0
                    },
                    {
                        "年份": "2016",
                        "标签": "总资产",
                        "值": 11656799147.0
                    },
                    {
                        "年份": "2015",
                        "标签": "总资产",
                        "值": 6783116580.0
                    },
                    {
                        "年份": "2014",
                        "标签": "总资产",
                        "值": 4879350944.0
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
                    "title": "总资产的值",
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

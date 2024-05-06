# 对dupont_data_json转换成前端可以使用的结构
import json

dupont_data_json = '''
{
    "dupont": [
        {
            "年份": "2022",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.019205064213246126
                },
                {
                    "label": "资产净利率",
                    "value": 0.05996532590407471
                },
                {
                    "label": "权益乘数",
                    "value": 0.3202694878031359
                },
                {
                    "label": "销售净利率",
                    "value": 0.09179556114669683
                },
                {
                    "label": "资产周转率",
                    "value": 0.6532486446511853
                },
                {
                    "label": "净利润",
                    "value": 3695435858.4500003
                },
                {
                    "label": "营业总收入",
                    "value": 40257239155.0
                },
                {
                    "label": "总资产",
                    "value": 61626211527.0
                },
                {
                    "label": "流动资产",
                    "value": 51993725437.0
                },
                {
                    "label": "非流动资产",
                    "value": 9632486090.0
                },
                {
                    "label": "营业利润",
                    "value": 4141144503.0
                },
                {
                    "label": "营业外支出",
                    "value": 16339008.39
                },
                {
                    "label": "营业外收入",
                    "value": 9156115.54
                },
                {
                    "label": "所得税",
                    "value": 438525751.7
                }
            ]
        },
        {
            "年份": "2021",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.01550881940166995
                },
                {
                    "label": "资产净利率",
                    "value": 0.03977566207607841
                },
                {
                    "label": "权益乘数",
                    "value": 0.3899072596706606
                },
                {
                    "label": "销售净利率",
                    "value": 0.0705979574770763
                },
                {
                    "label": "资产周转率",
                    "value": 0.5634109469667572
                },
                {
                    "label": "净利润",
                    "value": 1703994570.57
                },
                {
                    "label": "营业总收入",
                    "value": 24136598727.0
                },
                {
                    "label": "总资产",
                    "value": 42840130915.0
                },
                {
                    "label": "流动资产",
                    "value": 36307432822.0
                },
                {
                    "label": "非流动资产",
                    "value": 6532698094.0
                },
                {
                    "label": "营业利润",
                    "value": 1897577353.0
                },
                {
                    "label": "营业外支出",
                    "value": 22024546.89
                },
                {
                    "label": "营业外收入",
                    "value": 17119329.76
                },
                {
                    "label": "所得税",
                    "value": 188677565.3
                }
            ]
        },
        {
            "年份": "2020",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.02737101823355801
                },
                {
                    "label": "资产净利率",
                    "value": 0.07054672660060311
                },
                {
                    "label": "权益乘数",
                    "value": 0.3879842418276571
                },
                {
                    "label": "销售净利率",
                    "value": 0.10243451555565215
                },
                {
                    "label": "资产周转率",
                    "value": 0.6887007393740778
                },
                {
                    "label": "净利润",
                    "value": 1975515328.56
                },
                {
                    "label": "营业总收入",
                    "value": 19285641347.0
                },
                {
                    "label": "总资产",
                    "value": 28002933995.0
                },
                {
                    "label": "流动资产",
                    "value": 23253041619.0
                },
                {
                    "label": "非流动资产",
                    "value": 4749892376.0
                },
                {
                    "label": "营业利润",
                    "value": 2168341287.0
                },
                {
                    "label": "营业外支出",
                    "value": 22423101.69
                },
                {
                    "label": "营业外收入",
                    "value": 35623699.15
                },
                {
                    "label": "所得税",
                    "value": 206026555.9
                }
            ]
        },
        {
            "年份": "2019",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.01532561474958754
                },
                {
                    "label": "资产净利率",
                    "value": 0.03994571226666608
                },
                {
                    "label": "权益乘数",
                    "value": 0.38366107098749785
                },
                {
                    "label": "销售净利率",
                    "value": 0.070099444271013
                },
                {
                    "label": "资产周转率",
                    "value": 0.5698434942255902
                },
                {
                    "label": "净利润",
                    "value": 911526331.73
                },
                {
                    "label": "营业总收入",
                    "value": 13003331784.0
                },
                {
                    "label": "总资产",
                    "value": 22819128262.0
                },
                {
                    "label": "流动资产",
                    "value": 18429304933.0
                },
                {
                    "label": "非流动资产",
                    "value": 4389823329.0
                },
                {
                    "label": "营业利润",
                    "value": 1047816873.0
                },
                {
                    "label": "营业外支出",
                    "value": 33261077.59
                },
                {
                    "label": "营业外收入",
                    "value": 17146858.72
                },
                {
                    "label": "所得税",
                    "value": 120176322.4
                }
            ]
        },
        {
            "年份": "2018",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.01862880091075739
                },
                {
                    "label": "资产净利率",
                    "value": 0.044195466196892914
                },
                {
                    "label": "权益乘数",
                    "value": 0.4215093201588867
                },
                {
                    "label": "销售净利率",
                    "value": 0.07882116419210977
                },
                {
                    "label": "资产周转率",
                    "value": 0.5607055750810264
                },
                {
                    "label": "净利润",
                    "value": 817291291.59
                },
                {
                    "label": "营业总收入",
                    "value": 10368931999.0
                },
                {
                    "label": "总资产",
                    "value": 18492650082.0
                },
                {
                    "label": "流动资产",
                    "value": 14465023175.0
                },
                {
                    "label": "非流动资产",
                    "value": 4027626907.0
                },
                {
                    "label": "营业利润",
                    "value": 912426356.4
                },
                {
                    "label": "营业外支出",
                    "value": 4218425.87
                },
                {
                    "label": "营业外收入",
                    "value": 14432081.36
                },
                {
                    "label": "所得税",
                    "value": 105348720.3
                }
            ]
        },
        {
            "年份": "2017",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.026983942231688936
                },
                {
                    "label": "资产净利率",
                    "value": 0.062427373134004205
                },
                {
                    "label": "权益乘数",
                    "value": 0.43224535771777933
                },
                {
                    "label": "销售净利率",
                    "value": 0.11414736381296457
                },
                {
                    "label": "资产周转率",
                    "value": 0.5469015757235899
                },
                {
                    "label": "净利润",
                    "value": 1014320331.5600001
                },
                {
                    "label": "营业总收入",
                    "value": 8886060069.0
                },
                {
                    "label": "总资产",
                    "value": 16248005973.0
                },
                {
                    "label": "流动资产",
                    "value": 13171977300.0
                },
                {
                    "label": "非流动资产",
                    "value": 3076028672.0
                },
                {
                    "label": "营业利润",
                    "value": 1145291896.0
                },
                {
                    "label": "营业外支出",
                    "value": 4258353.12
                },
                {
                    "label": "营业外收入",
                    "value": 20747193.58
                },
                {
                    "label": "所得税",
                    "value": 147460404.9
                }
            ]
        },
        {
            "年份": "2016",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.023969034568788305
                },
                {
                    "label": "资产净利率",
                    "value": 0.04685076043371239
                },
                {
                    "label": "权益乘数",
                    "value": 0.511603960040335
                },
                {
                    "label": "销售净利率",
                    "value": 0.09096612413880852
                },
                {
                    "label": "资产周转率",
                    "value": 0.5150352494102213
                },
                {
                    "label": "净利润",
                    "value": 546129904.26
                },
                {
                    "label": "营业总收入",
                    "value": 6003662456.0
                },
                {
                    "label": "总资产",
                    "value": 11656799147.0
                },
                {
                    "label": "流动资产",
                    "value": 9350293472.0
                },
                {
                    "label": "非流动资产",
                    "value": 2306505675.0
                },
                {
                    "label": "营业利润",
                    "value": 613286547.9
                },
                {
                    "label": "营业外支出",
                    "value": 2450596.66
                },
                {
                    "label": "营业外收入",
                    "value": 57299758.72
                },
                {
                    "label": "所得税",
                    "value": 122005805.7
                }
            ]
        },
        {
            "年份": "2015",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.026262556973159382
                },
                {
                    "label": "资产净利率",
                    "value": 0.06281933141859697
                },
                {
                    "label": "权益乘数",
                    "value": 0.41806489149269493
                },
                {
                    "label": "销售净利率",
                    "value": 0.09325624800412555
                },
                {
                    "label": "资产周转率",
                    "value": 0.673620618061086
                },
                {
                    "label": "净利润",
                    "value": 426110848.49
                },
                {
                    "label": "营业总收入",
                    "value": 4569247183.0
                },
                {
                    "label": "总资产",
                    "value": 6783116580.0
                },
                {
                    "label": "流动资产",
                    "value": 5626922704.0
                },
                {
                    "label": "非流动资产",
                    "value": 1156193876.0
                },
                {
                    "label": "营业利润",
                    "value": 443563764.8
                },
                {
                    "label": "营业外支出",
                    "value": 7563937.16
                },
                {
                    "label": "营业外收入",
                    "value": 56510321.8
                },
                {
                    "label": "所得税",
                    "value": 66399300.95
                }
            ]
        },
        {
            "年份": "2014",
            "结果": [
                {
                    "label": "净资产收益率",
                    "value": 0.028158558318698266
                },
                {
                    "label": "资产净利率",
                    "value": 0.058058238950479554
                },
                {
                    "label": "权益乘数",
                    "value": 0.48500538128130183
                },
                {
                    "label": "销售净利率",
                    "value": 0.09250935215832311
                },
                {
                    "label": "资产周转率",
                    "value": 0.6275931848611052
                },
                {
                    "label": "净利润",
                    "value": 283286523.03
                },
                {
                    "label": "营业总收入",
                    "value": 3062247399.0
                },
                {
                    "label": "总资产",
                    "value": 4879350944.0
                },
                {
                    "label": "流动资产",
                    "value": 4432848117.0
                },
                {
                    "label": "非流动资产",
                    "value": 446502826.3
                },
                {
                    "label": "营业利润",
                    "value": 278788487.5
                },
                {
                    "label": "营业外支出",
                    "value": 305631.54
                },
                {
                    "label": "营业外收入",
                    "value": 47175526.6
                },
                {
                    "label": "所得税",
                    "value": 42371859.53
                }
            ]
        }
    ]
}
'''

# 将JSON字符串转换为Python字典
dupont_data = json.loads(dupont_data_json)

def create_dupont_structure(year):
    # 查找指定年份的数据
    year_data = next((item for item in dupont_data['dupont'] if item['年份'] == year), None)
    if not year_data:
        return None  

    # 创建一个用于快速查找的字典
    results_dict = {result['label']: result['value'] for result in year_data['结果']}

    # 构建结构化数据
    data_structure = {
        'id': 'root',
        'label': '净资产收益率',
        'subLabel': f"{results_dict.get('净资产收益率', ''):.2%}",
        'children': [
            {
                'id': 'child-a',
                'label': '资产净利率',
                'subLabel': f"{results_dict.get('资产净利率', ''):.2%}",
                'children': [
                    {
                        'id': 'child-a-a',
                        'label': '销售净利率',
                        'subLabel': f"{results_dict.get('销售净利率', ''):.2%}",
                        'children': [
                            {
                                'id': 'child-a-a-a',
                                'label': '净利润',
                                'subLabel': f"{results_dict.get('净利润', ''):,.0f}",
                                'children': [
                                    {'id': 'child-a-a-a-a', 'label': '营业利润', 'subLabel': f"{results_dict.get('营业利润', ''):,.0f}"},
                                    {'id': 'child-a-a-a-b', 'label': '营业外收支', 'subLabel': f"{results_dict.get('营业外收入', '') - results_dict.get('营业外支出', ''):,.0f}"},
                                    {'id': 'child-a-a-a-c', 'label': '所得税费用', 'subLabel': f"{results_dict.get('所得税', ''):,.0f}"}
                                ]
                            },
                            {
                                'id': 'child-a-a-b',
                                'label': '营业收入',
                                'subLabel': f"{results_dict.get('营业总收入', ''):,.0f}"
                            }
                        ]
                    },
                    {
                        'id': 'child-a-b',
                        'label': '资产周转率',
                        'subLabel': f"{results_dict.get('资产周转率', ''):.2%}",
                        'children': [
                            {
                                'id': 'child-a-b-a',
                                'label': '营业总收入',
                                'subLabel': f"{results_dict.get('营业总收入', ''):,.0f}"
                            },
                            {
                                'id': 'child-a-b-b',
                                'label': '总资产',
                                'subLabel': f"{results_dict.get('总资产', ''):,.0f}",
                                'children': [
                                    {'id': 'child-a-b-b-a', 'label': '流动资产', 'subLabel': f"{results_dict.get('流动资产', ''):,.0f}"},
                                    {'id': 'child-a-b-b-a', 'label': '非流动资产', 'subLabel': f"{results_dict.get('非流动资产', ''):,.0f}"},
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'child-b',
                'label': '权益乘数',
                'subLabel': f"{results_dict.get('权益乘数', ''):.2%}",
                'children': [
                    {'id': 'child-b-a', 'label': '股东权益', 'subLabel': ''},  # 股东权益占位符，如果可用，计算或检索
                    {'id': 'child-b-b', 'label': '总资产', 'subLabel': f"{results_dict.get('总资产', ''):,.0f}"}
                ]
            }
        ]
    }
    
    return data_structure

# 生成2022年的数据
data_for_2022 = create_dupont_structure("2022")
print(json.dumps(data_for_2022, indent=2, ensure_ascii=False))
data = json.dumps(data_for_2022, indent=2, ensure_ascii=False)
print(data)


def to_javascript_object(data, indent=0):
    js = []
    tab = ' ' * 4  # 定义缩进为4个空格
    if isinstance(data, dict):
        js.append('{')
        for i, (key, value) in enumerate(data.items()):
            js.append(f"{tab * (indent + 1)}{key}: {to_javascript_object(value, indent + 1)},")
        js[-1] = js[-1].rstrip(',')  # 移除最后一个逗号
        js.append(tab * indent + '}')
    elif isinstance(data, list):
        js.append('[')
        for item in data:
            js.append(f"{tab * (indent + 1)}{to_javascript_object(item, indent + 1)},")
        js[-1] = js[-1].rstrip(',')  # 移除最后一个逗号
        js.append(tab * indent + ']')
    elif isinstance(data, str):
        js.append(f"'{data}'")
    else:
        js.append(str(data))
    return '\n'.join(js)

js_output = to_javascript_object(data_for_2022)
print(js_output)
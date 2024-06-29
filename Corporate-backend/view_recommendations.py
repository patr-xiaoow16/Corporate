# view_recommendations.py

import pandas as pd
import altair as alt
import seaborn as sns
import matplotlib.pyplot as plt

# 定义视图推荐和相应的绘图代码
view_recommendations = {
    "财务指标总览": {
        "折线图": {
            "description": "展示净资产收益率、销售净利率、资产周转率等财务指标随时间的变化趋势。",
            "questions": [
                "在过去五年中，净资产收益率的波动幅度如何？",
                "哪些年份的销售净利率明显高于或低于其他年份？",
                "资产周转率是否呈现出增长或下降的长期趋势？"
            ],
            "code": """
def plot_financial_indicators(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    roe_chart = alt.Chart(data).mark_line(color='brown').encode(
        x='日期:T',
        y='净资产收益率:Q',
        tooltip=['日期:T', '净资产收益率:Q']
    ).properties(
        title='净资产收益率',
        width='container',
        height='container'
    )

    net_margin_chart = alt.Chart(data).mark_line(color='magenta').encode(
        x='日期:T',
        y='销售净利率:Q',
        tooltip=['日期:T', '销售净利率:Q']
    ).properties(
        title='销售净利率',
        width='container',
        height='container'
    )

    asset_turnover_chart = alt.Chart(data).mark_line(color='cyan').encode(
        x='日期:T',
        y='资产周转率:Q',
        tooltip=['日期:T', '资产周转率:Q']
    ).properties(
        title='资产周转率',
        width='container',
        height='container'
    )

    chart = alt.layer(roe_chart, net_margin_chart, asset_turnover_chart).resolve_scale(
        y='independent'
    ).properties(
        width='container',
        height='container'
    )
    
    return chart
            """
        },
        "堆积条形图": {
            "description": "展示资产负债表中流动资产、非流动资产、流动负债和非流动负债的组成部分。",
            "questions": [
                "流动资产与非流动资产的比例是如何变化的？",
                "哪一年流动负债的比例显著增加？",
                "非流动负债的组成部分在近几年中有无显著变化？"
            ],
            "code": """
def plot_balance_sheet(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    balance_chart = alt.Chart(data).transform_fold(
        fold=['流动资产', '非流动资产', '流动负债', '非流动负债'],
        as_=['类别', '值']
    ).mark_bar().encode(
        x='日期:T',
        y='值:Q',
        color='类别:N',
        tooltip=['日期:T', '类别:N', '值:Q']
    ).properties(
        title='资产负债表构成',
        width='container',
        height='container'
    )
    
    return balance_chart
            """
        }
    },
    "年度财务表现": {
        "堆叠面积图": {
            "description": "展示各年度的关键财务指标变化（净利润、营业收入、资产总额等）。",
            "questions": [
                "哪些年份的净利润显著高于其他年份？",
                "营业收入的年度变化趋势如何？",
                "资产总额在过去十年中是否稳定增长？"
            ],
            "code": """
def plot_annual_performance(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    annual_chart = alt.Chart(data).transform_fold(
        fold=['净利润', '营业收入', '资产总额'],
        as_=['指标', '值']
    ).mark_area().encode(
        x='year(日期):O',
        y='sum(值):Q',
        color='指标:N',
        tooltip=['year(日期):O', '指标:N', 'sum(值):Q']
    ).properties(
        title='年度财务指标变化',
        width='container',
        height='container'
    )
    
    return annual_chart
            """
        },
        "条形图": {
            "description": "比较不同年份的净资产收益率、销售净利率和资产周转率。",
            "questions": [
                "哪些年份的净资产收益率最高？",
                "销售净利率在各个年份的差异有多大？",
                "资产周转率是否在某些年份有显著的波动？"
            ],
            "code": """
def plot_annual_comparison(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    comparison_chart = alt.Chart(data).transform_fold(
        fold=['净资产收益率', '销售净利率', '资产周转率'],
        as_=['指标', '值']
    ).mark_bar().encode(
        x='year(日期):O',
        y='值:Q',
        color='指标:N',
        tooltip=['year(日期):O', '指标:N', '值:Q']
    ).properties(
        title='年度财务比率比较',
        width='container',
        height='container'
    )
    
    return comparison_chart
            """
        }
    },
    "关键财务比率分析": {
        "折线图": {
            "description": "追踪关键财务比率（如流动比率、速动比率、资产负债率）随时间的变化。",
            "questions": [
                "流动比率在过去几年中的变化趋势如何？",
                "速动比率是否与流动比率保持一致的变化？",
                "资产负债率在特定年份是否显著上升或下降？"
            ],
            "code": """
def plot_key_ratios(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    current_ratio_chart = alt.Chart(data).mark_line(color='blue').encode(
        x='日期:T',
        y='流动比率:Q',
        tooltip=['日期:T', '流动比率:Q']
    ).properties(
        title='流动比率',
        width='container',
        height='container'
    )

    quick_ratio_chart = alt.Chart(data).mark_line(color='green').encode(
        x='日期:T',
        y='速动比率:Q',
        tooltip=['日期:T', '速动比率:Q']
    ).properties(
        title='速动比率',
        width='container',
        height='container'
    )

    debt_ratio_chart = alt.Chart(data).mark_line(color='red').encode(
        x='日期:T',
        y='资产负债率:Q',
        tooltip=['日期:T', '资产负债率:Q']
    ).properties(
        title='资产负债率',
        width='container',
        height='container'
    )

    chart = alt.layer(current_ratio_chart, quick_ratio_chart, debt_ratio_chart).resolve_scale(
        y='independent'
    ).properties(
        width='container',
        height='container'
    )
    
    return chart
            """
        },
        "散点图": {
            "description": "分析财务比率之间的关系，如流动比率与速动比率、资产负债率与净资产收益率。",
            "questions": [
                "流动比率与速动比率之间的相关性如何？",
                "资产负债率与净资产收益率之间是否存在明显的关系？",
                "哪些年份这些比率之间的关系最为显著？"
            ],
            "code": """
def plot_ratios_relationship(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    scatter_chart = alt.Chart(data).mark_circle().encode(
        x='流动比率:Q',
        y='速动比率:Q',
        color='year(日期):O',
        size='资产负债率:Q',
        tooltip=['日期:T', '流动比率:Q', '速动比率:Q', '资产负债率:Q', '净资产收益率:Q']
    ).properties(
        title='流动比率与速动比率的关系',
        width='container',
        height='container'
    )
    
    return scatter_chart
            """
        }
    },
    "异常年份深入分析": {
        "瀑布图": {
            "description": "展示净利润从营业收入到最终结果的调整过程。",
            "questions": [
                "哪些项目对异常年份净利润的贡献最大？",
                "营业收入在调整过程中的变化情况如何？",
                "异常年份的净利润调整过程中是否有特殊因素影响？"
            ],
            "code": """
def plot_waterfall(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    waterfall_chart = alt.Chart(data).transform_calculate(
        Step="datum.营业收入 - datum.成本 - datum.税费"
    ).mark_bar().encode(
        x='日期:T',
        y='Step:Q',
        tooltip=['日期:T', '营业收入:Q', '成本:Q', '税费:Q', '净利润:Q']
    ).properties(
        title='净利润瀑布图',
        width='container',
        height='container'
    )
    
    return waterfall_chart
            """
        },
        "箱型图": {
            "description": "分析异常年份的关键财务比率（如权益乘数、资产净利率）的分布。",
            "questions": [
                "异常年份的权益乘数分布情况如何？",
                "资产净利率在异常年份的表现有何不同？",
                "哪些异常年份的财务比率分布最为极端？"
            ],
            "code": """
def plot_boxplot(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    boxplot_chart = alt.Chart(data).transform_fold(
        fold=['权益乘数', '资产净利率'],
        as_=['指标', '值']
    ).mark_boxplot().encode(
        x='year(日期):O',
        y='值:Q',
        color='指标:N',
        tooltip=['year(日期):O', '指标:N', '值:Q']
    ).properties(
        title='关键财务比率的箱型图',
        width='container',
        height='container'
    )
    
    return boxplot_chart
            """
        }
    },
    "综合财务分析与关联性展示": {
        "热力图": {
            "description": "展示资产间的相关性。",
            "questions": [
                "哪些资产之间的相关性最高？",
                "是否存在高度负相关的资产对？",
                "哪些资产可以在投资组合中作为对冲工具？"
            ],
            "code": """
import seaborn as sns
import matplotlib.pyplot as plt

def plot_heatmap(data: pd.DataFrame):
    corr = data.corr()
    plt.figure(figsize=(10, 8))
    sns.heatmap(corr, annot=True, cmap='coolwarm', fmt='.2f', linewidths=0.5)
    plt.title('资产相关性热力图')
    plt.show()
            """
        },
        "气泡图": {
            "description": "展示财务比率与公司规模、市场表现之间的关系。",
            "questions": [
                "ROE与公司市值之间的关系如何？",
                "不同规模的公司在财务比率上的表现有何不同？",
                "EPS与股价之间的相关性如何？"
            ],
            "code": """
def plot_bubble_chart(data: pd.DataFrame):
    data['日期'] = pd.to_datetime(data['日期'])

    bubble_chart = alt.Chart(data).mark_circle().encode(
        x='净资产收益率:Q',
        y='市值:Q',
        size='EPS:Q',
        color='year(日期):O',
        tooltip=['日期:T', '净资产收益率:Q', '市值:Q', 'EPS:Q', '股价:Q']
    ).properties(
        title='财务比率与公司规模、市场表现的关系',
        width='container',
        height='container'
    )
    
    return bubble_chart
            """
        }
    }
}

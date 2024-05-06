// 定义异步函数读取和处理文件
export async function fetchDupontData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return transformData(data.dupont);
    } catch (err) {
        console.error("Error fetching and processing data:", err);
        throw err;
    }
}

// 将原始数据转换为指定的数据结构
function transformData(dupontData) {
    return dupontData.map(yearData => {
        // 构建子节点的函数
        const findValue = (label) => {
            const item = yearData.结果.find(x => x.label === label);
            return item ? item.value : null;
        };

        return {
            id: 'root',
            label: yearData.年份,
            subLabel: findValue('净资产收益率').toString(),
            children: [
                {
                    id: 'child-a',
                    label: '资产净利率',
                    subLabel: findValue('资产净利率').toString(),
                    children: [
                        {
                            id: 'child-a-a',
                            label: '销售净利率',
                            subLabel: findValue('销售净利率').toString(),
                            children: [
                                {
                                    id: 'child-a-a-a',
                                    label: '净利润',
                                    subLabel: findValue('净利润').toString(),
                                    children: [
                                        { id: 'child-a-a-a-a', label: '营业利润', subLabel: findValue('营业利润').toString() },
                                        { id: 'child-a-a-a-b', label: '营业外收入', subLabel: findValue('营业外收入').toString() },
                                        { id: 'child-a-a-a-c', label: '营业外支出', subLabel: findValue('营业外支出').toString() },
                                        { id: 'child-a-a-a-d', label: '所得税', subLabel: findValue('所得税').toString() }
                                    ]
                                },
                                { id: 'child-a-a-b', label: '营业总收入', subLabel: findValue('营业总收入').toString() }
                            ]
                        },
                        {
                            id: 'child-a-b',
                            label: '资产周转率',
                            subLabel: findValue('资产周转率').toString(),
                            children: [
                                { id: 'child-a-b-a', label: '总资产', subLabel: findValue('总资产').toString() },
                                { id: 'child-a-b-b', label: '流动资产', subLabel: findValue('流动资产').toString() },
                                { id: 'child-a-b-c', label: '非流动资产', subLabel: findValue('非流动资产').toString() }
                            ]
                        }
                    ]
                },
                {
                    id: 'child-b',
                    label: '权益乘数',
                    subLabel: findValue('权益乘数').toString(),
                    children: [
                        { id: 'child-b-a', label: '股东权益', subLabel: '根据总资产和权益乘数计算得出' }
                    ]
                }
            ]
        };
    });
}

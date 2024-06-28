<template>
    <div class="chat-title">
        对话框
    </div>
    <div id="app" class="chat-container">
        <div class="chat-box">
            <div v-for="(message, index) in messages" :key="index"
                :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
                <p>{{ message.content }}</p>
            </div>
        </div>
        <div class="input-area">
            <div class="input-wrapper">
                <input v-model="userInput" placeholder="Type your message..." @keyup.enter="sendQuestion"
                    class="input-box" />
                <img src="/upload.png" @click="triggerFileUpload" class="upload-icon" alt="Upload File">
                <input type="file" @change="handleFileUpload" class="file-upload" ref="fileInput">
            </div>
            <button @click="sendQuestion1" class="send-button">Send</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();

const userInput = ref('');
const messages = ref([]);

// 上传文件
const fileInput = ref(null);
const triggerFileUpload = () => {
    if (fileInput.value) {
        fileInput.value.click();  // 触发文件选择
    }
};
const handleFileUpload = event => {
    const file = event.target.files[0];
    if (file) {
        // 处理文件的逻辑
        console.log("File uploaded:", file.name);
    }
};


// 为不同的回复定义对应的 chart_json 数据
const chartJsonMapping = {
    '2020年财务比率概览：权益乘数: 2.577，资产周转率: 0.689，销售净利率: 10.24%，资产净利率: 7.05%，净资产收益率: 18.18%，关键财务比率的总体统计（2014-2022年）。权益乘数（平均值: 2.44, 标准差: 0.34），资产周转率（平均值: 0.60, 标准差: 0.06），销售净利率（平均值: 8.94%, 标准差: 1.44%），资产净利率（平均值: 5.38%, 标准差: 1.13%），净资产收益率（平均值: 13.18%, 标准差: 3.57%）': {
        "data": {
            "values": [
                { "年份": 2022, "指标": "权益乘数", "值": 3.122370497606324 },
                { "年份": 2021, "指标": "权益乘数", "值": 2.5647124417346343 },
                { "年份": 2020, "指标": "权益乘数", "值": 2.577424266741742 },
                { "年份": 2019, "指标": "权益乘数", "值": 2.6064672066574786 },
                { "年份": 2018, "指标": "权益乘数", "值": 2.372426781982076 },
                { "年份": 2017, "指标": "权益乘数", "值": 2.313500844242537 },
                { "年份": 2016, "指标": "权益乘数", "值": 1.9546369420619016 },
                { "年份": 2015, "指标": "权益乘数", "值": 2.391973160983487 },
                { "年份": 2014, "指标": "权益乘数", "值": 2.061832793191221 },
                { "年份": 2022, "指标": "资产周转率", "值": 0.6532486446511853 },
                { "年份": 2021, "指标": "资产周转率", "值": 0.5634109469667572 },
                { "年份": 2020, "指标": "资产周转率", "值": 0.6887007393740778 },
                { "年份": 2019, "指标": "资产周转率", "值": 0.5698434942255902 },
                { "年份": 2018, "指标": "资产周转率", "值": 0.5607063359389711 },
                { "年份": 2017, "指标": "资产周转率", "值": 0.5700526450857821 },
                { "年份": 2016, "指标": "资产周转率", "值": 0.5886970623632386 },
                { "年份": 2015, "指标": "资产周转率", "值": 0.5512094395280231 },
                { "年份": 2014, "指标": "资产周转率", "值": 0.5150350296212886 },
                { "年份": 2022, "指标": "销售净利率", "值": 0.09179592284061916 },
                { "年份": 2021, "指标": "销售净利率", "值": 0.07059805121638955 },
                { "年份": 2020, "指标": "销售净利率", "值": 0.10243463748597082 },
                { "年份": 2019, "指标": "销售净利率", "值": 0.070099089346887 },
                { "年份": 2018, "指标": "销售净利率", "值": 0.0788209693654267 },
                { "年份": 2017, "指标": "销售净利率", "值": 0.09325609579100145 },
                { "年份": 2016, "指标": "销售净利率", "值": 0.08938647419072682 },
                { "年份": 2015, "指标": "销售净利率", "值": 0.11414728682170542 },
                { "年份": 2014, "指标": "销售净利率", "值": 0.0739581949058694 },
                { "年份": 2022, "指标": "资产净利率", "值": 0.059964726631393 },
                { "年份": 2021, "指标": "资产净利率", "值": 0.03977551789077213 },
                { "年份": 2020, "指标": "资产净利率", "值": 0.07054673721340388 },
                { "年份": 2019, "指标": "资产净利率", "值": 0.03994565217391305 },
                { "年份": 2018, "指标": "资产净利率", "值": 0.044195250659630606 },
                { "年份": 2017, "指标": "资产净利率", "值": 0.062427364774624374 },
                { "年份": 2016, "指标": "资产净利率", "值": 0.05805831338028169 },
                { "年份": 2015, "指标": "资产净利率", "值": 0.06078920308483257 },
                { "年份": 2014, "指标": "资产净利率", "值": 0.05805811251435132 },
                { "年份": 2022, "指标": "净资产收益率", "值": 0.1872339644822311 },
                { "年份": 2021, "指标": "净资产收益率", "值": 0.1020131354047507 },
                { "年份": 2020, "指标": "净资产收益率", "值": 0.1818288450795896 },
                { "年份": 2019, "指标": "净资产收益率", "值": 0.1041171890696405 },
                { "年份": 2018, "指标": "净资产收益率", "值": 0.1048505076476922 },
                { "年份": 2017, "指标": "净资产收益率", "值": 0.1444257804493626 },
                { "年份": 2016, "指标": "净资产收益率", "值": 0.0915762271074263 },
                { "年份": 2015, "指标": "净资产收益率", "值": 0.1502621547442106 },
                { "年份": 2014, "指标": "净资产收益率", "值": 0.1197063809830306 }
            ]
        },
        "mark": "line",
        "width": "container",
        "height": "container",
        "title": "2014-2022年关键财务指标趋势",
        "encoding": {
            "x": {
                "field": "年份",
                "type": "ordinal",
                "axis": {
                    "title": "年份"
                }
            },
            "y": {
                "field": "值",
                "type": "quantitative",
                "axis": {
                    "title": "值"
                }
            },
            "color": {
                "field": "指标",
                "type": "nominal",
                "legend": {
                    "title": "财务指标"
                }
            },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "指标", "type": "nominal", "title": "财务指标" },
                { "field": "值", "type": "quantitative", "title": "值", "format": ".4f" }
            ]
        },
        "insights": [
            { "year": 2020, "describe": "权益乘数相对较高，接近历年平均值的高端，显示公司有相对较高的财务杠杆。" },
            { "year": 2020, "describe": "资产周转率在2020年达到了最高，表明该年度的资产运用效率较好。" },
            { "year": 2020, "describe": "销售净利率和资产净利率均较高，显示公司的盈利能力较强。净资产收益率同样显示出较高的水平，表明股东的权益获得了良好的回报。" }
        ]
    },
    '2020年权益乘数的增长率为-1.11%，表明这一年度权益乘数略有下降。权益乘数是财务杠杆的一种表现，它表示公司的总资产与股东权益的比率。权益乘数的降低可能意味着公司在该年度减少了负债程度或者增加了股东权益，这通常是为了增强公司的财务安全性和降低财务风险。': {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "2014-2021年权益乘数增长率",
        "data": {
            "values": [
                { "年份": 2022, "权益乘数": 3.1224, "权益乘数_增长率": 21.74 },
                { "年份": 2021, "权益乘数": 2.5647, "权益乘数_增长率": -0.49 },
                { "年份": 2020, "权益乘数": 2.5774, "权益乘数_增长率": -1.11 },
                { "年份": 2019, "权益乘数": 2.6065, "权益乘数_增长率": 9.87 },
                { "年份": 2018, "权益乘数": 2.3724, "权益乘数_增长率": 2.55 },
                { "年份": 2017, "权益乘数": 2.3135, "权益乘数_增长率": 18.36 },
                { "年份": 2016, "权益乘数": 1.9546, "权益乘数_增长率": -18.28 },
                { "年份": 2015, "权益乘数": 2.3920, "权益乘数_增长率": 16.01 },
                { "年份": 2014, "权益乘数": 2.0618, "权益乘数_增长率": null }
            ]
        },
        "mark": "line",
        "encoding": {
            "x": {
                "field": "年份",
                "type": "ordinal",
                "axis": { "title": "年份" }
            },
            "y": {
                "field": "权益乘数_增长率",
                "type": "quantitative",
                "axis": { "title": "增长率 (%)" },
                "scale": { "zero": false }
            },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "权益乘数", "type": "quantitative", "title": "权益乘数", "format": ".3f" },
                { "field": "权益乘数_增长率", "type": "quantitative", "title": "增长率 (%)", "format": ".2f" }
            ]
        },
        "width": "container",
        "height": "container",
        "title": "2014-2021年权益乘数增长率",
        "insights": [
            { "year": 2020, "describe": "2020年权益乘数的增长率为-1.11%，表明这一年度权益乘数略有下降。" }
        ]
    }
    ,
    '2020年，营业收入增长率达到48.31%，这表明了一次显著的增长。这种强劲的增长可能与全球市场环境的变化以及公司对这些变化的有效响应有关。': {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "2014-2022 年营业收入增长率",
        "data": {
            "values": [
                { "年份": "2022", "营业总收入": 40257240000, "营业收入增长率": 66.79 },
                { "年份": "2021", "营业总收入": 24136600000, "营业收入增长率": 25.15 },
                { "年份": "2020", "营业总收入": 19285640000, "营业收入增长率": 48.31 },
                { "年份": "2019", "营业总收入": 13003330000, "营业收入增长率": 25.41 },
                { "年份": "2018", "营业总收入": 10368930000, "营业收入增长率": 16.69 },
                { "年份": "2017", "营业总收入": 8886060000, "营业收入增长率": 48.01 },
                { "年份": "2016", "营业总收入": 6003662000, "营业收入增长率": 31.39 },
                { "年份": "2015", "营业总收入": 4569247000, "营业收入增长率": 49.21 },
                { "年份": "2014", "营业总收入": 3062247000, "营业收入增长率": null }
            ]
        },
        "mark": "line",
        "width": "container",
        "height": "container",
        "title": "2014-2021年营业收入增长率",
        "encoding": {
            "x": { "field": "年份", "type": "ordinal", "title": "年份" },
            "y": { "field": "营业收入增长率", "type": "quantitative", "title": "营业收入增长率 (%)" },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "营业总收入", "type": "quantitative", "title": "营业总收入", "format": ",.2f" },
                { "field": "营业收入增长率", "type": "quantitative", "title": "增长率 (%)", "format": ".2f" }
            ]
        },
        "insights": [
            { "year": 2020, "describe": "2020年，营业收入增长率达到48.31%，这表明了一次显著的增长。这种强劲的增长可能与全球市场环境的变化以及公司对这些变化的有效响应有关。" }
        ]
    },
    '2020年，净利润的增长率达到了116.73%，这是一次显著的正增长，与营业利润的增长率相匹配。这种显著的增长可能是由于公司在市场和操作层面的有效管理以及成本控制的优化。': {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "2014-2022 年净利润增长率",
        "data": {
            "values": [
                { "年份": "2022", "净利润": 3695436000, "净利润增长率": 116.87 },
                { "年份": "2021", "净利润": 1703995000, "净利润增长率": -13.74 },
                { "年份": "2020", "净利润": 1975515000, "净利润增长率": 116.73 },
                { "年份": "2019", "净利润": 911526300, "净利润增长率": 11.53 },
                { "年份": "2018", "净利润": 817291300, "净利润增长率": -19.42 },
                { "年份": "2017", "净利润": 1014320000, "净利润增长率": 85.73 },
                { "年份": "2016", "净利润": 546129900, "净利润增长率": 28.17 },
                { "年份": "2015", "净利润": 426110800, "净利润增长率": 50.42 },
                { "年份": "2014", "净利润": 283286500, "净利润增长率": null }
            ]
        },
        "mark": "line",
        "encoding": {
            "x": { "field": "年份", "type": "ordinal", "title": "年份" },
            "y": { "field": "净利润增长率", "type": "quantitative", "title": "净利润增长率 (%)" },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "净利润", "type": "quantitative", "title": "净利润", "format": ",.2f" },
                { "field": "净利润增长率", "type": "quantitative", "title": "增长率 (%)", "format": ".2f" }
            ]
        },
        "width": "container",
        "height": "container",
        "title": "2014-2021年净利润增长率",
        "insights": [
            { "year": 2020, "describe": "2020年，净利润的增长率达到了116.73%，这是一次显著的正增长，与营业利润的增长率相匹配。" },
        ]
    },
    '2020年，营业利润增长率达到了106.94%，显示出显著的正增长。这一年度的大幅增长可能是由于多种因素的共同作用，包括公司营运效率的提升、市场需求增加、成本控制的改善或产品组合的优化等。': {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "2014-2022 年营业利润增长率",
        "data": {
            "values": [
                { "年份": "2022", "营业利润": 4141145000, "营业利润增长率": 118.23 },
                { "年份": "2021", "营业利润": 1897577000, "营业利润增长率": -12.49 },
                { "年份": "2020", "营业利润": 2168341000, "营业利润增长率": 106.94 },
                { "年份": "2019", "营业利润": 1047817000, "营业利润增长率": 14.84 },
                { "年份": "2018", "营业利润": 912426400, "营业利润增长率": -20.33 },
                { "年份": "2017", "营业利润": 1145292000, "营业利润增长率": 86.75 },
                { "年份": "2016", "营业利润": 613286500, "营业利润增长率": 38.26 },
                { "年份": "2015", "营业利润": 443563800, "营业利润增长率": 59.10 },
                { "年份": "2014", "营业利润": 278788500, "营业利润增长率": null }
            ]
        },
        "mark": "line",
        "encoding": {
            "x": { "field": "年份", "type": "ordinal", "title": "年份" },
            "y": { "field": "营业利润增长率", "type": "quantitative", "title": "营业利润增长率 (%)" },
            "tooltip": [
                { "field": "年份", "type": "ordinal", "title": "年份" },
                { "field": "营业利润", "type": "quantitative", "title": "营业利润", "format": ",.2f" },
                { "field": "营业利润增长率", "type": "quantitative", "title": "增长率 (%)", "format": ".2f" }
            ]
        },
        "width": "container",
        "height": "container",
        "title": "2014-2021年营业利润增长率",
        "insights": [
            { "year": 2020, "describe": "2020年，营业利润增长率达到了106.94%，显示出显著的正增长。" },
        ]
    }


};

const sendQuestion = async () => {
    if (userInput.value.trim()) {
        const question = userInput.value;
        const userMessage = { sender: 'user', content: question };
        messages.value.push(userMessage);
        userInput.value = ''; // 清空输入框

        let botReply; // 机器人的回复
        let chart_json; // 对应的 chart_json 数据

        // 判断输入内容并设置回复及对应的 chart_json
        if (question.toLowerCase().includes("根据公司2020年的5个财务比率，分别解析各比率的含义，并运用比率判断公司的财务情况")) {
            botReply = '2020年财务比率概览：权益乘数: 2.577，资产周转率: 0.689，销售净利率: 10.24%，资产净利率: 7.05%，净资产收益率: 18.18%，关键财务比率的总体统计（2014-2022年）。权益乘数（平均值: 2.44, 标准差: 0.34），资产周转率（平均值: 0.60, 标准差: 0.06），销售净利率（平均值: 8.94%, 标准差: 1.44%），资产净利率（平均值: 5.38%, 标准差: 1.13%），净资产收益率（平均值: 13.18%, 标准差: 3.57%）';
        } else if (question.toLowerCase().includes("2014-2022年，权益乘数的增长率如何变化？并具体评价2020年权益乘数的变化")) {
            botReply = '2020年权益乘数的增长率为-1.11%，表明这一年度权益乘数略有下降。权益乘数是财务杠杆的一种表现，它表示公司的总资产与股东权益的比率。权益乘数的降低可能意味着公司在该年度减少了负债程度或者增加了股东权益，这通常是为了增强公司的财务安全性和降低财务风险。';
        } else if (question.toLowerCase().includes("2014-2022年，营业收入的增长率如何变化？并具体评价2020年营业收入的变化")) {
            botReply = '2020年，营业收入增长率达到48.31%，这表明了一次显著的增长。这种强劲的增长可能与全球市场环境的变化以及公司对这些变化的有效响应有关。';
        } else if (question.toLowerCase().includes("2014-2022年，净利润的增长率如何变化？并具体评价2020年净利润的变化")) {
            botReply = '2020年，净利润的增长率达到了116.73%，这是一次显著的正增长，与营业利润的增长率相匹配。这种显著的增长可能是由于公司在市场和操作层面的有效管理以及成本控制的优化。';
        } else if (question.toLowerCase().includes("2014-2022年，营业利润的增长率如何变化？并具体评价2020年营业利润的变化")) {
            botReply = '2020年，营业利润增长率达到了106.94%，显示出显著的正增长。这一年度的大幅增长可能是由于多种因素的共同作用，包括公司营运效率的提升、市场需求增加、成本控制的改善或产品组合的优化等。';
        } else {
            botReply = '这是一个固定回复：感谢您的提问，如果需要更多帮助，请继续提问。';
        }

        // 从映射中获取 chart_json
        chart_json = chartJsonMapping[botReply] || null;

        const botMessage = { sender: 'bot', content: botReply };
        messages.value.push(botMessage);

        // 发送 chart_json 到 mainStore（如果有的话）
        if (chart_json) {
            store.addChartJson(chart_json);
        }

        scrollToBottom();
    }
}



// 滚动到容器底部
function scrollToBottom() {
    nextTick(() => {
        const wrapper = document.querySelector('.chat-box');
        if (wrapper) {
            wrapper.scrollTop = wrapper.scrollHeight;
        }
    });
}
</script>


<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 53vh;
    justify-content: center;
    background-color: #f5f5f5;
    width: 350px;
    margin-left: 5px;
    /* 向右移动5像素 */
}

.chat-title {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
    width: 350px;
    margin-left: 5px;
    /* 向右移动5像素 */
}

.chat-box {
    width: 320px;
    height: 335px;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    scroll-behavior: smooth;
}

.input-area {
    display: flex;
    justify-content: space-between;
    width: 320px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.input-box {
    flex-grow: 1;
    padding: 1px 20px;
    /* 减小上下的 padding 并增加左右的 padding */
    border: 2px solid #ccc;
    border-radius: 12px;
    width: 80%;
    /* 明确设置宽度，根据需要调整 */
    outline: none;
    transition: border-color 0.3s;
}

.input-box:focus {
    border-color: #1a73e8;
}

.send-button {
    padding: 6px 10px;
    background-color: #1a73e8;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s;
}

.send-button:hover {
    background-color: #0f5ac1;
}

.user-message p {
    background-color: #dcf8c6;
    color: #303030;
    border-radius: 18px 18px 0 18px;
    padding: 10px 15px;
    max-width: 95%;
    word-wrap: break-word;
    margin-bottom: 15px;
    align-self: flex-end;
    margin-right: 10px;
}

.bot-message p {
    background-color: #e5e5ea;
    color: #303030;
    border-radius: 18px 18px 18px 0;
    padding: 10px 15px;
    max-width: 95%;
    word-wrap: break-word;
    margin-bottom: 15px;
    align-self: flex-start;
    margin-left: 10px;
}

.upload-icon {
    position: absolute;
    right: 10px; /* 根据需要调整图标的精确位置 */
    top: 50%; /* 垂直居中 */
    transform: translateY(-50%); /* 确保图标完全居中 */
    cursor: pointer;
    width: 24px; /* 图标的大小，根据实际情况调整 */
    height: 24px;
}

.file-upload {
    display: none; /* 隐藏标准文件上传控件 */
}

/* .file-upload {
    border: 2px solid #ccc;
    border-radius: 12px;
    padding: 6px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
    transition: border-color 0.3s;
}

.file-upload:hover {
    border-color: #1a73e8;
} */
</style>

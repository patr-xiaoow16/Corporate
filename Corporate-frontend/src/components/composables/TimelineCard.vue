<template>
    <div class="card">
        <div class="timeline-header">
            Milestones
        </div>
        <div class="timeline-container">
            <a-timeline>
                <!-- 2014 -->
                <a-timeline-item color="green">
                    <div class="timeline-content" @dblclick.stop="handleClick('2014')">
                        <h1>2014</h1>
                        <input v-if="timelineData['2014'].editing" v-model="timelineData['2014'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2014'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2014'].details" :key="index">
                            <p v-if="!timelineData['2014'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2014'].editing" @click.stop="timelineData['2014'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2015 -->
                <a-timeline-item color="red">
                    <div class="timeline-content" @dblclick.stop="handleClick('2015')">
                        <h1>2015</h1>
                        <input v-if="timelineData['2015'].editing" v-model="timelineData['2015'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2015'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2015'].details" :key="index">
                            <p v-if="!timelineData['2015'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2015'].editing" @click.stop="timelineData['2015'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2016 -->
                <a-timeline-item>
                    <div class="timeline-content" @dblclick.stop="handleClick('2016')">
                        <h1>2016</h1>
                        <input v-if="timelineData['2016'].editing" v-model="timelineData['2016'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2016'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2016'].details" :key="index">
                            <p v-if="!timelineData['2016'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2016'].editing" @click.stop="timelineData['2016'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2017 -->
                <a-timeline-item color="green">
                    <div class="timeline-content" @dblclick.stop="handleClick('2017')">
                        <h1>2017</h1>
                        <input v-if="timelineData['2017'].editing" v-model="timelineData['2017'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2017'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2017'].details" :key="index">
                            <p v-if="!timelineData['2017'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2017'].editing" @click.stop="timelineData['2017'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2018 -->
                <a-timeline-item color="red">
                    <div class="timeline-content" @dblclick.stop="handleClick('2018')">
                        <h1>2018</h1>
                        <input v-if="timelineData['2018'].editing" v-model="timelineData['2018'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2018'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2018'].details" :key="index">
                            <p v-if="!timelineData['2018'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2018'].editing" @click.stop="timelineData['2018'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2019 -->
                <a-timeline-item>
                    <div class="timeline-content" @dblclick.stop="handleClick('2019')">
                        <h1>2019</h1>
                        <input v-if="timelineData['2019'].editing" v-model="timelineData['2019'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2019'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2019'].details" :key="index">
                            <p v-if="!timelineData['2019'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2019'].editing" @click.stop="timelineData['2019'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2020 -->
                <a-timeline-item color="green">
                    <div class="timeline-content" @dblclick.stop="handleClick('2020')">
                        <h1>2020</h1>
                        <input v-if="timelineData['2020'].editing" v-model="timelineData['2020'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2020'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2020'].details" :key="index">
                            <p v-if="!timelineData['2020'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2020'].editing" @click.stop="timelineData['2020'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2021 -->
                <a-timeline-item color="red">
                    <div class="timeline-content" @dblclick.stop="handleClick('2021')">
                        <h1>2021</h1>
                        <input v-if="timelineData['2021'].editing" v-model="timelineData['2021'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2021'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2021'].details" :key="index">
                            <p v-if="!timelineData['2021'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2021'].editing" @click.stop="timelineData['2021'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>

                <!-- 2022 -->
                <a-timeline-item>
                    <div class="timeline-content" @dblclick.stop="handleClick('2022')">
                        <h1>2022</h1>
                        <input v-if="timelineData['2022'].editing" v-model="timelineData['2022'].event" style="width: 100%;">
                        <h3 v-else>{{ timelineData['2022'].event }}</h3>
                        <div v-for="(detail, index) in timelineData['2022'].details" :key="index">
                            <p v-if="!timelineData['2022'].editing">{{ detail.text }}</p>
                            <input v-else v-model="detail.text" style="width: 100%;">
                        </div>
                        <!-- 加入保存按钮确保编辑完成后用户确认 -->
                        <div class="button-wrapper" style="align-self: flex-end;">
                            <button v-if="timelineData['2022'].editing" @click.stop="timelineData['2022'].editing = false" class="save-button">
                                确定
                            </button>
                        </div>
                    </div>
                </a-timeline-item>
            </a-timeline>
        </div>
    </div>
</template>

<script setup>
// import { CheckCircleTwoTone, WarningTwoTone, ClockCircleOutlined } from '@ant-design/icons-vue';
import { Modal as AModal, Textarea as ATextarea, Timeline as ATimeline, TimelineItem as ATimelineItem } from 'ant-design-vue';
import { ref, reactive } from 'vue';
import { nextTick } from 'vue';
import { useSummaryStore } from '@/stores/summaryStore';
import { computed } from 'vue';


const summarystore = useSummaryStore();

const timelineData = reactive({
  '2014': { 
    event: ' ', 
    details: [
      { text: ' ' }
    ],
    editing: false // 新增编辑状态
  },
  '2015': { 
    event: '意外费用爆增', 
    details: [
      { text: '由于非预期事件，营业外支出异常增加2374.85%，导致财务压力增大。' },
    ],
    editing: false // 新增编辑状态
  },
  '2016': { 
    event: '股东信心增强', 
    details: [
      { text: '股东权益显著增加110.30%，体现出市场对公司长期增长潜力的认可。' },
    ],
    editing: false // 新增编辑状态
  },
  '2017': { 
    event: '盈利能力大幅提升', 
    details: [
      { text: '营业利润增长86.75%，得益于核心业务的持续优化与市场扩展。”' },
    ],
    editing: false // 新增编辑状态
  },
  '2018': { 
    event: '盈利效率受挑战', 
    details: [
      { text: '尽管面临市场波动，净资产收益率下降了30.96%，突显出成本控制的必要性。' },
    ],
    editing: false // 新增编辑状态
  },
  '2019': { 
    event: '管理成本急剧上升', 
    details: [
      { text: '营业外支出增加688.47%，反映出非核心业务的控制难度加大。' },
    ],
    editing: false // 新增编辑状态
  },
  '2020': { 
    event: '经济复苏带动利润', 
    details: [
      { text: '全球经济回暖，公司净利润提升116.73%，显示出强劲的市场恢复力。' },
    ],
    editing: false // 新增编辑状态
  },
  '2021': { 
    event: '资产规模迅速扩张', 
    details: [
      { text: '流动资产增长56.14%，凸显公司在扩大市场份额和资本运作的积极成效。' },
    ],
    editing: false // 新增编辑状态
  },
  '2022': { 
    event: '税务负担剧增', 
    details: [
      { text: '所得税增长132.42%，反映了税率变动及业务增长对财务的双重影响。' },
    ],
    editing: false // 新增编辑状态
  },
  
});



const editMode = ref(false);

const handleClick = (year) => {
    console.log(`Clicked on ${year}`);
    timelineData[year].editing = !timelineData[year].editing; // 切换当前年份的编辑状态
}


// const handleClick = (year, event) => {
//     console.log(`Clicked on ${event} in ${year}`);
//     // if (contents[year]) {
//     //     summarystore.updateChartData(year, event, contents[year].data); // 更新状态管理中的数据
//     //     console.log("----------year----------", year);
//     // }
    
// }

</script>

<style scoped>
.timeline-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #f0f2f5;
    border-radius: 5px;
    margin-left: 1px;
    cursor: pointer;
    /* 该元素是可点击的 */
}

h1 {
    font-size: 14px;
    /* 较大的字体大小 */
    color: #2c3e50;
    /* 深蓝色 */
    font-weight: bold;
    /* 加粗 */
    margin-top: 0;
    margin-bottom: 2px;
    /* 添加底部间隔 */
}

h3 {
    font-size: 14px;
    /* 较小的字体大小 */
    color: #333;
    /* 深灰色 */
    font-weight: normal;
    /* 正常字体 */
    margin-top: 0;
    margin-bottom: 2px;
    /* 较小的底部间隔 */
}

.card {
    border: 2px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    height: 740px;

}

.timeline-header {
    margin-bottom: 10px;
    padding: 2px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #eee;
}

.timeline-container {
    max-height: 660px;
    overflow-y: auto;
    /* 允许垂直滚动 */
    padding-right: 5px;
    /* 防止内容紧贴滚动条 */
}

.save-button {
    padding: 4px 8px;
    font-size: 10px;
    color: white;
    background-color: #9fc3fc; /* 绿色背景 */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, transform 0.2s;
}

.save-button:hover {
    background-color: #96bfff; /* 鼠标悬停时更深的蓝色 */
    transform: translateY(-2px); /* 轻微向上移动效果 */
}

.save-button:active {
    background-color: #96bfff; /* 鼠标点击时的颜色 */
    transform: translateY(1px); /* 点击时轻微下沉效果 */
}

.button-wrapper {
    align-self: flex-end;
    margin-top: auto; /* 确保它始终在容器底部 */
}

</style>
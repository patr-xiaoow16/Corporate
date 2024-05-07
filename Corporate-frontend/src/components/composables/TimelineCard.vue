<template>
    <div class="card">
        <div class="timeline-header">
            Milestones
        </div>
        <div class="timeline-container">
            <a-timeline>
                <a-timeline-item color="green" @click="editContent('initiation')">
                    <div class="timeline-content" @click.stop="handleClick('Project Initiation')">
                        <h1>2014</h1>
                        <h3>Initiation</h3>
                        <p>{{ contents.initiation }}</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="red">
                    <div class="timeline-content" @click="handleClick('Challenges')">
                        <h1>2015</h1>
                        <h3>Challenges</h3>
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item>
                    <div class="timeline-content" @click="handleClick('Technical Review')">
                        <h1>2016</h1>
                        <h3>Technical Review</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2016</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2017</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2018</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2019</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2020</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2021</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>

                <a-timeline-item color="gray">
                    <div class="timeline-content" @click="handleClick('Ongoing Tests')">
                        <h1>2022</h1>
                        <h3>Ongoing Tests</h3>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </div>
                </a-timeline-item>
            </a-timeline>
        </div>
    </div>
    <a-modal v-model:open="isModalVisible" title="Edit Content" @ok="saveContent" @cancel="handleCancel">
        <a-textarea v-model="currentContent" :rows="4" />
    </a-modal>
</template>

<script setup>
// import { CheckCircleTwoTone, WarningTwoTone, ClockCircleOutlined } from '@ant-design/icons-vue';
import { Modal as AModal, Textarea as ATextarea, Timeline as ATimeline, TimelineItem as ATimelineItem } from 'ant-design-vue';
import { ref, reactive } from 'vue';
import { nextTick } from 'vue';


// 点击内容框
const handleClick = (item) => {
    console.log(`Clicked on ${item}`);
    // 定义点击事件

}

const contents = reactive({
    initiation: 'Create a services site 2015-09-01',
    challenges: 'Solve initial network problems 1, 2, 3',
    technicalReview: 'Technical testing 1, 2, 3'
});

// 内容变量
const isModalVisible = ref(false);
const currentContent = ref('');
const currentEditingKey = ref('');


// 编辑内容函数
const editContent = (key) => {
    currentEditingKey.value = key;
    console.log("-----------currentEditingKey----------", currentEditingKey.value)
    currentContent.value = contents[key]; // 直接使用 key 访问 reactive 对象
    console.log("-----------currentContent----------", currentContent.value)
    isModalVisible.value = true;
};

// 保存内容函数
const saveContent = () => {
    contents[currentEditingKey.value] = currentContent.value; // 更新内容
    console.log('Updated contents:', contents); // 查看更新后的数据

    isModalVisible.value = false;
    nextTick(() => {
        console.log("Updates should now be reflected in the DOM.");
    });
};

// 取消编辑
const handleCancel = () => {
    isModalVisible.value = false;
}
</script>

<style scoped>
.timeline-content {
    padding: 10px;
    background-color: #f0f2f5;
    border-radius: 5px;
    margin-left: 1px;
    cursor: pointer;
    /* 该元素是可点击的 */
}

h1 {
    font-size: 16px; /* 较大的字体大小 */
    color: #2c3e50; /* 深蓝色 */
    font-weight: bold; /* 加粗 */
    margin-top: 0;
    margin-bottom: 10px; /* 添加底部间隔 */
}

h3 {
    font-size: 16px; /* 较小的字体大小 */
    color: #333; /* 深灰色 */
    font-weight: normal; /* 正常字体 */
    margin-top: 0;
    margin-bottom: 5px; /* 较小的底部间隔 */
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
</style>
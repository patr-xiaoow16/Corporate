<template>
  <div class="card-header">
    <p>探索指南</p>
  </div>
  <div class="markdown-area p-4">
    <div v-html="renderedMarkdown" class="markdown-text p-2"></div>
  </div>
  
</template>

<script setup>
import { ref, computed } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const markedText = ref('### 第一步：总体概览\n1. 观察绝对值\n2. 分析趋势\n3. 选择关键年份\n### 第二步：深入某一年的杜邦分析\n1. 选择年份\n2. 观察杜邦分析图\n3. 分析杜邦指标\n4. 观察ROE趋势\n5. 评估指标变化趋势\n6. 计算指标对ROE的影响\n### 第三步：继续探索\n- 基于第二步中的发现，选择另一个感兴趣的年份进行更深入的探索，探索方式同第二步。\n### 第四步：整理与分析\n- 整理并复审时间轴卡片，选择性发现和分析结果。');
const renderedMarkdown = computed(() => {
  const html = DOMPurify.sanitize(marked(markedText.value));
  return `${html}`;
});
</script>

<style scoped>
.card-header {
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.markdown-area {
  background-color: #f5f5f5;
}

.markdown-text {
  border: 1px solid #ccc;
  background-color: #fff;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}
</style>
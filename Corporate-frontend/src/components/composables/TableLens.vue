<template>
  <div aria-label="A complete example of page header">
    <el-card class="box-card">
      <el-switch v-model="value1" style="margin-bottom: 5px;"></el-switch>
      <el-page-header v-show="value1" @back="onBack">
      <!-- <el-page-header @back="onBack"> -->
        <!-- <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="./page-header.html">route 1</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>route 2</el-breadcrumb-item>
        </el-breadcrumb>
      </template> -->

        <template #content>
          <div class="flex items-center">
            <el-avatar class="mr-3" :size="32"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="text-large font-600 mr-3"> 阳光电源股份有限公司 </span>
            <!-- <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
              阳光电源股份有限公司
            </span> -->
            <!-- <el-tag>Default</el-tag> -->
          </div>
        </template>

        <!-- <template #extra>
        <div class="flex items-center">
          <el-button>Print</el-button>
          <el-button type="primary" class="ml-2">Edit</el-button>
        </div>
      </template> -->

        <el-descriptions :column="1" size="small" class="mt-4">
          <el-descriptions-item label="法定代表人">
            曹仁贤
          </el-descriptions-item>
          <el-descriptions-item label="统一社会信用代码">
            913401001492097421
          </el-descriptions-item>
          <el-descriptions-item label="所属地区">安徽省合肥市合肥高新技术产业开发区</el-descriptions-item>
          <el-descriptions-item label="成立日期">2007-07-11</el-descriptions-item>
          <el-descriptions-item label="注册资本">148515.0984万元人民币</el-descriptions-item>
          <el-descriptions-item label="实缴资本">148515.0984万元人民币</el-descriptions-item>
          <!-- <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item> -->
          <el-descriptions-item
            label="经营范围">新能源发电设备、分布式电源、及其配套产品的研制、生产、销售、服务、系统集成及技术转让；新能源发电工程、制氢系统及新能源汽车充换电设施的设计、开发、投资、建设和经营；电力电子设备、电气传动及控制设备、不间断电源、储能电源、制氢设备、新能源汽车充换电设备及系统、电能质量控制装置的研制、生产及销售；货物或技术进出口（国家禁止或涉及行政审批的货物和技术进出口除外）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</el-descriptions-item>
        </el-descriptions>
      </el-page-header>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import { ref } from 'vue'

const value1 = ref(false) // false默认情况下为关

const onBack = () => {
  notify('Back')
  console.log('go back')
}
</script>
<style scoped>
.text-large {
    white-space: nowrap; /* 阻止换行 */
}

.text-sm {
    white-space: nowrap; /* 阻止换行 */
}
</style>
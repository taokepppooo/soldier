<template>
  <el-tabs v-model="activeName">
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.label"
      :label="tab.label"
      :name="tab.name"
    >
      <card-list></card-list>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import CardList from './cardList.vue'

const tabs = [
  {
    label: '推荐',
    name: 'recommend',
  },
  {
    label: '最新',
    name: 'latest',
  },
  {
    label: '最热',
    name: 'hot',
  },
]

const activeName = ref(tabs[0]?.name)
</script>
<style lang="less" scoped>
:deep(.el-tabs__header) {
  .el-tabs__nav-wrap::after {
    width: 0%;
  }

  .el-tabs__active-bar {
    height: 0;
  }
}

:deep(.el-tabs__content) {
  overflow: unset;
}
</style>

<template>
  <el-tabs v-model="activeName">
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.label"
      :label="tab.label"
      :name="tab.name"
    >
      <ArticleCardList></ArticleCardList>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { toRem } from '@/utils/style'

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

const activeName = ref(tabs[0]!.name)

const tabFontSize = ref(toRem(14))
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

:deep(.el-tabs__item) {
  font-weight: 600;
  font-size: v-bind(tabFontSize);
}
</style>

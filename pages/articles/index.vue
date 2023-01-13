<template>
  <el-row :gutter="24">
    <el-col class=":uno: mb-20" :xs="24" :sm="24" :md="24" :lg="12" :xl="9">
      <change-color-large-cards></change-color-large-cards>
    </el-col>
    <el-col class=":uno: mb-20" :xs="24" :sm="24" :md="24" :lg="12" :xl="15">
      <change-color-small-cards></change-color-small-cards>
    </el-col>
  </el-row>
  <el-row :gutter="24">
    <el-col class=":uno: mt-30" :xs="24" :sm="24" :md="24" :lg="12" :xl="15">
      <article-list></article-list>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import changeColorLargeCards from './modules/changeColorLargeCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
import articleList from './modules/articleList.vue'
</script>

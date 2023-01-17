<template>
  <el-row :gutter="24">
    <el-col class="mb-20" :xs="24" :sm="24" :md="24" :lg="12" :xl="9">
      <article-change-color-large-cards></article-change-color-large-cards>
    </el-col>
    <el-col class="mb-20" :xs="24" :sm="24" :md="24" :lg="12" :xl="15">
      <article-change-color-small-cards></article-change-color-small-cards>
    </el-col>
  </el-row>
  <el-row :gutter="24" class="mt-30 col-gap-20 justify-between">
    <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="16">
      <article-list></article-list>
    </el-col>
    <el-col class="hidden-md-and-down" :lg="8" :xl="7">
      <div></div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import 'element-plus/theme-chalk/display.css'
</script>

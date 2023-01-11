<template>
  <el-row :gutter="24">
    <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
      <change-color-large-cards></change-color-large-cards>
    </el-col>
    <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
      <change-color-small-cards></change-color-small-cards>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import changeColorLargeCards from './modules/changeColorLargeCards.vue'
import changeColorSmallCards from './modules/changeColorSmallCards.vue'
</script>

<!--
 * @Author: taoke
 * @Date: 2022-06-02 14:34:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-06 10:19:22
 * @Description:
 * @FilePath: \soldier\pages\index.vue
-->
<template>
  <div>
    <NuxtLayout name="s-header">
      <el-button>2222</el-button>
      The rest of the page1
    </NuxtLayout>
    <NuxtLayout name="s-main">
      The rest of the page2
    </NuxtLayout>
    <NuxtLayout name="s-footer">
      The rest of the page3
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import {
  ElButton,
} from "element-plus/dist/index.full.js"
</script>
<style lang="less" scoped></style>

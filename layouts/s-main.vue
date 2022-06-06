<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-06 09:10:51
 * @Description: 
 * @FilePath: \soldier\layouts\main.vue
-->
<template>
  <el-main>
    <slot />
  </el-main>
</template>

<script setup lang="ts">
import {
  ElMain,
} from "element-plus/dist/index.full.js"
</script>
<style lang="less" scoped></style>
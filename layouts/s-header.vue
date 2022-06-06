<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:08
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-06 09:10:44
 * @Description: 
 * @FilePath: \soldier\layouts\header.vue
-->
<template>
  <el-header>
    <slot />
  </el-header>
</template>

<script setup lang="ts">
import {
  ElHeader,
} from "element-plus/dist/index.full.js"
</script>
<style lang="less" scoped></style>
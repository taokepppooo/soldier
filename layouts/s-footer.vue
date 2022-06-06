<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:56
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-06 09:45:21
 * @Description: 
 * @FilePath: \soldier\layouts\s-footer.vue
-->
<template>
  <el-footer>
    <slot />
  </el-footer>
</template>

<script setup lang="ts">
import {
  ElFooter,
} from "element-plus/dist/index.full.js"
</script>
<style lang="less" scoped></style>

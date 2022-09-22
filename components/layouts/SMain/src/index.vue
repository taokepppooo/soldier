<template>
  <el-main class=":uno: mt-18 sc-web-main">
    <slot />
  </el-main>
</template>

<script setup lang="ts">
import { ElMain } from 'element-plus'
</script>
<style lang="less" scoped>
.el-main {
  padding: unset;
}
</style>

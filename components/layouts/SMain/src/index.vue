<template>
  <ElMain class=":uno: mt-12 sc-web-main">
    <slot />
  </ElMain>
</template>

<script setup lang="ts">
import { ElMain } from 'element-plus'
</script>
<style lang="less" scoped>
.el-main {
  padding: unset;
}
</style>

<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:08
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-07 18:17:49
 * @Description:
 * @FilePath: \soldier\layouts\s-header.vue
-->
<template>
  <ElHeader>
    <slot />
  </ElHeader>
</template>

<script setup lang="ts">
import { ElHeader } from 'element-plus/dist/index.full.js'
</script>
<style lang="less" scoped></style>

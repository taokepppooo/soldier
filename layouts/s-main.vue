<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-07 15:55:31
 * @Description:
 * @FilePath: \soldier\layouts\s-main.vue
-->
<template>
  <ElMain>
    <slot />
  </ElMain>
</template>

<script setup lang="ts">
import { ElMain } from 'element-plus/dist/index.full.js'
</script>
<style lang="less" scoped></style>

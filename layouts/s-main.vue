<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-20 11:02:46
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
<style scoped></style>

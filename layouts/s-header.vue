<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:08
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-20 14:48:48
 * @Description:
 * @FilePath: \soldier\layouts\s-header.vue
-->
<template>
  <ElHeader>
    <div class=":uno: h-60 min-w-1280 w-80% m-a">
      <slot />
    </div>
  </ElHeader>
</template>

<script setup lang="ts">
import { ElHeader } from 'element-plus/dist/index.full.js'
</script>
<style scoped></style>

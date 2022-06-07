<!--
 * @Author: taoke
 * @Date: 2022-06-02 13:56:56
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-07 18:17:46
 * @Description:
 * @FilePath: \soldier\layouts\s-footer.vue
-->
<template>
  <ElFooter>
    <slot />
  </ElFooter>
</template>

<script setup lang="ts">
import { ElFooter } from 'element-plus/dist/index.full.js'
</script>
<style lang="less" scoped></style>

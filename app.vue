<!--
 * @Author: taoke
 * @Date: 2022-05-19 18:09:01
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-07 18:18:13
 * @Description:
 * @FilePath: \soldier\app.vue
-->
<template>
  <ElConfigProvider :locale="locale">
    <NuxtPage />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus/dist/index.full.js'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
useHead({
  title: 'Sky Lark',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

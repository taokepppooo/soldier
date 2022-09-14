<template>
  <ElConfigProvider :locale="locale">
    <NuxtLayout name="s-header" class="header-shadow">
      <nav class=":uno: flex items-center h-60">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </nav>
    </NuxtLayout>
    <NuxtLayout name="s-main">
      <NuxtPage />
    </NuxtLayout>
    <NuxtLayout name="s-footer">网站页脚</NuxtLayout>
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

<style scoped>
.header-shadow {
  box-shadow: 0 0 18px rgb(0 0 0 / 6%);
}
</style>

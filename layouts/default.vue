<template>
  <div>
    <ElConfigProvider :locale="locale">
      <SHeader></SHeader>
      <SMain>
        <slot />
      </SMain>
      <SFooter></SFooter>
    </ElConfigProvider>
  </div>
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

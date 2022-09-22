<template>
  <div>
    <el-config-provider :locale="locale">
      <SHeader></SHeader>
      <SMain>
        <slot />
      </SMain>
      <SFooter></SFooter>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
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

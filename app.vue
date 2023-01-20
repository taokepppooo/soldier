<template>
  <ElConfigProvider :locale="locale">
    <el-scrollbar height="100vh">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </el-scrollbar>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider, ElScrollbar } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn
</script>

<template>
  <div>
    <NuxtLink
      v-for="n in nav"
      :key="n.link"
      :to="n.link"
      class="color-#757575 spacing-4 hover:cr-color-main text-15 font-600 p-x-18 font-noto"
      exact-active-class="cr-color-main"
    >
      {{ n.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from './types'

// TODO 接口
const nav = reactive<NavItem[]>([
  {
    link: '/',
    name: '首页',
  },
  {
    link: '/tools',
    name: '工具',
  },
  {
    link: '/articles',
    name: '文章',
  },
  {
    link: '/hot',
    name: '榜单',
  },
])
</script>

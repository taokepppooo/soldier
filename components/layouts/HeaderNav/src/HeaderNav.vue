<!--
 * @Author: taoke
 * @Date: 2022-06-08 13:14:41
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-29 15:44:43
 * @Description:
 * @FilePath: \soldier\components\HeaderNav.vue
-->
<template>
  <div>
    <NuxtLink v-for="n in nav" :key="n.link" :to="n.link" class="custom-link">
      {{ n.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const nav = ref([
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

<style scoped lang="less">
.custom-link {
  --at-apply: 'text-15 font-600 p-x-18 font-noto';
  letter-spacing: 1rem;
  color: #757575;

  &:hover {
    --at-apply: 'cr-color-main';
  }
}
</style>

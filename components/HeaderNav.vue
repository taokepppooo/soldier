<!--
 * @Author: taoke
 * @Date: 2022-06-08 13:14:41
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-21 18:22:04
 * @Description:
 * @FilePath: \soldier\components\HeaderNav.vue
-->
<template>
  <div>
    <NuxtLink to="/" class="custom-link">首页</NuxtLink>
    <NuxtLink to="/tools" class="custom-link">工具</NuxtLink>
    <NuxtLink to="/article" class="custom-link">文章</NuxtLink>
    <NuxtLink to="/hot" class="custom-link">榜单</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.custom-link {
  @apply text-15 font-600 p-x-18 font-noto;
  letter-spacing: 1rem;
}
</style>

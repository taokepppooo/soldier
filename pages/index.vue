<!--
 * @Author: taoke
 * @Date: 2022-06-02 14:34:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-07 18:17:52
 * @Description:
 * @FilePath: \soldier\pages\index.vue
-->
<template>
  <div>
    <NuxtLayout name="s-header">
      <nav class=":uno: flex items-center h-15">
        <HeaderLogo></HeaderLogo>
        <div>
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/tools/text-convert">工具</NuxtLink>
        </div>
      </nav>
    </NuxtLayout>
    <NuxtLayout name="s-main"> The rest of the page2 </NuxtLayout>
    <NuxtLayout name="s-footer"> The rest of the page3 </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

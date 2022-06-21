<!--
 * @Author: taoke
 * @Date: 2022-06-02 14:34:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-20 14:46:14
 * @Description:
 * @FilePath: \soldier\pages\index.vue
-->
<template>
  <div>
    <NuxtLayout name="s-header">
      <nav class=":uno: flex items-center h-60">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </nav>
    </NuxtLayout>
    <NuxtLayout name="s-main"> The rest of the page2 </NuxtLayout>
    <NuxtLayout name="s-footer"> The rest of the page3 </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<!--
 * @Author: taoke
 * @Date: 2022-06-07 16:36:54
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-16 17:50:18
 * @Description:
 * @FilePath: \soldier\components\HeaderLogo.vue
-->
<template>
  <div>
    <NuxtLink to="/" class=":uno: sc-flex-xy">
      <svg
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        height="32"
        width="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>SkyLark</title>
        <circle
          cx="16"
          cy="16"
          r="16"
          class=":uno: cr-fill-color-main"
        ></circle>
      </svg>
      <span class=":uno: text-5">SkyLark</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

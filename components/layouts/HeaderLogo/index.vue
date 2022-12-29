<template>
  <div class="logo">
    <NuxtLink to="/" class=":uno: sc-flex-center-y-start-x logo__wrapper">
      <svg
        class="wrapper__logo"
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
      <span class=":uno: font-roboto wrapper__title">SkyLark</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.logo {
  .logo__wrapper {
    width: 180px;

    .wrapper__logo {
      margin-right: 15px;
    }

    .wrapper__title {
      font-size: 24px;
    }
  }
}
</style>

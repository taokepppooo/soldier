<template>
  <div class="main">
    <NuxtLayout name="container">
      <div class="main__wrapper">
        <slot />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.main {
  .main__wrapper {
    margin-top: 18px;
  }
}
</style>

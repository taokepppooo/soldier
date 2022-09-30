<template>
  <div class="header-shadow">
    <NuxtLayout name="container">
      <nav class=":uno: flex items-center h-60">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </nav>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.header-shadow {
  box-shadow: 0 0 18px rgb(0 0 0 / 6%);
}
</style>

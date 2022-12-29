<template>
  <div class="header">
    <NuxtLayout name="container">
      <nav class=":uno: flex items-center nav">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </nav>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.header {
  box-shadow: 0 0 18px rgb(0 0 0 / 6%);

  .nav {
    height: 60px; /*off*/
  }
}
</style>

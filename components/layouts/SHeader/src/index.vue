<template>
  <el-header>
    <div class="header-shadow">
      <nav class=":uno: flex items-center h-60 sc-web-main">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
      </nav>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ElHeader } from 'element-plus'
</script>
<style lang="less" scoped>
.el-header {
  padding: unset;
}

.header-shadow {
  box-shadow: 0 0 18px rgb(0 0 0 / 6%);
}
</style>

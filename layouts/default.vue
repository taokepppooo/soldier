<template>
  <div>
    <SHeader></SHeader>
    <SMain>
      <slot />
    </SMain>
    <SFooter></SFooter>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sky Lark',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

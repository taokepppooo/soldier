<template>
  <SSwiper :slides="slides" :options="options"></SSwiper>
</template>

<script setup lang="ts">
// TODO 接口获取
const slides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
]

const options = {
  height: '100rem',
}
</script>

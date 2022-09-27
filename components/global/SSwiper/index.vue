<template>
  <div>
    <swiper
      :space-between="50"
      loop
      :autoplay="autoplay"
      :pagination="pagination"
      navigation
      :modules="modules"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { autoplay, pagination, modules } from './hooks/useSwiperOptions'

// TODO 接口获取
const slides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
]
</script>
<style lang="less" scoped>
@import '@/components/style/swiper.less';
</style>

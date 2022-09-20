<template>
  <div>
    <swiper
      :space-between="30"
      loop
      :pagination="{
        clickable: true,
      }"
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
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@/components/style/swiper.less'

const modules = [Autoplay, Pagination, Navigation]

// TODO 接口获取
const slides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
]
</script>
<style lang="less" scoped></style>

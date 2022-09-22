<template>
  <div>
    <swiper
      :space-between="50"
      loop
      :autoplay="autoplay"
      :pagination="pagination"
      :navigation="navigation"
      :modules="modules"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" />
      </swiper-slide>
      <button type="button" class="swiper-button-prev">
        <el-icon><ArrowLeft /></el-icon>
      </button>
      <button type="button" class="swiper-button-next">
        <el-icon><ArrowRight /></el-icon>
      </button>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  autoplay,
  pagination,
  navigation,
  modules,
} from '../hooks/useSwiperOptions'

// TODO 接口获取
const slides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
]
</script>
<style lang="less" scoped>
@import url('@/components/style/swiper.less');
</style>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    loop
    :autoplay="autoplay"
    :pagination="pagination"
    navigation
    :modules="modules"
  >
    <swiper-slide v-for="(slide, index) in props.slides" :key="index">
      <nuxt-img :src="slide.src" />
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { autoplay, pagination, modules } from './hooks/useSwiperOptions'
import { Props } from './types/props'

const props = defineProps(Props)

const height = props.options!.height
</script>
<style lang="less" scoped>
@import './style/swiper.less';

.swiper {
  height: v-bind(height);
}
</style>

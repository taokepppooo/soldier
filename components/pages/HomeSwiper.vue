<template>
  <div>
    <el-skeleton class="h-400" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" class="h-400" />
      </template>
      <template #default>
        <SSwiper :slides="slides" :options="options"></SSwiper>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ElSkeleton, ElSkeletonItem } from 'element-plus'
// TODO 接口获取
const slides = [
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg' },
]

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)

const options = {
  height: '100rem',
}
</script>

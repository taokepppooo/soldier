<template>
  <div class="flex items-center col-gap-12">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="flex items-center text-14 h-37">
          <el-skeleton-item class="py-8 radius-12 w-50" />
          <el-skeleton-item class="radius-50% mx-14 w-30 h-30" />
          <el-skeleton-item class="w-200" />
        </div>
      </template>
      <template #default>
        <div
          class="py-8 px-14 text-14 spacing-[1.5] bg-#d62164 radius-12 inline-block c-#fff"
        >
          {{ options.tag }}
        </div>
        <nuxt-img
          class="radius-50%"
          :src="options.headSource"
          width="30"
          height="30"
        />
        <div class="flex col-gap-5 c-#fff text-14" :style="options.tagStyle">
          <span>{{ options.username }}</span>
          <span>•</span>
          <span>{{ options.publishTime }}</span>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ElSkeleton, ElSkeletonItem } from 'element-plus'
import { ArticleInfo } from '@/composables/article/articleLargeCardProps'
import type { PropType } from 'vue'
const props = defineProps({
  options: Object as PropType<ArticleInfo>,
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)

const options = props.options!
</script>

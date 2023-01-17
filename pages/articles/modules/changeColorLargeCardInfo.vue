<template>
  <div class="flex items-center col-gap-12">
    <div
      class="py-8 px-14 text-14 spacing-[1.5] bg-#d62164 radius-12 inline-block color-#fff"
    >
      {{ options.tag }}
    </div>
    <nuxt-img
      class="radius-50%"
      :src="options.headSource"
      width="30"
      height="30"
    />
    <div class="flex col-gap-5 color-#fff text-14">
      <span>{{ options.username }}</span>
      <span>•</span>
      <span>{{ options.publishTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArticleInfo } from '@/composables/article/articleLargeCardProps'
import type { PropType } from 'vue'
const props = defineProps({
  options: Object as PropType<ArticleInfo>,
})

const options = props.options!
</script>

<template>
  <ArticleCard
    class="shadow-[0_0_5rem_hsla(0deg,0%,46%,5%)] hover:shadow-[0_5rem_7.5rem_hsl(0deg,0%,46%,15%)]"
    :options="options"
  >
    <nuxt-img class="radius-50%" :src="img.src" width="30" height="30" />
  </ArticleCard>
</template>

<script setup lang="ts">
import type { ArticleListOptions, Img } from '@/composables/article/articleList'
import type { PropType } from 'vue'
import type { ArticleCardOptions } from '@/components/types/cardProps'

const props = defineProps({
  articleCard: Object as PropType<ArticleListOptions>,
})

const img = reactive<Img>(props!.articleCard!.img!)

const options = reactive<ArticleCardOptions>({
  height: 203.6,
  customBg: '#fff',
  scale: '1.02',
})
</script>

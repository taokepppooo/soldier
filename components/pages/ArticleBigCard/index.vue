<template>
  <ArticleCard :options="props.cardOptions">
    <nuxt-img
      format="webp"
      loading="lazy"
      :width="width"
      :height="height"
      src="https://sky-lark-public.oss-cn-qingdao.aliyuncs.com/ux-hybrid.svg"
    />
  </ArticleCard>
</template>

<script setup lang="ts">
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { ArticleCardContentOptions } from '@/components/types/pages/articleBigCardProps'
import type { PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardsOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const width = ref(props.contentOptions?.img?.width)
const height = ref(props.contentOptions?.img?.height)
</script>
<style lang="less" scoped></style>

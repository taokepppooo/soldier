<template>
  <ArticleCard :options="props.cardOptions">
    <div class="bg" :style="bgStyle"></div>
  </ArticleCard>
</template>

<script setup lang="ts">
import { toPx } from '@/utils/style'
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { ArticleCardContentOptions } from '@/components/types/pages/articleBigCardProps'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardsOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const width = toPx(props.contentOptions!.img!.width)
const height = toPx(props.contentOptions!.img!.height)
const source = ref(props.contentOptions!.img!.source)

const bgStyle = reactive<CSSProperties>({
  width,
  height,
  'background-image': source.value ? `url('${source.value}')` : undefined,
})
</script>
<style lang="less" scoped></style>

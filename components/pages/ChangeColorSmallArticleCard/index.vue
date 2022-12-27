<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class="card-wrapper__top">
        <div class="card-wrapper__top-left">
          <div class="top-left__title">{{ titleLabel }}</div>
          <div class="top-left__content">{{ titleContent }}</div>
        </div>
        <div class="card-wrapper__top-right"></div>
      </div>
      <div class="card-wrapper__info"></div>
    </div>
  </ChangeColorArticleCard>
</template>

<script setup lang="ts">
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleBigCardProps'
import type { ArticleCardOptions } from '@/components/types/cardProps'
import type { PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const titleOptions = props.contentOptions!.title

const titleLabel = ref(titleOptions!.label)
const titleContent = ref(titleOptions!.content)
</script>
<style lang="less" scoped></style>

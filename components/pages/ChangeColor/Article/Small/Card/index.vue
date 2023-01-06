<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class=":uno: p-15">
        <title
          class=":uno: ellipsis-1 label--style color-#fff font-bold text-18"
        >
          {{ titleLabel }}
        </title>
        <title
          class=":uno: ellipsis-3 label--style color-#ffffff99 text-14 lh-[1.5]"
        >
          {{ titleContent }}
        </title>
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
<style scoped>
.label--style {
  --at-apply: transform-font text-justify mb-10;
}
</style>

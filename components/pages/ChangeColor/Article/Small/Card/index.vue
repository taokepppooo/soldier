<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class="card-wrapper__top">
        <div class="top-left">
          <title class="top-left__title">{{ titleLabel }}</title>
          <title class="top-left__content">{{ titleContent }}</title>
        </div>
        <div class="top-right"></div>
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
<style lang="less" scoped>
@import '~/assets/less/common.less';

.label--style {
  .transform-font();
  text-align: justify;
  margin-bottom: 10px;
}

.card-wrapper {
  .card-wrapper__top {
    padding: 15px;

    .top-left {
      .top-left__title {
        .text-ellipsis(1);
        .label--style();
        color: #ffffff;
        font-weight: bold;
        font-size: 18px;
      }

      .top-left__content {
        .text-ellipsis(3);
        .label--style();
        color: #ffffff99;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>

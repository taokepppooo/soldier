<template>
  <ChangeColorArticleCard :options="props.cardOptions">
    <div class="card-wrapper">
      <div class="card-wrapper__box">
        <div class="box__bg" :style="bgStyle"></div>
        <title class="box__title" :style="titleStyle">
          {{ titleContent }}
        </title>
        <ChangeColorArticleLargeCardInfo
          v-if="infoOptions"
          :options="infoOptions"
          class="box__card-info"
        ></ChangeColorArticleLargeCardInfo>
      </div>
    </div>
  </ChangeColorArticleCard>
</template>

<script setup lang="ts">
import { toPx } from '@/utils/style'
import { ArticleCardOptions } from '@/components/types/cardProps'
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleBigCardProps'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const imgOptions = props.contentOptions!.img
const titleOptions = props.contentOptions!.title
const infoOptions = props.contentOptions!.info

const imgWidth = toPx(imgOptions!.width)
const imgHeight = toPx(imgOptions!.height)
const imgSource = imgOptions!.source

const bgStyle = reactive<CSSProperties>({
  width: imgWidth,
  height: imgHeight,
  'background-image': imgSource ? `url('${imgSource}')` : undefined,
})

const titleWidth = toPx(titleOptions!.width)
const titleContent = ref(titleOptions!.content)

const titleStyle = reactive<CSSProperties>({
  width: titleWidth,
})
</script>
<style lang="less" scoped>
@import '~/assets/less/common.less';

.card-wrapper {
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;

  .card-wrapper__box {
    position: relative;
    height: inherit;
    padding: 20px;

    .box__bg {
      opacity: 0.6;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .box__title {
      .text-ellipsis(5);
      .transform-font();
      position: absolute;
      top: 20px;
      text-align: justify;
      color: #ffffff;
      font-size: 55px;
      line-height: 1.3;
    }

    .box__card-info {
      position: absolute;
      bottom: 40px;
    }
  }
}
</style>

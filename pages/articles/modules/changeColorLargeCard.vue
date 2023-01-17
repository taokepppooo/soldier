<template>
  <ArticleCard :options="props.cardOptions">
    <div class="h-full bg-[rgba(255,255,255,0.3)]">
      <div class="relative h-inherit p-20">
        <div class="opacity-60 bg-no-repeat bg-contain" :style="bgStyle"></div>
        <el-row :gutter="24" class="absolute top-20">
          <el-col :span="18">
            <title
              class="ellipsis-5 transform-font text-justify c-#fff text-55 lh-[1.3]"
              :style="titleStyle"
            >
              {{ titleContent }}
            </title>
          </el-col>
        </el-row>
        <change-color-large-card-info
          v-if="infoOptions"
          :options="infoOptions"
          class="absolute bottom-40"
        ></change-color-large-card-info>
      </div>
    </div>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'
import { toRem } from '@/utils/style'
import { ArticleCardOptions } from '@/components/types/cardProps'
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleLargeCardProps'
import ChangeColorLargeCardInfo from './changeColorLargeCardInfo.vue'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const imgOptions = props.contentOptions!.img
const titleOptions = props.contentOptions!.title
const infoOptions = props.contentOptions!.info

const imgWidth = imgOptions!.width ? toRem(imgOptions!.width) : '100%'
const imgHeight = toRem(imgOptions!.height)
const imgSource = imgOptions!.source

const bgStyle = reactive<CSSProperties>({
  width: imgWidth,
  height: imgHeight,
  'background-image': imgSource ? `url('${imgSource}')` : undefined,
})

const titleWidth = titleOptions!.width ? toRem(titleOptions!.width) : '100%'
const titleContent = ref(titleOptions!.content)

const titleStyle = reactive<CSSProperties>({
  width: titleWidth,
})
</script>

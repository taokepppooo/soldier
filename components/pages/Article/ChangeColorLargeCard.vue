<template>
  <ArticleCard :options="props.cardOptions">
    <div class="h-full bg-[rgba(255,255,255,0.3)]">
      <div class="relative h-inherit p-20">
        <el-skeleton :loading="loading" animated class="absolute">
          <template #template>
            <el-row :gutter="24">
              <el-col :span="18">
                <div class="text-50 lh-[1.3] top-20">
                  <el-skeleton-item
                    v-for="s in skeletonCount"
                    :key="s"
                    variant="h1"
                  />
                </div>
              </el-col>
            </el-row>
          </template>
          <template #default>
            <div
              class="opacity-60 bg-no-repeat bg-contain"
              :style="bgStyle"
            ></div>
            <el-row :gutter="24" class="absolute top-20">
              <el-col :span="18">
                <title
                  class="ellipsis-5 transform-font text-justify c-#fff text-50 lh-[1.3]"
                  :style="titleStyle"
                >
                  {{ titleContent }}
                </title>
              </el-col>
            </el-row>
          </template>
        </el-skeleton>
        <ArticleCardInfo
          v-if="infoOptions"
          :options="infoOptions"
          class="absolute bottom-40"
        ></ArticleCardInfo>
      </div>
    </div>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElSkeleton, ElSkeletonItem, ElRow, ElCol } from 'element-plus'
import { toRem } from '@/utils/style'
import { ArticleCardOptions } from '@/composables/cardProps'
import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'
import type { CSSProperties, PropType } from 'vue'

const props = defineProps({
  cardOptions: Object as PropType<ArticleCardOptions>,
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)

const skeletonCount = ref(5)

const imgOptions = props.contentOptions!.img
const titleOptions = props.contentOptions!.article
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

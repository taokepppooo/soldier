<template>
  <ArticleCard :options="cardOptions">
    <el-row :gutter="24" class="p-15">
      <el-col :span="21">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <div class="text-18 label--style h-27">
              <el-skeleton-item class="text-18 label--style" />
            </div>
            <div class="min-h-65 text-14 lh-[1.5] label--style">
              <el-skeleton-item v-for="s in skeletonCount" :key="s" />
            </div>
          </template>
          <template #default>
            <p class="ellipsis-1 label--style c-#fff font-bold text-18">
              {{ titleLabel }}
            </p>
            <p
              class="min-h-65 ellipsis-3 label--style c-#ffffff99 text-14 lh-[1.5]"
            >
              {{ titleContent }}
            </p>
          </template>
        </el-skeleton>
      </el-col>
      <el-col :span="24">
        <ArticleCardInfo
          v-if="infoOptions"
          :options="infoOptions"
        ></ArticleCardInfo>
      </el-col>
    </el-row>
  </ArticleCard>
</template>

<script setup lang="ts">
import { ElSkeleton, ElSkeletonItem, ElRow, ElCol } from 'element-plus'
import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'
import type { PropType } from 'vue'

const props = defineProps({
  contentOptions: Object as PropType<ArticleCardContentOptions>,
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)

const skeletonCount = 3

const titleOptions = props.contentOptions!.article
const infoOptions = props.contentOptions!.info

const cardOptions = {
  height: '100%',
  minHeight: 165,
  scale: '1.02',
}

const titleLabel = ref(titleOptions!.label)
const titleContent = ref(titleOptions!.content)
</script>
<style scoped>
.label--style {
  --at-apply: transform-font text-justify mb-10;
}
</style>

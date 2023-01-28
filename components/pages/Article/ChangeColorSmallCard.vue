<template>
  <ArticleCard :options="cardOptions">
    <el-row :gutter="24" class="p-15">
      <el-col :span="21">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton-item variant="text" class="text-18" />
            <div class="min-h-50 text-14 lh-[1.5]">
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
            </div>
          </template>
          <template #default>
            <title class="ellipsis-1 label--style c-#fff font-bold text-18">
              {{ titleLabel }}
            </title>
            <title
              class="min-h-50 ellipsis-3 label--style c-#ffffff99 text-14 lh-[1.5]"
            >
              {{ titleContent }}
            </title>
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
}, 20000)

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

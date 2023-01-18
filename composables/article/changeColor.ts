import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'

export interface ChangeColorCard {
  id?: string | number
  contentOptions: ArticleCardContentOptions
}

export type ChangeColorCardPartial = Partial<ChangeColorCard>

export default {}

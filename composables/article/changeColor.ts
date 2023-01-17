import { ArticleCardOptions } from '@/composables/cardProps'
import { ArticleCardContentOptions } from '@/composables/article/articleLargeCardProps'

export interface ChangeColorCard {
  id?: string | number
  cardOptions: ArticleCardOptions
  contentOptions: ArticleCardContentOptions
}

export type ChangeColorCardPartial = Partial<ChangeColorCard>

export default {}

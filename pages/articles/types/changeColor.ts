import { ArticleCardOptions } from '@/components/types/cardProps'
import { ArticleCardContentOptions } from '@/components/types/pages/articles/articleBigCardProps'

export interface ChangeColorCard {
  id?: string | number
  cardOptions: ArticleCardOptions
  contentOptions: ArticleCardContentOptions
}

export type ChangeColorCardPartial = Partial<ChangeColorCard>

export default {}

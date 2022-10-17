import type { ArticleCardsOptions } from '@/components/types/cardProps'

/**
 * @param  {ArticleCardsOptions} options
 */
export const setStyles = (options: ArticleCardsOptions): string | undefined => {
  return options?.layout
}

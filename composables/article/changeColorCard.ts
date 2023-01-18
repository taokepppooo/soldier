import type { ArticleCardOptions } from '@/composables/cardProps'

/**
 * @param  {ArticleCardOptions} options
 */
export const setStyles = (options: ArticleCardOptions): ArticleCardOptions => {
  const baseStyles = reactive<ArticleCardOptions>({
    width: options.width || '100%',
    height: options.height,
    background: options.background,
    transition: options.transition,
    layout: options.layout,
  })

  return baseStyles
}

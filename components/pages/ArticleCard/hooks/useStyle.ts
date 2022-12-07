import { useMouseInElement, UseMouseInElementReturn } from '@vueuse/core'
import type { ArticleCardsOptions } from '@/components/types/cardProps'
import type { Ref } from 'vue'

type transformType = string | undefined

/**
 * @param  {ArticleCardsOptions} options
 */
export const setStyles = (
  options: ArticleCardsOptions
): ArticleCardsOptions => {
  const transform = ref<transformType>()

  if (options.transform) {
    const mouse = useMouseInElement(toRef(options, 'hoverTarget') as Ref)
    setHoverStyle(options, transform as Ref<transformType>, mouse)
  }

  const baseStyles = reactive<ArticleCardsOptions>({
    width: options.width,
    height: options.height,
    background: options.background,
    transform: transform as any as string,
    transition: options.transition,
    layout: options.layout,
  })

  return baseStyles
}

/**
 * @param  {Ref<string>} transform
 * @param  {UseMouseInElementReturn} mouse
 * @returns UseMouseInElementReturn
 */
function setHoverStyle(
  options: ArticleCardsOptions,
  transform: Ref<transformType>,
  mouse: UseMouseInElementReturn
) {
  const { isOutside } = mouse
  watch(isOutside, () => {
    if (!isOutside.value) {
      transform.value = options.transform!
    } else {
      transform.value = undefined
    }
  })
}

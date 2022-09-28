import { isNumber } from 'lodash'
import { useMouseInElement } from '@vueuse/core'
import { cardProps } from '../types/props'
import type { CSSProperties, ExtractPropTypes, Ref } from 'vue'

export const useStyle = (
  props: ExtractPropTypes<typeof cardProps>,
  target: Ref
) => {
  const options = props.options

  const width = isNumber(options?.width)
    ? `${options?.width}px`
    : options?.width
  const height = isNumber(options?.height)
    ? `${options?.height}px`
    : options?.height

  const mouse = useMouseInElement(target)

  const baseStyles = reactive<CSSProperties>({
    width,
    height,
    'background-image': options?.backgroundImage,
  })

  return {
    baseStyles,
    mouse,
  }
}

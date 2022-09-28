import { isNumber } from 'lodash'
import {
  useMouseInElement,
  useElementHover,
  UseMouseInElementReturn,
} from '@vueuse/core'
import { cardProps } from '../types/props'
import type { CSSProperties, ExtractPropTypes, Ref } from 'vue'

const TRANSFORM =
  'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

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
  const transform = ref<string>(TRANSFORM)
  setHoverStyle(transform, mouse, target)

  const baseStyles = reactive<CSSProperties>({
    width,
    height,
    'background-image': options?.backgroundImage,
    transform,
  })

  return {
    baseStyles,
    mouse,
  }
}

function setHoverStyle(
  transform: Ref,
  mouse: UseMouseInElementReturn,
  target: Ref
) {
  const isHovered = useElementHover(target)
  watch(isHovered, () => {
    if (isHovered.value) {
      transform.value =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.5, 1.5, 1.5)'
    } else {
      transform.value = TRANSFORM
    }
  })
}

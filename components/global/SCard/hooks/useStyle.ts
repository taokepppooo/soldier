import { isNumber } from 'lodash'
import { cardProps } from '../types/props'
import type { CSSProperties, ExtractPropTypes } from 'vue'

export const useStyle = (props: ExtractPropTypes<typeof cardProps>) => {
  const options = props.options

  const width = isNumber(options?.width)
    ? `${options?.width}px`
    : options?.width
  const height = isNumber(options?.height)
    ? `${options?.height}px`
    : options?.height

  return reactive<CSSProperties>({
    width,
    height,
    'background-image': options?.backgroundImage,
    transform:
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  })
}

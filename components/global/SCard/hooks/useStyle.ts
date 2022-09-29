import { isNumber, divide, subtract, round, multiply } from 'lodash'
import { useMouseInElement, UseMouseInElementReturn } from '@vueuse/core'
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
  setHoverStyle(transform, mouse)

  const baseStyles = reactive<CSSProperties>({
    width,
    height,
    'background-image': options?.backgroundImage,
    transform: transform as any as string,
  })

  return {
    baseStyles,
    mouse,
  }
}

function setHoverStyle(transform: Ref<string>, mouse: UseMouseInElementReturn) {
  const { elementX, elementY, elementWidth, elementHeight } = mouse

  const rotateXVal = ref<number>(0)
  const rotateYVal = ref<number>(0)

  const rotateX = computed(() => {
    return `rotateX(${-rotateXVal.value}deg)`
  })
  const rotateY = computed(() => {
    return `rotateY(${rotateYVal.value}deg)`
  })

  watch(elementX, () => {
    if (!mouse.isOutside.value) {
      rotateXY(elementWidth.value, elementX.value, rotateYVal)
      transform.value = `perspective(1000px) ${rotateX.value} ${rotateY.value} scale3d(1.05, 1.05, 1.05)`
    } else {
      transform.value = TRANSFORM
    }
  })

  watch(elementY, () => {
    if (!mouse.isOutside.value) {
      rotateXY(elementHeight.value, elementY.value, rotateXVal)
      transform.value = `perspective(1000px) ${rotateX.value} ${rotateY.value} scale3d(1.05, 1.05, 1.05)`
    } else {
      transform.value = TRANSFORM
    }
  })
}

function rotateXY(box: number, mouse: number, val: Ref<number>) {
  // 中线
  const yMiddle = divide(box, 2)
  // 中线和当前鼠标位置的差值
  const yVal = subtract(yMiddle, mouse)
  // 公式 yMiddle / yVal = 15 / x
  val.value = yVal !== 0 ? round(divide(multiply(yVal, 15), yMiddle), 2) : 0
}

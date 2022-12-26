import { isNumber } from 'lodash'

export const toPx = (
  value: number | string | undefined
): string | undefined => {
  return isNumber(value) ? `${value}px` : value
}

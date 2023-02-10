/* eslint-disable vue/prefer-import-from-vue */
import { isString } from '@vue/shared'
import { divide } from 'lodash-es'
import { constant } from '../types/constant'

export const toRem = (
  value: number | string | undefined
): string | undefined => {
  return getCalculateValue(value)
}

export const getCalculateValue = (
  value: number | string | undefined
): string => {
  if (!value) {
    return '0rem'
  }

  if (isString(value)) {
    return value.includes('%') ? value : PxUnitToRem(value)
  } else {
    return PxUnitToRem(value)
  }
}

export const PxUnitToRem = (value: number | string): string => {
  const _val = Number(value)
  const remUnit = divide(_val, constant.ROOT_SIZE)
  const rem = `${remUnit}rem`
  return rem
}

export const getCssValue = (value: number | string | undefined): string => {
  return value
    ? isString(value) && value.includes('%')
      ? value
      : PxUnitToRem(value)
    : '0rem'
}

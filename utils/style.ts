/* eslint-disable vue/prefer-import-from-vue */
import { isString } from '@vue/shared'
import { divide } from 'lodash'
import { constant } from '../types/constant'

export const toRem = (
  value: number | string | undefined
): string | undefined => {
  return PxUnitToRem(value)
}

export const PxUnitToRem = (value: number | string | undefined): string => {
  const _val = value ? (isString(value) ? Number(value) : value) : 0
  const remUnit = _val ? divide(_val, constant.ROOT_SIZE) : 0
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

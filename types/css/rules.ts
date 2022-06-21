/*
 * @Author: taoke
 * @Date: 2022-06-21 13:59:19
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-21 14:43:34
 * @Description:
 * @FilePath: \soldier\types\css\rules.ts
 */
import { CSS_CONSTANT } from './constant'
import type { Rule } from '@unocss/core'
export const rules = [
  ['cr-color-main', { color: CSS_CONSTANT.COLOR_MAIN }],
  ['cr-fill-color-main', { fill: CSS_CONSTANT.COLOR_MAIN }],
] as Rule<{}>[]

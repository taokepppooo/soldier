/*
 * @Author: taoke
 * @Date: 2022-06-08 15:50:40
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-21 18:01:11
 * @Description:
 * @FilePath: \soldier\config\unocss\index.ts
 */
import {
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

import { cssTypes } from '../../types/unocss'
import { shortcuts } from '../../types/unocss/shortcuts'
import { rules } from '../../types/unocss/rules'
import { fonts } from '../../types/unocss/fonts'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

export const unocssConfig = {
  shortcuts,
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts(fonts),
  ],
  transformers: [transformerDirectives()],
  rules,
  preflights: [
    {
      getCSS: () => cssTypes,
    },
  ],
} as UnocssNuxtOptions

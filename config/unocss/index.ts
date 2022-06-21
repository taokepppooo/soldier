/*
 * @Author: taoke
 * @Date: 2022-06-08 15:50:40
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-21 14:33:39
 * @Description:
 * @FilePath: \soldier\config\unocss\index.ts
 */
import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from 'unocss'

import { cssTypes } from '../../types/css'
import { shortcuts } from '../../types/css/shortcuts'
import { rules } from '../../types/css/rules'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

export const unocssConfig = {
  shortcuts,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  rules,
  preflights: [
    {
      getCSS: () => cssTypes,
    },
  ],
} as UnocssNuxtOptions

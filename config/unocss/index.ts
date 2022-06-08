/*
 * @Author: taoke
 * @Date: 2022-06-08 15:50:40
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-08 17:29:20
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

import type { UnocssNuxtOptions } from '@unocss/nuxt'

const COLOR_MAIN = '#3d83f6'

export const unocssConfig = {
  shortcuts: {
    'sc-flex-xy': 'flex items-center justify-center',
    'sc-flex-center-xy': 'items-center justify-center',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  rules: [
    ['cr-color-main', { color: COLOR_MAIN }],
    ['cr-fill-color-main', { fill: COLOR_MAIN }],
  ],
  preflights: [
    {
      getCSS: () => `
      * {
        padding: 0;
        margin: 0;
        text-decoration: none;
      }
    `,
    },
  ],
} as UnocssNuxtOptions

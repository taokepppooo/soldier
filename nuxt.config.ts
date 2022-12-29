import vueJsx from '@vitejs/plugin-vue-jsx'
import { unocssConfig } from './config/unocss'

export default {
  ssr: true,
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/image-edge'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0',
        },
      ],
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
      {
        path: '~/components/layouts',
        global: true,
      },
      {
        path: '~/components/pages',
        global: true,
      },
    ],
  },
  // unocss
  unocss: unocssConfig,
  // css
  css: ['~/assets/less/index.less', '~/assets/font/iconfont.css'],
  postcss: {
    plugins: {
      'postcss-pixel-to-viewport': {
        viewportWidth: 1920,
        viewportUnit: 'vw',
        propertyBlacklist: [/^font$/],
        minPixelValue: 1,
        enableConvertComment: 'on',
        disableConvertComment: 'off',
        mediaQuery: false,
      },
    },
  },
  vite: {
    plugins: [vueJsx()],
  },
}

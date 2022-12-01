import vueJsx from '@vitejs/plugin-vue-jsx'
import { unocssConfig } from './config/unocss'

export default {
  ssr: true,
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/image-edge'],
  meta: {
    link: [{ rel: 'stylesheet', href: './assets/font/iconfont.css' }],
  },
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
  css: ['~/assets/less/index.less'],
  vite: {
    plugins: [vueJsx()],
  },
}

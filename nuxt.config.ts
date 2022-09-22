import { unocssConfig } from './config/unocss'

export default {
  modules: ['@unocss/nuxt'],
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
    ],
  },
  // unocss
  unocss: unocssConfig,
  // css
  css: ['~/assets/less/index.less'],
  // vite plugins
  vite: {
    optimizeDeps: {
      exclude: ['@unocss/nuxt'],
    },
  },
}

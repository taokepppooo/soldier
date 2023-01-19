import vueJsx from '@vitejs/plugin-vue-jsx'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default {
  ssr: true,
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia()`
          'defineStore',
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@nuxtjs/critters',
  ],
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
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/less/index.less',
    '~/assets/font/iconfont.css',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    plugins: [
      vueJsx(),
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },
}

/*
 * @Author: taoke
 * @Date: 2022-05-19 18:09:01
 * @LastEditors: taoke
 * @LastEditTime: 2022-06-06 09:19:16
 * @Description: 
 * @FilePath: \soldier\nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // app: {
  //   head: {
  //     script: [
  //       { src: '//cdn.jsdelivr.net/npm/element-plus@2.2.2' }
  //     ],
  //     link: [
  //       { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/element-plus@2.2.2/dist/index.css' }
  //     ]
  //   }
  // },
  // https://github.com/nuxt/framework/issues/1292
  // build: {
  //   transpile: ['element-plus'],
  // },
  // auto import components
  components: true,
  // css
  css: ["~/assets/less/index.less"],
  // vite plugins
  vite: {
    // optimizeDeps: {
    //   exclude: ['element-plus']
    // }
  },
})

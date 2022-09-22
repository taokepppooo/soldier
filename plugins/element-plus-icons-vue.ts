import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 存在重复添加的问题
    if (!nuxtApp.vueApp.component(key)) {
      nuxtApp.vueApp.component(key, component)
    }
  }
})

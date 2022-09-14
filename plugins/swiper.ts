import { useSwiper, useSwiperSlide } from 'swiper/vue'

import 'swiper/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(useSwiper, useSwiperSlide)
})

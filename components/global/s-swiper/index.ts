import { withInstall } from '@/utils'

import sSwiper from './src/s-swiper.vue'

export const SSwiper = withInstall(sSwiper)

// 必须提供，否则报does not provide an export named 'default'
export default SSwiper

import { withInstall } from '@/utils'

import Swiper from './src/index.vue'

export const SSwiper = withInstall(Swiper)

// 必须提供，否则报does not provide an export named 'default'
export default SSwiper

import { Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/css'

import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
}
export const pagination = {
  clickable: true,
}

export const modules = [Autoplay, Pagination, Navigation]

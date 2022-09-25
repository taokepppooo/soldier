import { withInstall } from '@/utils'

import cards from './src/index.vue'

export const HomeCards = withInstall(cards)

// 必须提供，否则报does not provide an export named 'default'
export default HomeCards

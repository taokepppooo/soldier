import { withInstall } from '@/utils'

import Card from './src/index.vue'

export const SCard = withInstall(Card)

// 必须提供，否则报does not provide an export named 'default'
export default SCard

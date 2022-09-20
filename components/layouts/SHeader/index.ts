import { withInstall } from '@/utils'

import Header from './src/index.vue'

export const SHeader = withInstall(Header)

// 必须提供，否则报does not provide an export named 'default'
export default SHeader

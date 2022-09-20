import { withInstall } from '@/utils'

import Main from './src/index.vue'

export const SMain = withInstall(Main)

// 必须提供，否则报does not provide an export named 'default'
export default SMain

import { withInstall } from '@/utils'

import headerNav from './src/index.vue'

export const HeaderNav = withInstall(headerNav)

// 必须提供，否则报does not provide an export named 'default'
export default HeaderNav

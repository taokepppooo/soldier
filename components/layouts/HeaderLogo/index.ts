import { withInstall } from '@/utils'

import headerLogo from './src/HeaderLogo.vue'

export const HeaderLogo = withInstall(headerLogo)

// 必须提供，否则报does not provide an export named 'default'
export default HeaderLogo

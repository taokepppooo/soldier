import { constant } from '../../../types/constant'

export const cssTypes = `
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*, :after, :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: ${constant.ROOT_SIZE}px;
}
a {
  color: unset;
}
a:active {
  color: unset;
}
`

import posed from 'react-pose'
import { SHADOW_COLOR } from './shadow'

const Textglow = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    textShadow: `14px 14px 28px rgba(${SHADOW_COLOR} 0.22), 3px 10px 10px rgba(${SHADOW_COLOR} 0.19)`,
  },
  hover: {
    scale: 1,
    textShadow: `0px 0px 0px rgba(${SHADOW_COLOR} 0.22), 0px 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
  },
})

export default Textglow

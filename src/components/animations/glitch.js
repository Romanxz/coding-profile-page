import posed from 'react-pose'
import { SHADOW_COLOR } from './shadow'

const Glitch = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1,
    transition: { duration: 300 },

  },
})

export default Glitch

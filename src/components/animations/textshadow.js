import posed from 'react-pose'
import { SHADOW_COLOR } from './shadow'

const TextShadow = posed.div({
  hoverable: true,
  enter: {
    x: 0,
    scale: 1,
    opacity: 1,
    textShadow: ({ noshadow }) =>
      !noshadow
        ? `14px 14px 28px rgba(${SHADOW_COLOR} 0.22), 3px 10px 10px rgba(${SHADOW_COLOR} 0.19)`
        : null,
  },
  hover: {
    y: 0,
    scale: ({ xover }) => (xover ? 1.1 : 1),
    textShadow: `14px 14px 28px rgba(${SHADOW_COLOR} 0.22), 3px 10px 10px rgba(${SHADOW_COLOR} 0.19)`,
  },
  exit: {
    x: ({ direction }) =>
      direction === 'right' ? 200 : direction === 'left' ? -200 : 0,
    opacity: 0,
    textShadow: `0px 0px 0px rgba(${SHADOW_COLOR} 0.22), 0px 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
  },
})

export default TextShadow

import posed from 'react-pose'

export const SHADOW_COLOR = '196, 0, 196,'

const Shadow = posed.div({
  pressable: true,
  enter: {
    y: 0,
    boxShadow: `14px 14px 28px rgba(${SHADOW_COLOR} 0.22), 3px 10px 10px rgba(${SHADOW_COLOR} 0.19)`,
    opacity: 1,
  },
  exit: {
    y: 10,
    boxShadow: `0 0px 0px rgba(${SHADOW_COLOR} 0.22), 0 0px 0px rgba(${SHADOW_COLOR} 0.19)`,
    opacity: 0,
  },
  press: {
    y: 5,
    opacity: 1,
    boxShadow: `7px 7px 14px rgba(${SHADOW_COLOR} 0.3), 1px 5px 5px rgba(${SHADOW_COLOR} 0.25)`,
  },
})

export default Shadow

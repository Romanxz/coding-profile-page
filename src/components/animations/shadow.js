import posed from 'react-pose'

const Shadow = posed.div({
  enter: {
    y: 0,
    boxShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    opacity: 1,
  },
  exit: {
    y: 10,
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22)',
    opacity: 0,
  },
  press: {
    y: 5,
    opacity: 1,
    boxShadow: '0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22)',
  },
})

export default Shadow

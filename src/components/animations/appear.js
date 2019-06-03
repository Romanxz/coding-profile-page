import posed from 'react-pose'

const Appear = posed.div({
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 10,
    opacity: 0,
  },
})

export default Appear

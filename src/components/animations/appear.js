import posed from 'react-pose'

const Appear = posed.div({
  hoverable: true,
  enter: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  exit: {
    x: ({ direction }) =>
      direction === 'right' ? 200 : direction === 'left' ? -200 : 0,
    opacity: 0,
  },
})

export default Appear

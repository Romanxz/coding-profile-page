import posed from 'react-pose'

const RouteContainer = posed.div({
  enter: {
    staggerChildren: 100,
  },
  exit: {
    staggerChildren: 50,
    staggerDirection: -1,
  },
})

export default RouteContainer

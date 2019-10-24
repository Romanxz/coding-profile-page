import posed from 'react-pose'

const Container = posed.div({
  enter: {
    staggerChildren: 150,
  },
  exit: {
    staggerChildren: 100,
    staggerDirection: -1,
  },
})

export default Container

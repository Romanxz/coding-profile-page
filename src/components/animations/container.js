import posed from 'react-pose'

const Container = posed.div({
  enter: {
    staggerChildren: 100,
  },
  exit: {
    staggerChildren: 50,
    staggerDirection: -1,
  },
})

export default Container

import posed from 'react-pose'

const Container = posed.div({
  enter: {
    staggerChildren: 50,
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1,
  },
})

export default Container

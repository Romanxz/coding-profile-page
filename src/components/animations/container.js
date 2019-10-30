import posed from 'react-pose'

const Container = posed.div({
  enter: {
    staggerChildren: 200,
  },
  exit: {
    staggerChildren: 150,
    staggerDirection: -1,
  },
})

export default Container

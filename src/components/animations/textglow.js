import posed from 'react-pose'

const Textglow = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    textShadow: '0px 0px 8px rgba(161, 152, 173, 0.6)',
  },
  hover: {
    scale: 1,
    textShadow: '0px 0px 20px rgba(161, 152, 173, 0.8)',
  },
})

export default Textglow

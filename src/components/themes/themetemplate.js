import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-orbitron'

const themeTemplate = createMuiTheme({
  typography: {
    fontFamily: 'Jura',
    button: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: { main: '#4a148c' },
    secondary: { main: '#11cb5f' },
  },
  particlescolor: {
    main: 'rgb(0, 0, 0)',
  },
})

export default themeTemplate

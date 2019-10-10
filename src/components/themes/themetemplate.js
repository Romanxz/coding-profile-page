import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-orbitron'

const themeTemplate = createMuiTheme({
  typography: {
    fontFamily: 'Jura',
  },
  palette: {
    primary: { main: '#4a148c' },
    secondary: { main: '#11cb5f' },
  },
})

export default themeTemplate

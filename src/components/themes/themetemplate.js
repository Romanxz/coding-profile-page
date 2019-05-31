import { createMuiTheme } from '@material-ui/core/styles'
import 'typeface-orbitron'

const themeTemplate = createMuiTheme({
  typography: {
    fontFamily: 'orbitron',
  },
  palette: {
    primary: { main: '#4a148c' },
    secondary: { main: '#11cb5f' },
  },
  background: '#616161',
})

export default themeTemplate

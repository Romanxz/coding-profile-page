import React from 'react'
import { PoseGroup } from 'react-pose'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { RoutesAnimation, RoutesStyle } from './components/animations/routes'
import Menu from './components/ui/advanced/menu'
import Background from './components/ui/basic/background'
import Home from './components/pages/home'
import Design from './components/pages/design'
import Hex from './components/pages/hex'
import About from './components/pages/about'
import Theme from './components/pages/theme'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import themeTemplate from './components/themes/themetemplate'

class App extends React.Component {
  state = {
    White: {
      ...themeTemplate,
      palette: {
        primary: { main: '#1de9b6' },
        secondary: { main: '#00bfa5' },
      },
    },
    Black: {
      ...themeTemplate,
      palette: {
        primary: { main: '#0ec73e' },
        secondary: { main: '#11cb5f' },
      },
      background: '#19084f',
    },
    Gradient: {
      ...themeTemplate,
      palette: {
        primary: { main: '#4a148c' },
        secondary: { main: '#11cb5f' },
      },
      background:
        'linear-gradient(160deg,#1bff98,#00d5d9,#00a2ea,#2c69bd,#504d9f,#5e2f7c,#5f0856)',
    },
    Custom: {
      ...themeTemplate,
      palette: {
        primary: { main: '#4a148c' },
        secondary: { main: '#11cb5f' },
      },
      background: '#616161',
    },
    theme: 'Gradient',
  }

  toggleTheme = name => () => {
    this.setState({ theme: name })
  }

  updateCustomTheme = (bg, text) => () => {
    this.setState(state => ({
      Custom: {
        ...state.White,
        palette: { primary: { main: text } },
        background: bg,
      },
      theme: 'Custom',
    }))
  }

  render() {
    const { theme } = this.state
    console.log(createMuiTheme(this.state[theme]))
    return (
      <HashRouter>
        <ThemeProvider
          theme={responsiveFontSizes(createMuiTheme(this.state[theme]))}
        >
          <Route
            render={({ location }) => (
              <Background>
                <PoseGroup>
                  <RoutesAnimation style={RoutesStyle} key={location.pathname}>
                    <Switch location={location}>
                      <Route path="/" exact component={Home} />
                      <Route path="/menu" component={Menu} />
                      <Route path="/design" component={Design} />
                      <Route path="/hex" component={Hex} />
                      <Route path="/about" component={About} />
                      <Route
                        path="/theme"
                        render={({ props }) => (
                          <Theme
                            {...props}
                            toggleTheme={this.toggleTheme}
                            updateCustomTheme={this.updateCustomTheme}
                          />
                        )}
                      />
                    </Switch>
                  </RoutesAnimation>
                </PoseGroup>
              </Background>
            )}
          />
        </ThemeProvider>
      </HashRouter>
    )
  }
}

export default App

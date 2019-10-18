import React from 'react'
import { PoseGroup } from 'react-pose'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RoutesAnimation, RoutesStyle } from './components/animations/routes'
import Menu from './components/ui/advanced/menu'
import Background from './components/ui/basic/background'
import Home from './components/pages/home/home'
import Design from './components/pages/design'
import Skills from './components/pages/skills'
import About from './components/pages/about'
import Theme from './components/pages/theme'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import themeTemplate from './components/themes/themetemplate'

class App extends React.Component {
  state = {
    White: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#1de9b6' },
        secondary: { main: '#00bfa5' },
      },
      background: '#616161',
    },
    Black: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#E2E2E2' },
        secondary: { main: '#11cb5f' },
      },
      // background: '#1C1616',
      background: 'black',
    },
    Gradient: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#4a148c' },
        secondary: { main: '#11cb5f' },
      },
      background:
        'linear-gradient(160deg,#1bff98,#00d5d9,#00a2ea,#2c69bd,#504d9f,#5e2f7c,#5f0856)',
    },
    Custom: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#4a148c' },
        secondary: { main: '#11cb5f' },
      },
      background: '#616161',
    },
    theme: 'Black',
  }

  toggleTheme = name => {
    this.setState({ theme: name })
  }

  updateBgColor = bgcolorhex => {
    this.setState(state => ({
      Custom: {
        ...state.Custom,
        background: bgcolorhex,
      },
      theme: 'Custom',
    }))
  }

  updateTextColor = textcolorhex => {
    this.setState(state => ({
      Custom: {
        ...state.Custom,
        palette: {
          primary: { main: textcolorhex },
        },
      },
      theme: 'Custom',
    }))
  }

  render() {
    const { theme } = this.state
    console.log(createMuiTheme(this.state[theme]))
    return (
      <Router>
        <ThemeProvider
          theme={responsiveFontSizes(createMuiTheme(this.state[theme]))}
        >
          <Route
            render={({ location }) => (
              <Background>
                <PoseGroup>
                  <RoutesAnimation style={RoutesStyle} key={location.pathname}>
                    <Switch location={location}>
                      <Route
                        path={process.env.PUBLIC_URL + '/'}
                        exact
                        component={Home}
                      />
                      <Route
                        path={process.env.PUBLIC_URL + '/menu'}
                        component={Menu}
                      />
                      <Route
                        path={process.env.PUBLIC_URL + '/design'}
                        component={Design}
                      />
                      <Route
                        path={process.env.PUBLIC_URL + '/skills'}
                        component={Skills}
                      />
                      <Route
                        path={process.env.PUBLIC_URL + '/about'}
                        component={About}
                      />
                      <Route
                        path="/theme"
                        render={({ props }) => (
                          <Theme
                            {...props}
                            theme={theme}
                            toggleTheme={this.toggleTheme}
                            updateBgColor={this.updateBgColor}
                            updateTextColor={this.updateTextColor}
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
      </Router>
    )
  }
}

export default App

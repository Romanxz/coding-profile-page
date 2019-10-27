import React from 'react'
import { PoseGroup } from 'react-pose'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
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
        fontFamily: 'nidsans, sans-serif',
        fontSize: 18,
      },
      palette: {
        primary: { main: '#ff3838' },
        secondary: { main: '#ffffff' },
      },
      background:
        'radial-gradient(circle, rgba(214,64,255,1) 0%, rgba(0,236,255,1) 67%, rgba(238,0,153,1) 100%)',
    },
    Black: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
        fontSize: 18,
      },
      palette: {
        primary: { main: '#0077ff' },
        secondary: { main: '#f7fffd' },
        shadow: '196, 0, 196,',
      },
      // background: '#1C1616',
      background: '#1a1a1f',
      shadow: '196, 0, 196,',
    },
    Gradient: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#11cb5f' },
        secondary: { main: '#4a148c' },
      },
      background:
        'radial-gradient(circle, rgba(213,255,80,1) 9%, rgba(0,236,255,1) 62%, rgba(255,0,164,1) 84%)',
    },
    Custom: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
        fontSize: 18,
      },
      palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#000000' },
      },
      background: '#54ffdd',
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
              <Background theme={createMuiTheme(this.state[theme])}>
                <PoseGroup animateOnMount>
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

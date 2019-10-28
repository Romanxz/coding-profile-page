import React from 'react'
import Container from '../animations/container'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Typography, Hidden, useMediaQuery } from '@material-ui/core/'
import Themeform from '../ui/advanced/themeform'
import Spacer from '../ui/basic/spacer'
import Appear from '../animations/appear'
import TextGlitcher from '../ui/advanced/textglitcher'
import TextSlicer from '../ui/advanced/textslicer'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // paddingTop: 20,
  },
})

const Theme = ({ theme, toggleTheme, updateBgColor, updateTextColor }) => {
  const classes = useStyles()
  const theme2 = useTheme()
  const mdUp = useMediaQuery(theme2.breakpoints.up('md'))
  return (
    <Container className={classes.container}>
      <Grid container direction="row">
        <Hidden smDown>
          <Grid item md={6} lg={6} />
        </Hidden>
        <Grid
          item
          container
          direction="column"
          style={{ width: '100%' }}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{ height: '50%' }}
          >
            <Spacer size={mdUp ? 20 : 10} />
            <Appear
              direction="left"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextSlicer>
                <TextGlitcher
                  style={{ cursor: 'crosshair' }}
                  direction="left"
                  glitched
                  data="THEME"
                >
                  THEME
                </TextGlitcher>
              </TextSlicer>
            </Appear>
            <Spacer size={2} />
            <Typography color="secondary" variant="button">
              <TextGlitcher
                key={45}
                style={{ cursor: 'crosshair' }}
                glitched
                noshadow
                direction="right"
              >
                {'- CHOOSE SOME THEMES -'}
              </TextGlitcher>
            </Typography>
            <Typography color="secondary" variant="button">
              <TextGlitcher
                key={44}
                style={{ cursor: 'crosshair' }}
                glitched
                noshadow
                direction="right"
              >
                {'- MAKE YOUR OWN WITH CUSTOM HEX CODE -'}
              </TextGlitcher>
            </Typography>
          </Grid>
          <Themeform
            mdUp={mdUp}
            theme={theme}
            toggleTheme={toggleTheme}
            updateBgColor={updateBgColor}
            updateTextColor={updateTextColor}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Theme

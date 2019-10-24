import React from 'react'
import Container from '../animations/container'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core/'
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
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    // paddingTop: 20,
  },
})

const Theme = ({ theme, toggleTheme, updateBgColor, updateTextColor }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container direction="row">
        <Grid item xs={7} />
        <Grid item container direction="column" xs={5}>
          {/* <Spacer size={4} /> */}
          <Appear direction="left">
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
          <Spacer size={3} />
          <Grid item style={{ position: 'relative' }}>
            <Typography color="secondary" variant="button">
              <TextGlitcher
                key={21214132364667}
                style={{ cursor: 'crosshair' }}
                glitched
                noshadow
                direction="right"
              >
                {'CHOOSE SOME THEMES OR MAKE ONE WITH CUSTOM HEX VALUES'}
              </TextGlitcher>
            </Typography>
          </Grid>
          <Spacer size={10} />
          <Themeform
            theme={theme}
            toggleTheme={toggleTheme}
            updateBgColor={updateBgColor}
            updateTextColor={updateTextColor}
            pad={120}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Theme

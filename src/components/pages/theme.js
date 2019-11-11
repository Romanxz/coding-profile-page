import React from 'react'
import RouteContainer from '../animations/container'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import Themeform from '../ui/advanced/themeform'
import Spacer from '../ui/basic/spacer'
import TextFX from '../ui/advanced/text-fx/text-fx'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
})

const Theme = ({ theme, toggleTheme, updateBgColor, updateTextColor }) => {
  const classes = useStyles()
  const theme2 = useTheme()
  const mdUp = useMediaQuery(theme2.breakpoints.up('md'))
  return (
    <RouteContainer className={classes.container}>
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
            style={{
              minHeight: mdUp ? '50%' : '40%',
            }}
          >
            <Spacer size={mdUp ? 10 : 2} />
            <TextFX
              appear="left"
              header
              break
              size={90}
              key={1}
              style={{
                fontFamily: 'Bigmacca',
                fontWeight: 400,
                textTransform: 'uppercase',
              }}
            >
              Theme
            </TextFX>
            <Spacer size={4} />
            <TextFX
              appear="left"
              glitch
              break
              size={20}
              key={2}
              style={{
                fontFamily: 'Jura',
                fontWeight: 400,
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              {'- CHOOSE YOUR THEME -'}
            </TextFX>
            <Spacer size={2} />
            <TextFX
              appear="right"
              glitch
              break
              size={20}
              key={3}
              style={{
                fontFamily: 'Jura',
                fontWeight: 400,
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              {'- CREATE A NEW ONE WITH CUSTOM HEX CODE -'}
            </TextFX>
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
    </RouteContainer>
  )
}

export default Theme

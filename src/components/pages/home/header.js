import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import TextShadow from '../../animations/textshadow'
import TextGlitcher from '../../ui/advanced/textglitcher'
import TextSlicer from '../../ui/advanced/textslicer'

const useStyles = makeStyles(theme => ({
  header: {
    color: 'white',
    fontFamily: 'SF, sans-serif',
    fontWeight: 900,
    fontSize: 120,
    letterSpacing: 0,
    userSelect: 'none',
    // width: '100%',
    // height: '20%',
  },
}))

const Header = props => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      directon="column"
      justify="flex-start"
      alignItems="center"
      className={classes.header}
    >
      <TextShadow xover direction="left">
        <TextSlicer
          style={{
            position: 'absolute',
            width: '100%',
            fontFamily: 'SF, sans-serif',
            fontWeight: 900,
            fontSize: 120,
            letterSpacing: 0,
          }}
        >
          <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled data="ROMAN">
            ROMAN
          </TextGlitcher>
        </TextSlicer>
      </TextShadow>
      <TextShadow xover direction="right">
        {/* <TextSlicer
          style={{
            position: 'absolute',
            width: '100%',
            fontFamily: 'SF, sans-serif',
            fontWeight: 900,
            fontSize: 120,
            letterSpacing: 0,
          }}
        > */}
        <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled data="GORBUNOV">
          GORBUNOV
        </TextGlitcher>
        {/* </TextSlicer> */}
      </TextShadow>
    </Grid>
  )
}

export default Header

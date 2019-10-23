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
  slicer: {
    position: 'absolute',
    width: '100%',
    fontFamily: 'SF, sans-serif',
    fontWeight: 900,
    fontSize: 120,
    letterSpacing: 0,
  },
}))

const values1 = { x1: '0px', x2: '4px', x3: '-10px' }

const Header = props => {
  const classes = useStyles()
  const { header, slicer } = classes
  return (
    <Grid
      item
      container
      directon="column"
      justify="flex-start"
      alignItems="center"
      className={header}
    >
      <TextShadow
        split
        valuez={values1}
        // mask="linear-gradient(black 35%, transparent 35%)"
      >
        <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled data="ROMAN">
          ROMAN
        </TextGlitcher>
      </TextShadow>
      {/* <TextShadow xover direction="right">
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
        <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled data="GORBUNOV">
          GORBUNOV
        </TextGlitcher>
        </TextSlicer>
      </TextShadow> */}
    </Grid>
  )
}

export default Header

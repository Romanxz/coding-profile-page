import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextGlitcher from '../../ui/advanced/textglitcher'
import TextSlicer from '../../ui/advanced/textslicer'
import Appear from '../../animations/appear'

const useStyles = makeStyles(theme => ({
  header: {
    color: 'white',
    fontFamily: 'SF, sans-serif',
    fontWeight: 900,
    fontSize: 120,
    letterSpacing: 0,
    userSelect: 'none',
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: '100%',
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
    <header>
      <Appear direction="left">
        <TextSlicer>
          <TextGlitcher
            style={{ cursor: 'crosshair' }}
            direction="left"
            glitched
            data="ROMAN"
          >
            ROMAN
          </TextGlitcher>
        </TextSlicer>
      </Appear>
      <Appear direction="right">
        <TextSlicer>
          <TextGlitcher
            style={{ cursor: 'crosshair' }}
            direction="right"
            glitched
            data="GORBUNOV"
          >
            GORBUNOV
          </TextGlitcher>
        </TextSlicer>
      </Appear>
    </header>
  )
}

export default Header

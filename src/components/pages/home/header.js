import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextShadow from '../../animations/textshadow'
import TextGlitcher from '../../ui/advanced/textglitcher'

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    zIndex: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'SF, sans-serif',
    fontWeight: 900,
    fontSize: 120,
    letterSpacing: 0,
    userSelect: 'none',
    textShadow: `14px 14px 28px rgba(196, 0, 196, 0.22), 3px 10px 10px rgba(196, 0, 196, 0.19)`,
  },
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <span className={classes.header}>
        <TextShadow xover direction="left">
          <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled>
            ROMAN
          </TextGlitcher>
        </TextShadow>
      </span>
      <span className={classes.header}>
        <TextShadow xover direction="right">
          <TextGlitcher style={{ cursor: 'crosshair' }} isEnabled>
            GORBUNOV
          </TextGlitcher>
        </TextShadow>
      </span>
    </>
  )
}

export default Header

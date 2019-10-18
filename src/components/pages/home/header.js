import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Spacer from '../../ui/basic/spacer'
import TextGlitcher from '../../ui/advanced/textglitcher'
import Textshadow from '../../animations/textshadow'

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'SF',
    fontWeight: 800,
    fontSize: 120,
    letterSpacing: 1,
    textShadow: `14px 14px 28px rgba(196, 0, 196, 0.22), 3px 10px 10px rgba(196, 0, 196, 0.19)`,
  },
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <span className={classes.header}>
        <Textshadow>
          <TextGlitcher isEnabled>ROMAN GORBUNOV</TextGlitcher>
        </Textshadow>
      </span>
    </>
  )
}

export default Header

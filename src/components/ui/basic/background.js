import React from 'react'
import { makeStyles } from '@material-ui/styles'
import glitchart from '../../../media/art/glitchart.jpg'

const useStyles = makeStyles(theme => ({
  background: {
    zIndex: 100,
    position: 'fixed',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.background,
    '&::after': {
      content: `""`,
      backgroundImage: `url(${glitchart})`,
      opacity: 0.15,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      zIndex: -1,
    },
  },
}))

const Background = props => {
  const classes = useStyles()
  return <div className={classes.background}>{props.children}</div>
}

export default Background

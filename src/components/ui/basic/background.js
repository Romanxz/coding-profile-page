import React from 'react'
import { makeStyles } from '@material-ui/styles'

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
  },
}))

const Background = props => {
  const classes = useStyles()
  return <div className={classes.background}>{props.children}</div>
}

export default Background

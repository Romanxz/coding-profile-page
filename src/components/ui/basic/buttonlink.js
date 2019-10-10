import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 220,
    height: 50,
    background: 'inherit',
    color: 'inherit',
  },
}))

const Buttonlink = props => {
  const classes = useStyles()
  return (
    <Button style={props.style}>
      <Link className={classes.link} style={props.style} to={props.to}>
      {props.children}
      </Link>
    </Button>
  )
}

export default Buttonlink

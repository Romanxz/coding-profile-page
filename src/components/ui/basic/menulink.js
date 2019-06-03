import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menulink: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 60,
    width: 60,
    borderRadius: '50%',
    background: 'inherit',
    color: 'inherit',
  },
  menulinkicon: {
    position: 'relative',
    display: 'flex',
    background: theme.palette.primary.main,
    top: -1,
    left: 1,
    width: 35,
    height: 6,
    marginTop: 4,
    // borderRadius: 3,
  },
}))

const Menulink = props => {
  const classes = useStyles()
  return (
    <Button className={classes.menulink} style={props.style}>
      <Link className={classes.menulink} style={props.style} to={props.to}>
        <>
          <div className={classes.menulinkicon} />
          <div className={classes.menulinkicon} />
          <div className={classes.menulinkicon} />
        </>
      </Link>
    </Button>
  )
}

export default Menulink

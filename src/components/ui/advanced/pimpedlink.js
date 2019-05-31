import React from 'react'
import Button from '../basic/button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  pimpedlink: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 250,
    height: 60,
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

const Pimpedlink = props => {
  const classes = useStyles()
  return (
    <Button style={props.style}>
      <Link className={classes.pimpedlink} style={props.style} to={props.to}>
        {props.menu ? (
          <>
            <div className={classes.menulinkicon} />
            <div className={classes.menulinkicon} />
            <div className={classes.menulinkicon} />
          </>
        ) : (
          <Typography
            color={props.color ? props.color : 'primary'}
            variant={props.variant ? props.variant : 'h4'}
          >
            {props.children}
          </Typography>
        )}
      </Link>
    </Button>
  )
}

export default Pimpedlink

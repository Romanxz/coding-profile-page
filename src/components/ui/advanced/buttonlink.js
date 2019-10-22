import React from 'react'
import Button from '../basic/button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextGlitcher from './textglitcher'

const useStyles = makeStyles(theme => ({
  link: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: 'inherit',
    color: 'inherit',
  },
}))

const Buttonlink = props => {
  const classes = useStyles()
  return (
    <Button style={props.style}>
      <Link className={classes.link} style={props.style} to={props.to}>
        <Typography
          color={props.color ? props.color : 'primary'}
          variant={props.variant ? props.variant : 'h5'}
        >
          <TextGlitcher isEnabled={props.glitch ? true : false}>
            {props.children}
          </TextGlitcher>
        </Typography>
      </Link>
    </Button>
  )
}

export default Buttonlink

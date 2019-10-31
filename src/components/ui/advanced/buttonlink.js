import React from 'react'
import Button from '../basic/button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import TextFX from './text-fx/text-fx'

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
    <Button style={props.style} key={props.key}>
      <Link className={classes.link} style={props.style} to={props.to}>
        <TextFX
          glitch
          size={18}
          style={{
            fontFamily: 'Jura',
            fontWeight: 400,
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}
        >
          {props.children}
        </TextFX>
      </Link>
    </Button>
  )
}

export default Buttonlink

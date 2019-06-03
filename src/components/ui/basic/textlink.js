import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Textglow from '../../animations/textglow'

const useStyles = makeStyles(theme => ({
  textlink: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    background: 'transparent',
    color: 'inherit',
  },
}))

const Textlink = props => {
  const classes = useStyles()
  return (
    <Textglow>
      <Link className={classes.textlink} to={props.to} {...props}>
        <Typography
          color={props.color ? props.color : 'primary'}
          variant={props.variant ? props.variant : 'h3'}
        >
          {props.children}
        </Typography>
      </Link>
    </Textglow>
  )
}

export default Textlink

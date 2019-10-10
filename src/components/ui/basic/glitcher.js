import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  glitcher: {
    position: 'relative',
    color: 'white',
    fontFamily: 'marske',
    fontWeight: 200,
    fontSize: 28,
    letterSpacing: 2,
    '&::before': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: -2,
      top: 0,
      textShadow: '-1px 0 red',
      animation: 'noise 2s infinite linear alternate-reverse',
      background: 'black',
    },
    '&::after': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 2,
      top: 0,
      textShadow: ' -1px 0 blue',
      animation: 'noise2 2s infinite linear alternate-reverse',
      background: 'black',
    },
  },
  '@keyframes noise': {
    '0%': {
      clipPath: 'inset(40% 0 61% 0)',
    },
    '20%': {
      clipPath: 'inset(92% 0 1% 0)',
    },
    '40%': {
      clipPath: 'inset(43% 0 1% 0)',
    },
    '60%': {
      clipPath: 'inset(25% 0 58% 0)',
    },
    '80%': {
      clipPath: 'inset(54% 0 7% 0)',
    },
    '100%': {
      clipPath: 'inset(58% 0 43% 0)',
    },
  },
  '@keyframes noise2': {
    '0%': {
      clipPath: 'inset(12% 0 90% 0)',
    },
    '20%': {
      clipPath: 'inset(66% 0 80% 0)',
    },
    '40%': {
      clipPath: 'inset(1% 0 29% 0)',
    },
    '60%': {
      clipPath: 'inset(98% 0 76% 0)',
    },
    '80%': {
      clipPath: 'inset(22% 0 3% 0)',
    },
    '100%': {
      clipPath: 'inset(55% 0 86% 0)',
    },
  },
}))

const Glitcher = props => {
  const classes = useStyles()
  return (
    <div className={classes.glitcher} data-text={props.children}>
      {props.children}
    </div>
  )
}

export default Glitcher

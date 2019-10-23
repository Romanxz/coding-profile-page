import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 100,
    position: 'relative',
    display: 'flex',
    with: '100%',
    height: '100%',
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
  },
  slice1: {
    position: 'absolute',
    top: 0,
    left: 0,
    maskImage: 'linear-gradient(black 35%, transparent 35%)',
    animation: '$slice1 5s infinite alternate-reverse',
  },
  slice2: {
    position: 'absolute',
    top: 0,
    left: 0,
    maskImage:
      'linear-gradient(transparent 35%, black 35%, black 50%, transparent 50%)',
    animation: '$slice2 5s infinite alternate-reverse',
  },
  slice3: {
    position: 'absolute',
    top: 0,
    left: 0,
    maskImage:
      'linear-gradient(transparent 50%, black 50%, black 65%, transparent 65%)',
    animation: '$slice3 5s infinite alternate-reverse',
  },
  slice4: {
    position: 'absolute',
    top: 0,
    left: 0,
    maskImage: 'linear-gradient(transparent 65%, black 65%)',
    animation: '$slice4 5s infinite alternate-reverse',
  },
  '@keyframes slice1': {
    '0%': {
      left: -4,
    },
    '70%': {
      left: -1,
    },
    '80%': {
      left: 0,
    },
    '90%': {
      left: 2,
    },
    '100%': {
      left: 3,
    },
  },
  '@keyframes slice2': {
    '0%': {
      left: -4,
    },
    '70%': {
      left: -1,
    },
    '80%': {
      left: 0,
    },
    '90%': {
      left: 2,
    },
    '100%': {
      left: 3,
    },
  },
  '@keyframes slice3': {
    '0%': {
      left: -4,
    },
    '70%': {
      left: -1,
    },
    '80%': {
      left: 0,
    },
    '90%': {
      left: 2,
    },
    '100%': {
      left: 3,
    },
  },
  '@keyframes slice': {
    '0%': {
      left: -4,
    },
    '70%': {
      left: -1,
    },
    '80%': {
      left: 0,
    },
    '90%': {
      left: 2,
    },
    '100%': {
      left: 3,
    },
  },
}))

const TextSlicer = props => {
  const classes = useStyles()
  const { container, slice1, slice2, slice3, slice4 } = classes
  return (
    <Grid item container justify="center" alignItems="center" {...props}>
      <div className={slice1}>{props.children}</div>
      <div className={slice2}>{props.children}</div>
      <div className={slice3}>{props.children}</div>
      <div className={slice4}>{props.children}</div>
    </Grid>
  )
}

export default TextSlicer

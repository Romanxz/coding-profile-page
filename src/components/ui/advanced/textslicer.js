import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 100,
    position: 'relative',
    display: 'flex',
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'SF, sans-serif',
    fontWeight: 900,
    fontSize: 120,
    letterSpacing: 0,
    userSelect: 'none',
    height: 120,
    width: '100%',
    opacity: 1,
  },
  slice1: {
    position: 'absolute',
    maskImage: 'linear-gradient(black 35%, transparent 35%)',
    animation: '$slice1 3s infinite alternate-reverse',
  },
  slice2: {
    position: 'absolute',
    maskImage:
      'linear-gradient(transparent 35%, black 35%, black 50%, transparent 50%)',
    animation: '$slice2 3s infinite alternate-reverse',
  },
  slice3: {
    position: 'absolute',
    maskImage:
      'linear-gradient(transparent 50%, black 50%, black 65%, transparent 65%)',
    animation: '$slice3 3s infinite alternate-reverse',
  },
  slice4: {
    position: 'absolute',
    maskImage: 'linear-gradient(transparent 65%, black 65%)',
    animation: '$slice4 3s infinite alternate-reverse',
  },
  '@keyframes slice1': {
    '0%': {
      left: 0,
    },
    '25%': {
      left: -1,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: 1,
    },
    '100%': {
      left: 2,
    },
  },
  '@keyframes slice2': {
    '0%': {
      left: -2,
    },
    '25%': {
      left: 2,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -2,
    },
    '100%': {
      left: 0,
    },
  },
  '@keyframes slice3': {
    '0%': {
      left: -2,
    },
    '25%': {
      left: 0,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -2,
    },
    '100%': {
      left: 1,
    },
  },
  '@keyframes slice4': {
    '0%': {
      left: -1,
    },
    '25%': {
      left: 2,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -1,
    },
    '100%': {
      left: 0,
    },
  },
}))

const TextSlicer = props => {
  const classes = useStyles()
  const { container, slice1, slice2, slice3, slice4 } = classes
  const slices = [slice1, slice2, slice3, slice4]
  return (
    <div className={container}>
      {slices.map((name, id) => (
        <div key={id} className={name} {...props}>
          {props.children}
        </div>
      ))}
    </div>
  )
}

export default TextSlicer

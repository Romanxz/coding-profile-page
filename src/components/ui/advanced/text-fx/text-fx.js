import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Appear from '../../../animations/appear'

export const SHADOW_COLOR = '0, 62, 138,'

const sliceStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}

const glitchStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  zIndex: -1,
  opacity: 1,
}

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1.1,
    width: '100%',
    height: props => props.size,
    fontSize: props => props.size,
    whiteSpace: 'nowrap',
    color: theme.palette.secondary.main,
    zIndex: 100,
    filter: 'saturate(1000%)',
  },
  puretext: {
    ...sliceStyles,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
  },
  slice1: {
    ...sliceStyles,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage: 'linear-gradient(black 35%, transparent 35%)',
    animation: '$slice1 5s infinite alternate-reverse',
  },
  slice2: {
    ...sliceStyles,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage:
      'linear-gradient(transparent 35%, black 35%, black 50%, transparent 50%)',
    animation: '$slice2 5s infinite alternate-reverse',
  },
  slice3: {
    ...sliceStyles,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage:
      'linear-gradient(transparent 50%, black 50%, black 65%, transparent 65%)',
    animation: '$slice3 5s infinite alternate-reverse',
  },
  slice4: {
    ...sliceStyles,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage: 'linear-gradient(transparent 65%, black 65%)',
    animation: '$slice4 5s infinite alternate-reverse',
  },
  glitch1: {
    ...glitchStyles,
    left: -2,
    top: 1,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    textShadow: '-1px 0 red',
    animation: `$glitch1 3s infinite ease-out reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  glitch2: {
    ...glitchStyles,
    left: 2,
    top: -1,
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    animation: `$glitch2 3s infinite ease-out reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  '@keyframes glitch1': {
    '0%': {
      clipPath: 'inset(40% 0 61% 0)',
      textShadow: '-1px 0 red',
      color: 'red',
    },
    '5%': {
      clipPath: 'inset(92% 0 1% 0)',
      textShadow: '-1px 0 red',
      color: '#33FFE3',
    },
    '15%': {
      clipPath: 'inset(43% 0 1% 0)',
      textShadow: '-1px 0 #FF00FF',
      color: '#33FFE3',
    },
    '20% ': {
      clipPath: 'inset(25% 0 58% 0)',
      textShadow: '-1px 0 #9400D3',
      color: 'inherit',
    },
    '25%': {
      clipPath: 'inset(54% 0 7% 0)',
      textShadow: '-1px 0 #4B0082',
      color: 'purple',
    },
    '35%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: '-1px 0 red',
      color: 'green',
    },
    '36%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
    '100%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
  },
  '@keyframes glitch2': {
    '0%': {
      clipPath: 'inset(12% 0 89% 0)',
      textShadow: ' 1px 0 blue',
      color: 'inherit',
    },
    '5%': {
      clipPath: 'inset(44% 0 63% 0)',
      textShadow: ' 1px 0 #000080',
      color: '#32CD32',
    },
    '15%': {
      clipPath: 'inset(22% 0 75% 0)',
      textShadow: ' 1px 0 #00CED1',
      color: 'inherit',
    },
    '20% ': {
      clipPath: 'inset(75% 0 18% 0)',
      textShadow: ' 1px 0 #7FFFD4',
      color: 'inherit',
    },
    '25%': {
      clipPath: 'inset(3% 0 35% 0)',
      textShadow: ' 1px 0 #0000CD',
      color: '#000080',
    },
    '35%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: ' 1px 0 #191970',
      color: 'inherit',
    },
    '36%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
    '100%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
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

const TextFX = props => {
  const classes = useStyles(props)
  const {
    container,
    puretext,
    slice1,
    slice2,
    slice3,
    slice4,
    glitch1,
    glitch2,
  } = classes
  const slices = [slice1, slice2, slice3, slice4]
  const glitches = [glitch1, glitch2]
  return (
    <Appear
      direction={props.appear}
      className={container}
      {...props}
      data-text={props.data ? props.data : props.children}
    >
      {props.slice ? (
        slices.map((name, id) => (
          <div key={id} className={name} {...props}>
            {props.children}
          </div>
        ))
      ) : (
        <div className={puretext}>{props.children}</div>
      )}
      {props.glitch ? (
        glitches.map((name, id) => (
          <div key={id} className={name} {...props}>
            {props.children}
          </div>
        ))
      ) : (
        <div className={puretext}>{props.children}</div>
      )}
    </Appear>
  )
}

export default TextFX

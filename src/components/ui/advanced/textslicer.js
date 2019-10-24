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
    color: theme.palette.secondary.main,
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 900,
    fontSize: 90,
    letterSpacing: -5,
    userSelect: 'none',
    height: 90,
    width: '100%',
    opacity: 1,
    //   '&::before': {
    //     content: 'attr(data-text)',
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     zIndex: -1,
    //     left: -2,
    //     top: 1,
    //     opacity: 1,
    //     textShadow: '-1px 0 red',
    //     animation: `$glitch2 3s infinite ease-out reverse`,
    //     animationPlayState: styleprops =>
    //       styleprops.glitched
    //         ? 'running'
    //         : styleprops.isHovered
    //         ? 'running'
    //         : 'paused',
    //     animationFillMode: 'forwards',
    //     background: 'transparent',
    //     clipPath: 'inset(78% 0 4% 0)',
    //   },
    //   '&::after': {
    //     content: 'attr(data-text)',
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     zIndex: -1,
    //     left: 2,
    //     top: -1,
    //     opacity: 1,
    //     animation: `$glitch 3s infinite ease-out alternate-reverse`,
    //     animationPlayState: styleprops =>
    //       styleprops.glitched
    //         ? 'running'
    //         : styleprops.isHovered
    //         ? 'running'
    //         : 'paused',
    //     animationFillMode: 'forwards',
    //     background: 'transparent',
    //     clipPath: 'inset(25% 0 58% 0)',
    //   },
  },
  slice1: {
    position: 'absolute',
    maskImage: 'linear-gradient(black 35%, transparent 35%)',
    animation: '$slice1 5s infinite alternate-reverse',
  },
  slice2: {
    position: 'absolute',
    maskImage:
      'linear-gradient(transparent 35%, black 35%, black 50%, transparent 50%)',
    animation: '$slice2 5s infinite alternate-reverse',
  },
  slice3: {
    position: 'absolute',
    maskImage:
      'linear-gradient(transparent 50%, black 50%, black 65%, transparent 65%)',
    animation: '$slice3 5s infinite alternate-reverse',
  },
  slice4: {
    position: 'absolute',
    maskImage: 'linear-gradient(transparent 65%, black 65%)',
    animation: '$slice4 5s infinite alternate-reverse',
  },
  'keyframes glitch': {
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

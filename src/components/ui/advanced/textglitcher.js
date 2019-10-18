import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  trigger: { position: 'absolute', width: '100%', height: '100%', zIndex: 100 },
  glitcher: {
    position: 'relative',
    color: 'white',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    zIndex: -1,
    filter: 'saturate(2000%)',
    '&::before': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
      left: -3,
      top: -1,
      opacity: 1,
      textShadow: '-1px 0 red',
      animation: `$glitch2 0.6s infinite linear reverse`,
      animationPlayState: styleprops =>
        styleprops.isEnabled
          ? 'running'
          : styleprops.isHovered
          ? 'running'
          : 'paused',
      animationFillMode: 'forwards',
      background: 'transparent',
      clipPath: 'inset(0% 0 0% 0)',
    },
    '&::after': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
      left: 3,
      top: 1,
      opacity: 1,
      animation: `$glitch 0.6s infinite linear alternate-reverse`,
      animationPlayState: styleprops =>
        styleprops.isEnabled
          ? 'running'
          : styleprops.isHovered
          ? 'running'
          : 'paused',
      animationFillMode: 'forwards',
      background: 'transparent',
      clipPath: 'inset(25% 0 58% 0)',
    },
  },
  '@keyframes glitch': {
    '0%': {
      clipPath: 'inset(40% 0 61% 0)',
      textShadow: '-1px 0 red',
      color: 'red',
    },
    '20%': {
      clipPath: 'inset(92% 0 1% 0)',
      textShadow: '-1px 0 red',
      color: 'inherit',
    },
    '40%': {
      clipPath: 'inset(43% 0 1% 0)',
      textShadow: '-1px 0 #FF00FF',
      color: 'inherit',
    },
    '60% ': {
      clipPath: 'inset(25% 0 58% 0)',
      textShadow: '-1px 0 #9400D3',
      color: 'inherit',
    },
    '80%': {
      clipPath: 'inset(54% 0 7% 0)',
      textShadow: '-1px 0 #4B0082',
      color: 'purple',
    },
    '100%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: '-1px 0 red',
      color: 'green',
    },
  },
  '@keyframes glitch2': {
    '0%': {
      clipPath: 'inset(12% 0 89% 0)',
      textShadow: ' 1px 0 blue',
      color: 'inherit',
    },
    '20%': {
      clipPath: 'inset(44% 0 63% 0)',
      textShadow: ' 1px 0 #000080',
      color: '#32CD32',
    },
    '40%': {
      clipPath: 'inset(22% 0 75% 0)',
      textShadow: ' 1px 0 #00CED1',
      color: 'inherit',
    },
    '60% ': {
      clipPath: 'inset(75% 0 18% 0)',
      textShadow: ' 1px 0 #7FFFD4',
      color: 'inherit',
    },
    '80%': {
      clipPath: 'inset(3% 0 35% 0)',
      textShadow: ' 1px 0 #0000CD',
      color: '#000080',
    },
    '100%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: ' 1px 0 #191970',
      color: 'inherit',
    },
  },
}))

const TextGlitcher = ({ duration, isEnabled, ...props }) => {
  const [isHovered, toggleHover] = useState(false)
  const styleprops = { isHovered, duration, isEnabled }
  const classes = useStyles(styleprops)
  return (
    <>
      <div
        className={classes.trigger}
        onMouseOver={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      />
      <div
        className={classes.glitcher}
        data-text={props.data ? props.data : props.children}
      >
        {props.children}
      </div>
    </>
  )
}

export default TextGlitcher

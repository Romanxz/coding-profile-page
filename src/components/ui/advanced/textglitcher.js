import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  trigger: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  glitcher: {
    position: 'relative',
    color: 'white',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    cursor: 'text',
    zIndex: 100,
    filter: 'saturate(2000%)',
    '&::before': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
      left: -3,
      top: -2,
      opacity: 1,
      textShadow: '-1px 0 red',
      animation: `$glitch2 3s infinite ease-out alternate-reverse`,
      animationPlayState: styleprops =>
        styleprops.isEnabled
          ? 'running'
          : styleprops.isHovered
          ? 'running'
          : 'paused',
      animationFillMode: 'forwards',
      background: 'transparent',
      clipPath: 'inset(78% 0 4% 0)',
    },
    '&::after': {
      content: 'attr(data-text)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
      left: 3,
      top: 2,
      opacity: 1,
      animation: `$glitch 3s infinite ease-out alternate-reverse`,
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
}))

const TextGlitcher = ({ duration, isEnabled, ...props }) => {
  const [isHovered, toggleHover] = useState(false)
  const styleprops = { isHovered, duration, isEnabled }
  const classes = useStyles(styleprops)
  return (
    <>
      <div
        className={classes.glitcher}
        {...props}
        data-text={props.data ? props.data : props.children}
      >
        <div
          className={classes.trigger}
          onMouseOver={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        />
        {props.children}
      </div>
    </>
  )
}

export default TextGlitcher

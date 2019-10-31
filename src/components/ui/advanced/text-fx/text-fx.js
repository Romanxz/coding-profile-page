import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Appear from '../../../animations/appear'
import Slice from './slice'
import Glitch from './glitch'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    lineHeight: 1.1,
    width: '100%',
    height: props => props.size,
    fontSize: props => props.size,
    [theme.breakpoints.only('md')]: {
      height: props => `calc(${props.size}px/100*90)`,
      fontSize: props => `calc(${props.size}px/100*90)`,
    },
    [theme.breakpoints.only('sm')]: {
      height: props => `calc(${props.size}px/100*70)`,
      fontSize: props => `calc(${props.size}px/100*70)`,
    },
    [theme.breakpoints.only('xs')]: {
      height: props => `calc(${props.size}px/100*60)`,
      fontSize: props => `calc(${props.size}px/100*60)`,
    },
    whiteSpace: 'nowrap',
    color: theme.palette.secondary.main,
    zIndex: 100,
    filter: 'saturate(1200%)',
  },
  puretext: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
  },
}))

const TextFX = props => {
  const [isHovered, toggleHover] = useState(false)
  const classes = useStyles(props)
  const { container, puretext } = classes
  return (
    <Appear
      direction={props.appear}
      className={container}
      {...props}
      data-text={props.data ? props.data : props.children}
    >
      <div
        className={container}
        style={{ zIndex: 100, filter: 'saturate(100%)' }}
        onMouseMove={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        {props.glitch ? (
          <Glitch
            isHovered={isHovered}
            break={props.break}
            flexstart={props.flexstart}
          >
            {props.children}
          </Glitch>
        ) : (
          <div className={puretext}>{props.children}</div>
        )}
        {props.slice ? (
          <Slice break={props.break} flexstart={props.flexstart}>
            {props.children}
          </Slice>
        ) : (
          <div className={puretext}>{props.children}</div>
        )}
      </div>
    </Appear>
  )
}

export default TextFX

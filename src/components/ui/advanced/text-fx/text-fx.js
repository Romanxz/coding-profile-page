import React from 'react'
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
    lineHeight: 1.1,
    width: '100%',
    height: props => props.size,
    fontSize: props => props.size,
    [theme.breakpoints.only('md')]: {
      height: props => `calc(${props.size}px/100*80)`,
      fontSize: props => `calc(${props.size}px/100*80)`,
    },
    [theme.breakpoints.only('sm')]: {
      height: props => `calc(${props.size}px/100*70)`,
      fontSize: props => `calc(${props.size}px/100*70)`,
    },
    [theme.breakpoints.only('xs')]: {
      height: props => `calc(${props.size}px/100*55)`,
      fontSize: props => `calc(${props.size}px/100*55)`,
    },
    whiteSpace: 'nowrap',
    color: theme.palette.secondary.main,
    zIndex: 100,
    filter: 'saturate(1000%)',
  },
  puretext: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: { justifyContent: 'flex-start' },
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
  },
}))

const TextFX = props => {
  const classes = useStyles(props)
  const { container, puretext } = classes
  return (
    <Appear
      direction={props.appear}
      className={container}
      {...props}
      data-text={props.data ? props.data : props.children}
    >
      {props.glitch ? (
        <Glitch>{props.children}</Glitch>
      ) : (
        <div className={puretext}>{props.children}</div>
      )}
      {props.slice ? (
        <Slice>{props.children}</Slice>
      ) : (
        <div className={puretext}>{props.children}</div>
      )}
    </Appear>
  )
}

export default TextFX

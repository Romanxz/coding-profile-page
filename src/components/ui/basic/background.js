import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Particles from 'react-particles-js'

const useStyles = makeStyles(theme => ({
  background: {
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.background,
  },
  particles: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}))

var particles = {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 600 },
    },
    color: { value: '#2dfaa1' },
    shape: {
      type: 'polygon',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 6 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 144.30708547789706,
      color: '#0077ff',
      opacity: 0.40246529723245905,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: { enable: true, rotateX: 561.194221302933, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false, mode: 'bubble' },
      resize: true,
    },
    modes: {
      grab: {
        distance: 219.26084732136317,
        line_linked: { opacity: 0.6087378560910799 },
      },
      bubble: {
        distance: 201,
        size: 12,
        duration: 2,
        opacity: 0.576574820733955,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
}

const Background = props => {
  const classes = useStyles()
  return (
    <div className={classes.background}>
      <Particles params={particles} className={classes.particles} />
      {props.children}
    </div>
  )
}

export default Background

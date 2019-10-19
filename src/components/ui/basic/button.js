import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    zIndex: 120,
    position: 'relative',
    display: 'flex',
    width: 250,
    height: 60,
    color: 'white',
    fontFamily: 'Jura',
    fontWeight: 400,
    fontSize: 22,
    letterSpacing: 1,
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
  },
  frame: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    background: 'transparent',
    justifyContent: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.4s',
    '&::before': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 2,
      top: -1,
      left: -2,
      width: 'inherit',
      height: 'inherit',
      border: '1px double #0d00ff',
      opacity: 1,
      filter: 'saturate(2000%) ',
    },
    '&::after': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 1,
      top: 1,
      left: 2,
      width: 'inherit',
      height: 'inherit',
      border: '1px double #ff0044',
      opacity: 1,
      filter: 'saturate(2000%) ',
    },
  },
})

class Button extends React.Component {
  state = { isPressed: false, isHovered: false }

  toggleHover = () => {
    this.setState({ isHovered: true })
  }

  togglePress = () => {
    this.setState({ isPressed: !this.state.isPressed })
  }

  closePressHover = () => {
    this.setState({ isPressed: false, isHovered: false })
  }

  render() {
    let { children, classes, style, disabled, onClick } = this.props
    const { isPressed, isHovered } = this.state
    return (
      <Shadow
        className={classes.button}
        style={style}
        pose={disabled ? 'enter' : isPressed ? 'press' : 'enter'}
        {...this.props}
        onClick={disabled ? null : onClick}
        onMouseDown={this.togglePress}
        onMouseUp={this.closePress}
        // onPointerDown={this.togglePress}
        // onPointerUp={this.closePress}
        onMouseMove={this.toggleHover}
        onMouseLeave={this.closePressHover}
      >
        <div
          className={classes.frame}
          style={{ opacity: isHovered ? 0.4 : 0 }}
        />
        {children}
      </Shadow>
    )
  }
}

export default withStyles(styles)(Button)

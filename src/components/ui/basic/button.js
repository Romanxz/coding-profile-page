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
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: 2,
    // border: '1px solid green',
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    '&::before': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 1,
      top: -1,
      left: -1,
      width: 250,
      height: 60,
      border: '1px double #c70081',
      opacity: 0.5,
      filter: 'saturate(500%)',
    },
    '&::after': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 1,
      top: 1,
      left: 1,
      width: 250,
      height: 60,
      border: '1px double #006b91',
      opacity: 0.5,
      filter: 'saturate(500%)',
      // clip: 'rect(44px, 450px, 56px, 0)',
      // animation: 'noise 2s infinite linear alternate-reverse',
    },
  },
  blur: {
    zIndex: 5,
    position: 'absolute',
    display: 'flex',
    width: 270,
    height: 75,
    background: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    filter: 'blur(8px)',
  },
  '@keyframes noise': {
    '0%': {
      clip: 'rect(44px, 450px, 56px, 0)',
    },
    '50%': {
      clip: 'rect(142px, 77px, 3px, 0)',
    },
    '100%': {
      clip: 'rect(68px, 820px, 33px, 0)',
    },
  },
})

class Button extends React.Component {
  state = { isPressed: false }

  togglePress = () => {
    this.setState({ isPressed: !this.state.isPressed })
  }

  closePress = () => {
    this.setState({ isPressed: false })
  }

  render() {
    let { children, classes, style, disabled, onClick } = this.props
    const { isPressed } = this.state
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
        onMouseLeave={this.closePress}
      >
        {children}
        <div className={classes.blur} />
      </Shadow>
    )
  }
}

export default withStyles(styles)(Button)

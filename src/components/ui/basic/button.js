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
    // borderStyle: "solid",
    // borderImage: "linear-gradient(to left, #743ad5, #d53a9d)",
    // borderImageSlice: 1,
    // borderWidth: 1,
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    // color: "rgba(86, 4, 174, 0.79)",
    // fontFamily: "Orbitron",
    // fontWeight: 900,
    // fontSize: 24,
    // letterSpacing: 3,
    boxSizing: 'border-box',
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
      </Shadow>
    )
  }
}

export default withStyles(styles)(Button)

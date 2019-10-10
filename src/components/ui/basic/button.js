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
    border: '1px solid green',
    background: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
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

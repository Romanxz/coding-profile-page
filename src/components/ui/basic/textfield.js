import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  label: {
    position: 'absolute',
    top: 18,
    left: 20,
    background: 'transparent',
    transitionProperty: 'all',
    transitionDuration: '0.4s',
  },
  input: {
    position: 'relative',
    height: 65,
    width: '100%',
    border: 'none',
    borderRadius: 8,
    background: 'transparent',
    fontFamily: 'Jura',
    fontWeight: 500,
    fontSize: 20,
    color: theme.palette.primary.dark,
    outline: 'none',
    letterSpacing: 0,
  },
})

class Textfield extends React.Component {
  state = { isSelected: false }

  enableFocus = () => {
    this.setState({ isSelected: true })
  }

  disableFocus = e => {
    // eslint-disable-next-line no-unused-expressions
    e.target.value === '' ? this.setState({ isSelected: false }) : null
  }

  render() {
    const { enableFocus, disableFocus } = this,
      { name, type, style, disabled } = this.props,
      { isSelected } = this.state,
      { input, label } = this.props.classes
    return (
      <Shadow
        className={input}
        style={style}
        pose={disabled ? 'press' : 'enter'}
      >
        <Typography
          color="primary"
          variant="h5"
          className={label}
          style={{ top: isSelected ? -14 : 18 }}
        >
          {name}
        </Typography>
        <input
          className={input}
          id={name}
          type={type ? type : 'text'}
          onSelect={enableFocus}
          onBlur={disableFocus}
          {...this.props}
        />
      </Shadow>
    )
  }
}

export default withStyles(styles)(Textfield)

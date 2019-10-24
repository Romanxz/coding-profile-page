import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import TextGlitcher from '../advanced/textglitcher'

const styles = theme => ({
  hiddencheckbox: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clippath: ' inset(50 %)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
  actualcheckbox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer',
  },
  frame: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    userSelect: 'none',
    background: 'transparent',
    justifyContent: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.4s',
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer',
    '&::before': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 40,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `2px inset ${theme.palette.secondary.main}`,
      borderRadius: '50%',
      opacity: 1,
      filter: 'blur(5px)',
    },
    '&::after': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 40,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `1px double ${theme.palette.secondary.dark}`,
      borderRadius: '50%',
      opacity: 1,
      filter: 'saturate(2000%)',
    },
  },
  checkmark: {
    position: 'relative',
    display: 'flex',
    zIndex: 30,
    height: 30,
    width: 30,
    opacity: 1,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  name: {
    position: 'absolute',
    left: 50,
    background: 'transparent',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    height: 30,
    width: 110,
    userSelect: 'none',
  },
})

class Checkbox extends React.Component {
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
    const { isPressed, isHovered } = this.state
    let { style, classes, checked, onChange } = this.props
    const {
      hiddencheckbox,
      actualcheckbox,
      checkmark,
      frame,
      name,
      wrapper,
    } = classes
    return (
      <div className={wrapper}>
        <Shadow
          pose={isPressed ? 'press' : 'enter'}
          className={actualcheckbox}
          style={style}
        >
          <Typography color="secondary" variant="overline" className={name}>
            <TextGlitcher style={{ cursor: 'pointer' }} glitched noshadow>
              {this.props.name}
            </TextGlitcher>
          </Typography>
          <label
            className={actualcheckbox}
            onMouseDown={this.togglePress}
            onMouseUp={this.closePress}
            onMouseMove={this.toggleHover}
            onMouseLeave={this.closePressHover}
          >
            <div
              className={checkmark}
              style={{ width: checked ? 40 : 0, height: checked ? 40 : 0 }}
            />
            <input
              name={this.props.name}
              className={hiddencheckbox}
              type="checkbox"
              onClick={onChange}
              {...this.props}
            />
          </label>
          <div className={frame} style={{ opacity: isHovered ? 1 : 0.4 }} />
        </Shadow>
      </div>
    )
  }
}

export default withStyles(styles)(Checkbox)

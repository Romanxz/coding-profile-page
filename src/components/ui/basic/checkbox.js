import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

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
  checkmark: {
    position: 'relative',
    display: 'flex',
    height: 30,
    width: 30,
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
  state = { isPressed: false }

  togglePress = () => {
    this.setState({ isPressed: !this.state.isPressed })
  }

  closePress = () => {
    this.setState({ isPressed: false })
  }

  render() {
    const { isPressed } = this.state
    let { style, classes, checked, onChange } = this.props
    const { hiddencheckbox, actualcheckbox, checkmark, name, wrapper } = classes
    return (
      <div className={wrapper}>
        <Shadow
          pose={isPressed ? 'press' : 'enter'}
          className={actualcheckbox}
          style={style}
        >
          <Typography color="primary" variant="button" className={name}>
            {this.props.name}
          </Typography>
          <label
            className={actualcheckbox}
            onMouseDown={this.togglePress}
            onMouseUp={this.closePress}
            onMouseLeave={this.closePress}
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
        </Shadow>
      </div>
    )
  }
}

export default withStyles(styles)(Checkbox)

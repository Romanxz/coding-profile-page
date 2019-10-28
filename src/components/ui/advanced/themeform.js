import React from 'react'
import Textfield from '../basic/textfield'
import Selector from './selector'
import FormErrors from './formerrors'
import { Grid } from '@material-ui/core'
import Buttonlink from './buttonlink'

export default class Themeform extends React.Component {
  state = {
    Background: '',
    Text: '',
    formErrors: { Background: '', Text: '' },
    isBackgroundValid: false,
    isTextValid: false,
    isFormEnabled: false,
    isFormValid: false,
  }

  handleSelector = event => {
    this.setState({
      isFormEnabled: event.target.name === 'Custom' ? true : false,
    })
    this.props.toggleTheme(event.target.name)
    if (event.target.name === 'Custom') this.textInput.getInnerRef().focus()
  }

  handleTextfield = event => {
    const { name, value } = event.target
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value)
      }
    )
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let isBackgroundValid = this.state.isBackgroundValid
    let isTextValid = this.state.isTextValid
    switch (fieldName) {
      case 'Background':
        isBackgroundValid =
          value.match(/^#([0-9a-f]{3}){1,2}$/i) ||
          value.match(/linear-gradient/)
        fieldValidationErrors.Background = isBackgroundValid
          ? ''
          : 'supposed to be HEX color or linear-gradient. '
        break
      case 'Text':
        isTextValid = value.match(/^#([0-9a-f]{3}){1,2}$/i)
        fieldValidationErrors.Text = isTextValid
          ? ''
          : ' supposed to be HEX color.'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        isBackgroundValid: isBackgroundValid,
        isTextValid: isTextValid,
        isFormValid: isBackgroundValid && isTextValid,
      },
      this.updateTheme(isBackgroundValid, isTextValid)
    )
  }

  updateTheme(isBackgroundValid, isTextValid) {
    if (isBackgroundValid) this.props.updateBgColor(this.state.Background)
    if (isTextValid) this.props.updateTextColor(this.state.Text)
  }

  render() {
    const { handleSelector, handleTextfield } = this,
      { Background, Text, isFormEnabled, isFormValid } = this.state,
      { theme, mdUp } = this.props
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems={mdUp ? 'flex-start' : 'center'}
        spacing={2}
        style={{ width: '100%' }}
      >
        <Grid item>
          <Selector onChange={handleSelector} theme={theme} />
        </Grid>
        <Grid
          item
          container
          justify={mdUp ? 'flex-start' : 'center'}
          style={{ width: '100%' }}
        >
          <Textfield
            key={10}
            onChange={handleTextfield}
            value={Background}
            type="text"
            name="Background"
            disabled={!isFormEnabled}
            ref={input => {
              this.textInput = input
            }}
          />
        </Grid>
        <Grid
          item
          container
          justify={mdUp ? 'flex-start' : 'center'}
          style={{ width: '100%' }}
        >
          <Textfield
            key={11}
            onChange={handleTextfield}
            value={Text}
            type="text"
            name="Text"
            disabled={!isFormEnabled}
          />
        </Grid>
        <Grid item>
          <Buttonlink key={33} glitch to="/">
            HOME
          </Buttonlink>
        </Grid>
        {!isFormValid ? (
          <Grid item container>
            <FormErrors formErrors={this.state.formErrors} />
          </Grid>
        ) : null}
      </Grid>
    )
  }
}

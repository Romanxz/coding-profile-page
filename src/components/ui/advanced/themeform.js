import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Textfield from '../basic/textfield'
import Selector from './selector'
import Menulink from '../basic/menulink'
import Button from '../basic/button'
import FormErrors from './formerrors'
import { Grid, Typography } from '@material-ui/core'

const styles = {
  formbutton: {
    borderRadius: 8,
    height: 60,
    width: 150,
  },
}

export default withStyles(styles)(
  class Themeform extends React.Component {
    state = {
      theme: 'Black',
      Background: '',
      Text: '',
      formErrors: { Background: '', Text: '' },
      isBackgroundValid: false,
      isTextValid: false,
      isFormValid: false,
    }

    handleSelector = event => {
      this.setState({
        theme: event.target.name,
      })
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
            value.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/gi) ||
            value.match(/linear-gradient/)
          fieldValidationErrors.Background = isBackgroundValid
            ? ''
            : 'supposed to be HEX color or linear-gradient. '
          break
        case 'Text':
          isTextValid = value.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/gi)
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
        },
        this.validateForm
      )
    }

    validateForm() {
      this.setState({
        isFormValid: this.state.isBackgroundValid && this.state.isTextValid,
      })
    }

    render() {
      const { handleSelector, handleTextfield } = this,
        { Background, Text, theme, isFormValid } = this.state,
        { toggleTheme, updateCustomTheme } = this.props
      return (
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Selector
              onChange={handleSelector}
              theme={theme}
              style={{ marginTop: 70 }}
            />
          </Grid>
          <Grid item>
            <Textfield
              onChange={handleTextfield}
              value={Background}
              type="text"
              name="Background"
              disabled={theme === 'Custom' ? null : 'disabled'}
              autoComplete="off"
            />
          </Grid>
          <Grid item>
            <Textfield
              onChange={handleTextfield}
              value={Text}
              type="text"
              name="Text"
              disabled={theme === 'Custom' ? null : 'disabled'}
              autoComplete="off"
            />
          </Grid>
          <Grid item>
            <FormErrors formErrors={this.state.formErrors} />
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Button
              onClick={
                theme === 'Custom'
                  ? updateCustomTheme(Background, Text)
                  : toggleTheme(theme)
              }
              disabled={theme !== 'Custom' ? false : isFormValid ? false : true}
              classname={this.props.classes.formbutton}
            >
              <Typography color="primary" variant="h5">
                Apply
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Menulink to="/menu" />
          </Grid>
        </Grid>
      )
    }
  }
)

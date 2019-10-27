import React from 'react'
import { Typography } from '@material-ui/core'
import TextGlitcher from './textglitcher'

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <Typography key={i} color="error" variant="button">
            <TextGlitcher
              key={i}
              style={{ cursor: 'crosshair' }}
              glitched
              noshadow
              direction="right"
              data={`${fieldName} ${formErrors[fieldName]}`}
            >
              {fieldName} {formErrors[fieldName]}
            </TextGlitcher>
          </Typography>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors

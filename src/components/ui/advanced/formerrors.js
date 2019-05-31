import React from 'react'
import { Typography } from '@material-ui/core'

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <Typography color="error" variant="button" key={i}>
            {fieldName} {formErrors[fieldName]}
          </Typography>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors

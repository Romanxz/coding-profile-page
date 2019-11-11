import React from 'react'
import TextFX from './text-fx/text-fx'
import Appear from '../../animations/appear'

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, id) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <TextFX
            key={id}
            glitch
            break
            size={18}
            style={{
              fontFamily: 'Jura',
              color: 'red',
              fontWeight: 400,
              letterSpacing: 0,
              textTransform: 'uppercase',
            }}
          >
            {fieldName} {formErrors[fieldName]}
          </TextFX>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors

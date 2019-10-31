import React from 'react'
import TextFX from './text-fx/text-fx'

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <div style={{ position: 'absolute', height: 18, width: '100%' }}>
            <TextFX
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
          </div>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors

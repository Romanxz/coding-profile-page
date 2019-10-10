import React from 'react'
import Checkbox from '../basic/checkbox'
import { Grid } from '@material-ui/core'

const Selector = ({ theme, onChange }) => {
  return (
    <Grid container direction="row" justify="center" spacing={4}>
      <Grid item>
        <Checkbox
          name="White"
          checked={theme === 'White' ? true : false}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <Checkbox
          name="Black"
          checked={theme === 'Black' ? true : false}
          onChange={onChange}
        />
      </Grid>

      <Grid item>
        <Checkbox
          name="Gradient"
          checked={theme === 'Gradient' ? true : false}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <Checkbox
          name="Custom"
          checked={theme === 'Custom' ? true : false}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  )
}

export default Selector

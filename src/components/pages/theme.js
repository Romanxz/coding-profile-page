import React from 'react'
import Container from '../animations/container'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core/'
import Form from '../ui/advanced/form'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 20,
  },
}

const Theme = props => {
  const { container } = props.classes
  return (
    <Container className={container}>
      <Grid container direction="row" spacing={0}>
        <Grid item lg={4} sm={2} xs={1} />
        <Grid item lg={4} sm={8} xs={10}>
          <Form
            toggleTheme={props.toggleTheme}
            updateCustomTheme={props.updateCustomTheme}
          />
        </Grid>
        <Grid item lg={4} sm={2} xs={1} />
      </Grid>
    </Container>
  )
}

export default withStyles(styles)(Theme)

import React from 'react'
import Container from '../animations/container'
import Shadow from '../animations/shadow'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Pimpedlink from '../ui/advanced/pimpedlink'

const useStyles = makeStyles({
  design: {
    zIndex: 101,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
})

const Design = () => {
  const classes = useStyles()
  return (
    <Container className={classes.design}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <Shadow style={{ padding: 30 }}>
            <Typography color="secondary" variant="h2">
              In Development...
            </Typography>
          </Shadow>
        </Grid>
        <Grid item>
          <Pimpedlink to="/menu">BACK</Pimpedlink>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Design

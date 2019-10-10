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
        justify="flex-start"
        alignItems="center"
      >
        <Grid item style={{ height: 60, width: '100%' }} />
        <Shadow style={{ height: 80, width: '100%' }}>
          <Grid
            item
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ height: 80 }}
            spacing={3}
          >
            <Grid item>
              <Pimpedlink
                style={{ height: 40, width: 120 }}
                variant="h6"
                to="/"
              >
                HOME
              </Pimpedlink>
            </Grid>
            <Grid item>
              <Pimpedlink
                style={{ height: 40, width: 120 }}
                variant="h6"
                to="/design"
              >
                DESIGN
              </Pimpedlink>
            </Grid>
            <Grid item>
              <Pimpedlink
                style={{ height: 40, width: 120 }}
                variant="h6"
                to="/hex"
              >
                HEX
              </Pimpedlink>
            </Grid>
            <Grid item>
              <Pimpedlink
                style={{ height: 40, width: 120 }}
                variant="h6"
                to="/about"
              >
                ABOUT
              </Pimpedlink>
            </Grid>
            <Grid item>
              <Pimpedlink
                style={{ height: 40, width: 120 }}
                variant="h6"
                to="/theme"
              >
                THEME
              </Pimpedlink>
            </Grid>
          </Grid>
        </Shadow>
      </Grid>
    </Container>
  )
}

export default Design

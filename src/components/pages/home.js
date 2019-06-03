import React from 'react'
import Container from '../animations/container'
import Textlink from '../ui/basic/textlink'
import { Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Appear from '../animations/appear'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  border: {
    width: '100%',
    height: 2,
    background:
      'radial-gradient(circle, rgba(255,255,255,1) 35%, rgba(255,255,255,0.5) 60%, rgba(251,215,215,0) 100%)',
    boxShadow: '0 0px 0px 2px rgba(161, 152, 173, 0.1)',
  },
}))

const Home = () => {
  const classes = useStyles()
  const { container, border } = classes
  return (
    <Container className={container}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={{ height: 300 }}>
          <Appear>
            <Typography color="primary" variant="h5">
              Привет, меня зовут Рома и ты находишься на моей личной страничке.
            </Typography>
          </Appear>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item lg={2} />
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
            <Appear>
              <Textlink to="/menu" style={{ width: 250 }}>
                Кто я ?
              </Textlink>
            </Appear>
          </Grid>

          <Grid
            item
            container
            justify="center"
            alignItems="center"
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
            <Appear>
              {' '}
              <Textlink>Что я умею</Textlink>
            </Appear>
          </Grid>
          <Grid item lg={2} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Appear className={border} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

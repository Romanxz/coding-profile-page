import React from 'react'
import Container from '../animations/container'
import Buttonlink from '../ui/basic/buttonlink'
import { Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { Spacer } from '../ui/basic/spacer'
import Glitcher from '../ui/basic/glitcher'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}))

const Home = () => {
  const classes = useStyles()
  const { container } = classes
  return (
    <Container className={container}>
      <Grid container direction="row">
        <Grid item xs={6} />
        <Grid item container direction="column" xs={6}>
          <Grid item style={{ height: '70%' }} />
          <Grid
            item
            container
            // style={{ border: '1px solid white' }}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Buttonlink to="/skills">{'< STORY >'}</Buttonlink>
            <Spacer size={4} />
            <Buttonlink to="/design">{'< SKILLS >'}</Buttonlink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

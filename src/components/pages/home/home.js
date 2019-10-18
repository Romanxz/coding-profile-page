import React from 'react'
import Container from '../../animations/container'
import Buttonlink from '../../ui/basic/buttonlink'
import { Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { Spacer } from '../../ui/basic/spacer'
import TextGlitcher from '../../ui/advanced/textglitcher'
import Header from './header'

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
          <Grid item style={{ height: '70%' }}>
            <Spacer size={10} />
            <Header />
            <Spacer size={4} />
            <TextGlitcher>
              Welcome to my official page. I am junior Coder, Web designer and
              stuff.
            </TextGlitcher>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Buttonlink to="/skills">
              <TextGlitcher>{'< STORY >'}</TextGlitcher>
            </Buttonlink>
            <Spacer size={4} />
            <Buttonlink to="/design">
              <TextGlitcher>{'< SKILLS >'}</TextGlitcher>
            </Buttonlink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

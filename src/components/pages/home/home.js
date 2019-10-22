import React from 'react'
import Container from '../../animations/container'
import Buttonlink from '../../ui/advanced/buttonlink'
import { Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { Spacer } from '../../ui/basic/spacer'
import TextGlitcher from '../../ui/advanced/textglitcher'
import TextShadow from '../../animations/textshadow'
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
        <Grid item xs={7} />
        <Grid item container direction="column" xs={5}>
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            style={{ height: '60%' }}
          >
            <Spacer size={8} />
            <TextShadow noshadow>
              <Typography color="primary" variant="h6">
                Hello! My name is
              </Typography>
            </TextShadow>
            <Header />
            <Spacer size={1} />
            <TextShadow noshadow>
              <Typography color="primary" variant="h6">
                and I am a Javascript developer.
              </Typography>
            </TextShadow>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Container>
              <Buttonlink glitch to="/skills">
                MY SKILLS
              </Buttonlink>
              <Spacer size={4} />
              <Buttonlink glitch to="/about">
                MY STORY
              </Buttonlink>
              <Spacer size={4} />
              <Buttonlink glitch to="/theme">
                THEME
              </Buttonlink>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

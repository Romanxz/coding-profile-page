import React from 'react'
import Container from '../../animations/container'
import Buttonlink from '../../ui/advanced/buttonlink'
import { Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { Spacer } from '../../ui/basic/spacer'
import TextGlitcher from '../../ui/advanced/textglitcher'
import Header from './header'
import Divider from '../../ui/basic/divider'

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
    <Container staggerin={400} className={container}>
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
            <Spacer size={20} />
            <Header />
            <Spacer size={2} />
            <Divider height={1} width={300} />
            <Grid item style={{ position: 'relative' }}>
              <Typography color="secondary" variant="button">
                <TextGlitcher
                  key={2139493292494}
                  style={{ cursor: 'crosshair' }}
                  glitched
                  noshadow
                  direction="right"
                >
                  {'- Javascript Programmer -'}
                </TextGlitcher>
              </Typography>
            </Grid>
            <Grid item style={{ position: 'relative' }}>
              <Typography color="secondary" variant="button">
                <TextGlitcher
                  key={213122133133}
                  style={{ cursor: 'crosshair' }}
                  glitched
                  noshadow
                  direction="right"
                >
                  {'- Web Designer -'}
                </TextGlitcher>
              </Typography>
            </Grid>
          </Grid>
          <Container>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Buttonlink key={213123} glitch to="/skills">
                SKILLS
              </Buttonlink>
              <Spacer size={4} />
              <Buttonlink key={2321313123} glitch to="/about">
                BIO
              </Buttonlink>
              <Spacer size={4} />
              <Buttonlink key={2131237463} glitch to="/theme">
                THEME
              </Buttonlink>
              <Spacer size={4} />
              <Buttonlink key={2131237463} glitch to="/menu">
                MENU
              </Buttonlink>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

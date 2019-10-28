import React from 'react'
import Container from '../../animations/container'
import Buttonlink from '../../ui/advanced/buttonlink'
import { Grid, Typography, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Container className={container}>
      <Grid container direction="row" spacing={2}>
        <Hidden smDown>
          <Grid item md={6} lg={6} />
        </Hidden>
        <Grid item container direction="column" xs={12} sm={12} md={6} lg={6}>
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{ height: '50%' }}
          >
            <Spacer size={mdUp ? 20 : 10} />
            <Header />
            {/* <Divider height={1} width={300} /> */}
            <Spacer size={2} />
            <Grid item style={{ position: 'relative' }}>
              <Typography color="secondary" variant="button">
                <TextGlitcher
                  key={84}
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
                  key={56}
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
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={mdUp ? 'flex-start' : 'center'}
          >
            <Buttonlink key={132} glitch to="/skills">
              SKILLS
            </Buttonlink>
            <Spacer size={3} />
            <Buttonlink key={63} glitch to="/about">
              BIO
            </Buttonlink>
            <Spacer size={3} />
            <Buttonlink key={67} glitch to="/theme">
              THEME
            </Buttonlink>
            <Spacer size={3} />
            <Buttonlink key={68} glitch to="/menu">
              MENU
            </Buttonlink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

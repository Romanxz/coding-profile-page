import React from 'react'
import Container from '../../animations/container'
import Buttonlink from '../../ui/advanced/buttonlink'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Spacer } from '../../ui/basic/spacer'
import Divider from '../../ui/basic/divider'
import TextFX from '../../ui/advanced/text-fx/text-fx'

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
      <Grid container direction="row">
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
            style={{
              minHeight: mdUp ? '50%' : '40%',
            }}
          >
            <Spacer size={mdUp ? 10 : 2} />
            <TextFX
              appear="left"
              glitch
              slice
              shadow
              break
              size={90}
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 900,
                letterSpacing: -5,
                textTransform: 'uppercase',
              }}
            >
              ROMAN
            </TextFX>
            <TextFX
              appear="right"
              glitch
              slice
              shadow
              break
              size={90}
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 900,
                letterSpacing: -5,
                textTransform: 'uppercase',
              }}
            >
              GORBUNOV
            </TextFX>
            <Spacer size={mdUp ? 4 : 2} />
            <TextFX
              appear="left"
              glitch
              break
              size={20}
              style={{
                fontFamily: 'Jura',
                fontWeight: 400,
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              {'- Javascript Programmer -'}
            </TextFX>
            <Spacer size={2} />
            <TextFX
              appear="right"
              glitch
              break
              size={20}
              style={{
                fontFamily: 'Jura',
                fontWeight: 400,
                letterSpacing: 0,
                textTransform: 'uppercase',
              }}
            >
              {'- Web Designer -'}
            </TextFX>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: '30%',
              maxHeight: '50%',
              height: 'min-content',
            }}
          >
            <Spacer size={4} />
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
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

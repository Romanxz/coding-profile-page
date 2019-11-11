import React from 'react'
import RouteContainer from '../animations/container'
import Buttonlink from '../ui/advanced/buttonlink'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Spacer } from '../ui/basic/spacer'
// import Divider from '../ui/basic/divider'
import TextFX from '../ui/advanced/text-fx/text-fx'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}))

const Skills = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <RouteContainer className={classes.container}>
      <Grid container direction="row">
        <Hidden smDown>
          <Grid item md={5} lg={5} xl={6} />
        </Hidden>
        <Grid
          item
          container
          direction="column"
          style={{ width: '100%' }}
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={6}
        >
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: mdUp ? '60%' : '50%',
            }}
          >
            <Spacer size={mdUp ? 10 : 2} />
            <TextFX
              appear="left"
              header
              break
              key={1}
              size={90}
              style={{
                fontFamily: 'Bigmacca',
                fontWeight: 400,
                textTransform: 'uppercase',
              }}
            >
              SKILLS
            </TextFX>
            <Spacer size={4} />
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              style={{ width: '100%' }}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={5}
                lg={5}
                xl={4}
                style={{ height: smUp ? '100%' : 'inherit' }}
              >
                <TextFX
                  appear="left"
                  glitch
                  shadow
                  break
                  size={40}
                  key={2}
                  style={{
                    fontFamily: 'Aero',
                    fontWeight: 100,
                    letterSpacing: -2,
                  }}
                >
                  Javascript
                </TextFX>
              </Grid>
              <Hidden smUp>
                <Spacer size={1} />
              </Hidden>
              <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                xs={12}
                sm={6}
                md={7}
                lg={7}
                xl={8}
              >
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={4}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Coding since october 1st, 2018.
                </TextFX>
                <Spacer size={1} />
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={5}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Current skill level - Junior.
                </TextFX>
                <Spacer size={1} />
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={5}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Tech: Es5, Es6, REST API
                </TextFX>
              </Grid>
            </Grid>
            <Spacer size={2} />
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              style={{ width: '100%' }}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={5}
                lg={5}
                xl={4}
                style={{ height: smUp ? '100%' : 'inherit' }}
              >
                <TextFX
                  appear="left"
                  glitch
                  break
                  shadow
                  size={40}
                  key={6}
                  style={{
                    fontFamily: 'Aero',
                    fontWeight: 100,
                    letterSpacing: -2,
                  }}
                >
                  React
                </TextFX>
              </Grid>
              <Hidden smUp>
                <Spacer size={1} />
              </Hidden>
              <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                xs={12}
                sm={6}
                md={7}
                lg={7}
                xl={8}
              >
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={7}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Goals: responsive, fast and juicy UI
                </TextFX>
                <Spacer size={1} />
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={8}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Tools: Create-React-App, material-ui,
                </TextFX>
                <Spacer size={1} />
                <TextFX
                  appear="right"
                  break
                  nohover
                  glitch
                  size={18}
                  key={9}
                  style={{
                    fontFamily: 'CL',
                    fontWeight: 200,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  react-router, react-pose, next.js
                </TextFX>
              </Grid>
            </Grid>
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
            <Buttonlink key={1} glitch to="/">
              HOME
            </Buttonlink>
            <Spacer size={3} />
            <Buttonlink key={2} glitch to="/about">
              BIO
            </Buttonlink>
            <Spacer size={3} />
            <Buttonlink key={3} glitch to="/theme">
              THEME
            </Buttonlink>
          </Grid>
        </Grid>
      </Grid>
    </RouteContainer>
  )
}

export default Skills

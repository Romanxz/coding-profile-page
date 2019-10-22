import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Buttonlink from './buttonlink'
import Container from '../../animations/container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  menu: {
    zIndex: 101,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    // order: 1,
    // flexDirection: "column",
    // width: 350,
    // minWidth: 350,
    // height: "100%",
    // boxSizing: "border-box",
    // borderStyle: "solid",
    // borderColor: "#ffffff",
    // borderWidth: 1
  },
})

const Menu = props => {
  const classes = useStyles()
  return (
    <Container className={classes.menu}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <Buttonlink glitch to="/">
            HOME
          </Buttonlink>
        </Grid>
        <Grid item>
          <Buttonlink glitch to="/design">
            DESIGN
          </Buttonlink>
        </Grid>
        <Grid item>
          <Buttonlink glitch to="/skills">
            SKILLS
          </Buttonlink>
        </Grid>
        <Grid item>
          <Buttonlink glitch to="/about">
            ABOUT
          </Buttonlink>
        </Grid>
        <Grid item>
          <Buttonlink glitch to="/theme">
            THEME
          </Buttonlink>
        </Grid>
        <Grid item />
      </Grid>
    </Container>
  )
}

export default Menu

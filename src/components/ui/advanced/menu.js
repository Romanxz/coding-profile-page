import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Pimpedlink from './pimpedlink'
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
          <Pimpedlink to="/">HOME</Pimpedlink>
        </Grid>
        <Grid item>
          <Pimpedlink to="/design">DESIGN</Pimpedlink>
        </Grid>
        <Grid item>
          <Pimpedlink to="/skills">SKILLS</Pimpedlink>
        </Grid>
        <Grid item>
          <Pimpedlink to="/about">ABOUT</Pimpedlink>
        </Grid>
        <Grid item>
          <Pimpedlink to="/theme">THEME</Pimpedlink>
        </Grid>
        <Grid item />
      </Grid>
    </Container>
  )
}

export default Menu

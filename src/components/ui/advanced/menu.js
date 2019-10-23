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

const content = [
  { name: 'HOME', to: '/' },
  { name: 'DESIGN', to: '/design' },
  { name: 'SKILLS', to: '/skills' },
  { name: 'ABOUT', to: '/about' },
  { name: 'THEME', to: '/theme' },
]

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
        {content.map((value, id) => {
          return (
            <Grid item key={id}>
              <Buttonlink glitch id={id} to={value.to}>
                {value.name}
              </Buttonlink>
            </Grid>
          )
        })}
        <Grid item />
      </Grid>
    </Container>
  )
}

export default Menu

import React from 'react'
import Container from '../animations/container'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core/'
import Themeform from '../ui/advanced/themeform'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    // paddingTop: 20,
  },
})

const Theme = ({ theme, toggleTheme, updateBgColor, updateTextColor }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid container direction="row">
        <Grid item lg={4} md={3} sm={2} xs={1} />
        <Grid item lg={4} md={6} sm={8} xs={10}>
          <Themeform
            theme={theme}
            toggleTheme={toggleTheme}
            updateBgColor={updateBgColor}
            updateTextColor={updateTextColor}
          />
        </Grid>
        <Grid item lg={4} md={3} sm={2} xs={1} />
      </Grid>
    </Container>
  )
}

export default Theme

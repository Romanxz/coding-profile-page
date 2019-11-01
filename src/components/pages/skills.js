import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '../animations/container'
import TextFX from '../ui/advanced/text-fx/text-fx'
import Buttonlink from '../ui/advanced/buttonlink'
import Spacer from '../ui/basic/spacer'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
}))

const Skills = props => {
  const classes = useStyles(props)
  return (
    <Container className={classes.container}>
      <TextFX
        appear="left"
        glitch
        slice
        shadow
        size={90}
        style={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 900,
          letterSpacing: -5,
          textTransform: 'uppercase',
        }}
      >
        IN DEVELOPMENT
      </TextFX>
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
      <Spacer size={3} />
      <Buttonlink key={61} glitch to="/">
        HOME
      </Buttonlink>
    </Container>
  )
}

export default Skills

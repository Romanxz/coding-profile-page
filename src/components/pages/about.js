import React from 'react'
import Container from '../animations/container'
import Shadow from '../animations/shadow'

const About = () => {
  return (
    <Container
      style={{
        position: 'relative',
        display: 'flex',
        padding: 30,
      }}
    >
      <Shadow
        style={{
          position: 'relative',
          height: 950,
          width: 1500,
          background: 'transparent',
        }}
      />
    </Container>
  )
}

export default About

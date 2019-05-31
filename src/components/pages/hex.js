import React from 'react'
import Container from '../animations/container'
import Shadow from '../animations/shadow'

const Hex = () => {
  return (
    <Container
      style={{
        position: 'relative',
        display: 'flex',
      }}
    >
      <Shadow>/></Shadow>
    </Container>
  )
}

export default Hex

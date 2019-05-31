import React from 'react'
import Container from '../animations/container'
import Pimpedlink from '../ui/advanced/pimpedlink'

const Home = () => {
  return (
    <Container
      style={{
        position: 'relative',
        display: 'flex',
        padding: 30,
      }}
    >
      <Pimpedlink to="/menu">MENU</Pimpedlink>
    </Container>
  )
}

export default Home

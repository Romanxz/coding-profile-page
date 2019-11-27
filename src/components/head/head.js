import React, { useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  canvas: {
    height: '100%',
    width: '100%',
    display: 'block',
  },
}))

const Headloader = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load(process.env.PUBLIC_URL + '/scene.gltf', setModel)
  }, [])
  console.log(model)
  return model ? <primitive object={model.scene} /> : null
}

const Head = props => {
  const classes = useStyles()
  return (
    <Canvas className={classes.canvas} camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <spotLight position={[0, 5, 10]} />
      <Headloader />
    </Canvas>
  )
}

export default Head

import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { useSpring, config } from '@react-spring/core'
import { a } from '@react-spring/three'
import { a as aDom } from '@react-spring/web'
import Text from './helpers/Text'
import Scene from './Scene'
import Billboard from './3d/Billboard'
import useYScroll from './helpers/useYScroll'
import './helpers/uniforms'
import './styles.css'

const material = { transparent: true, roughness: 0.8, fog: true, shininess: 0, flatShading: false }

const DemoBoard = ({ color = 'white', name, desc, ...props }) => {
  return (
    <group {...props}>
      <Text centerX={false} color="lightcoral" size={0.6} position={[2.0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {name}
      </Text>
      <Text centerX={false} color="lightcoral" size={0.4} position={[2.0, 0.0, 1.0]} rotation={[-Math.PI / 2, 0, 0]}>
        {desc}
      </Text>
      <Billboard />
    </group>
  )
}

const App = () => {
  const [y] = useYScroll([-100, 2400], { domTarget: window })
  return (
    <>
      <Canvas
        invalidateFrameloop
        camera={{ position: [0, 0, 10], fov: 65 }}
        gl={{ alpha: false }}
        onCreated={({ gl, scene }) => {
          scene.background = new THREE.Color('#efefef')
          scene.rotation.set(Math.PI / 4, 0, 0)
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
        <Scene>
          
          <a.group position-z={y.to(y => (y / 500) * 25)}>
            <DemoBoard color="white" name="WOWQUEUECAMPER" desc='Alarm_clock_using_OCR_(C++)' position={[0, -20, -6]}/>
            <DemoBoard color="lightgray" name="2B" position={[0, 0, -32]} />
            <DemoBoard color="white" name="3A" position={[0, 0, -58]} />
            <DemoBoard color="lightgray" name="4B" position={[0, 0, -84]} />
            <DemoBoard color="#676767" name="5B" position={[0, 0, -110]} />
          </a.group>
        </Scene>
      </Canvas>
      <aDom.div className="bar" style={{ height: y.to([-100, 2400], ['0%', '100%']) }} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

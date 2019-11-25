import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
  
export default function Model(props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, '/Billboard.glb', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  return (
    <group ref={group} {...props}>
      <scene name="Scene" >
        <object3D name="root" >
          <mesh name="Ad000" >
            <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[2].material} name="frame" />
          </mesh>
          <mesh name="Ad002" >
            <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[3].material} name="material" />
          </mesh>
          <mesh name="base001" >
            <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[4].material} name="Base" />
          </mesh>
          <mesh name="grid003" >
            <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[5].material} name="Base" />
          </mesh>
          <mesh name="grid005" >
            <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[6].material} name="Base" />
          </mesh>
          <mesh name="grid001" >
            <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[7].material} name="gitter" />
          </mesh>
          <mesh name="pole001" >
            <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
            <meshStandardMaterial attach="material" {...gltf.__$[8].material} name="Pole" />
          </mesh>
        </object3D>
      </scene>
    </group>
  )
}
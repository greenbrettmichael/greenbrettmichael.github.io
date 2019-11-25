import React, { Suspense } from 'react'

const RectAreaLight = ({ lookAt = [0, 0, 0], ...props }) => <rectAreaLight {...props} onUpdate={self => self.lookAt(...lookAt)} />

export default function Scene({ children, fallback = null }) {
  return (
    <>
      <fog attach="fog" args={[0xefefef, 20, 35]} />
      <RectAreaLight intensity={2} width={20} height={100} position={[-15, 5, 0]} />
      <RectAreaLight intensity={2} width={20} height={100} position={[15, 5, 0]} />
      <RectAreaLight intensity={2} width={20} height={20} position={[0, 5, -35]} />
      <spotLight
        castShadow
        angle={Math.PI / 8}
        intensity={0.2}
        position={[20, 30, 20]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Suspense fallback={null}>{children}</Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <planeGeometry attach="geometry" args={[4, 1000]} />
        <meshBasicMaterial attach="material" color="lightcoral" fog={false} transparent opacity={0.4} />
      </mesh>
    </>
  )
}

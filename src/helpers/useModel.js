import { useMemo } from 'react'
import { unstable_createResource as createResource } from './react-cache'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const resource = createResource(file => new Promise(async res => new GLTFLoader().load(file, res)))

export default function useModel(file) {
  const { scene } = resource.read(file)
  const geom = useMemo(() => {
    const temp = []
    scene.traverse(child => child.isMesh && temp.push(child.geometry))
    return temp
  }, [scene])
  return [geom, scene.children[0].position]
}

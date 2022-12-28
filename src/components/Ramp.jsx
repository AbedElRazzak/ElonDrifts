import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Ramp() {
  const rampMesh = useLoader(
    GLTFLoader, 
    "public/" + "assets/models/ramp/ramp.glb")

  const brdgRamp = useLoader(
     GLTFLoader, 
     "public/" + "assets/models/ramp/brdg.glb")

  const geometry = rampMesh.scene.children[0].geometry;
  
  const vertices = geometry.attributes.position.array;
  const indices  = geometry.index.array;

  const _geometry = brdgRamp.scene.children[0].geometry;
  
  const _vertices = _geometry.attributes.position.array;
  const _indices  = _geometry.index.array;

  useEffect(() => {
    // brdgRamp.scene.scale.set(20, 20, 20)
    rampMesh.scene.children[0].position.set(-4.3, 0, 0.41)
    // rampMesh.scene.children[0].rotation.set(0, Math.PI, 0)
  }, [rampMesh])
  

  const [ref1] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      position: [-4.3, 0, 0.41],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref2] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      position: [-6.945, 0, 0.02],
      rotation: [0, Math.PI, 0],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref3] = useTrimesh(
    () => ({
      args: [_vertices, _indices],
      mass: 0,
      position: [-0.75, 0, 0.7],
      type: "Static",
    }),
    useRef(null)
  )

  const [ref4] = useTrimesh(
    () => ({
      args: [_vertices, _indices],
      mass: 0,
      position: [-3.4, 0, -2],
      rotation: [0, Math.PI, 0],
      type: "Static",
    }),
    useRef(null)
  )
    

  return (
    <>
    {/* <primitive object={rampMesh.scene}/> */}
    </>
  )
}
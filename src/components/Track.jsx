import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";
import { Ramp } from "./Ramp";

export default function Track() {

    const trackMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/raceTrack/scene.glb"
    ).scene

    useEffect(() => {
        trackMesh.scale.set(0.02, 0.02, 0.02)
        trackMesh.children[0].position.set(-100,-2,-45)
        trackMesh.rotation.y = 80.1
    }, [trackMesh])
    return (
        <>
          <primitive object={trackMesh} rotation-y={Math.PI}/>
          <ColliderBox position={[-2.08, 0, 0.5]} scale={[0.3, 0.5, 0.14]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-2.08, 0, -1.67]} scale={[0.3, 0.5, 0.12]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-1.05, -0.49, -0.6]} scale={[5, 1, 0.57]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-4.5, -0.49, -2.93]} scale={[2, 1, 0.58]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-3.27, -0.49, -1.97]} scale={[0.58, 1, 2.5]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-5.6, -0.49, -1.9]} scale={[0.58, 1, 2.7]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-5.64, -0.49, 2.74]} scale={[0.58, 1, 2.7]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-2.1, -0.49, 2.74]} scale={[0.58, 1, 2.7]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-2.04, -0.49, -4.55]} scale={[0.58, 1, 3.8]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-0.58, -0.49, -4.95]} scale={[0.58, 1, 3]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[0.7, -0.49, -3.74]} scale={[2.5, 1, 0.58]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[1.6, -0.49, -2]} scale={[0.58, 1, 3.5]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-1.2, -0.49, -6.15]} scale={[1.5, 1, 0.58]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-4, -0.49, 3.82]} scale={[3.5, 1, 0.58]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-2.06, 0.31, -0.6]} scale={[0.58, 0.1, 3]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-1.8, 0.5, -0.6]} scale={[0.05, 0.2, 3]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-2.35, 0.5, -0.6]} scale={[0.05, 0.2, 3]} rotationX={0} rotationY={0}/>
          <Ramp />
          
        </>
    )
}
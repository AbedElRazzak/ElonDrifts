import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function LaunchPad() {

    let LaunchPadMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/launchPad/scene.gltf"
    ).scene

    useEffect(() => {
        LaunchPadMesh.scale.set(0.05, 0.05, 0.05)
        LaunchPadMesh.children[0].position.set(60, 1.3, 22)
    }, [LaunchPadMesh])

    return (
        <>
          <primitive object={LaunchPadMesh} rotation-y={0.5}/>
          <ColliderBox position={[3.3, 0, 0.06]} scale={[0.35, 0.5, 0.1]} rotationX={0} rotationY={0.5}/>
          <ColliderBox position={[2.8, 0, -0.9]} scale={[0.35, 0.5, 0.1]} rotationX={0} rotationY={0.5}/>
          {/* <ColliderBox position={[3.1, 0, -0.45]} scale={[0.1, 0.5, 0.8]} rotationY={0.5}/> */}
        </>
    )
}
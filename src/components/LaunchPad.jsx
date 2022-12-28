import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function LaunchPad() {

    let LaunchPadMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/launchPad/scene.glb"
    ).scene

    useEffect(() => {
        LaunchPadMesh.scale.set(0.045, 0.045, 0.045)
        LaunchPadMesh.children[0].position.set(83, 1.3, 16.5)
    }, [LaunchPadMesh])

    return (
        <>
          <primitive object={LaunchPadMesh} rotation-y={0.5}/>
          <ColliderBox position={[3.76, 0, -0.65]} scale={[0.35, 0.5, 0.1]} rotationX={0} rotationY={0.5}/>
          <ColliderBox position={[3.3, 0, -1.55]} scale={[0.35, 0.5, 0.1]} rotationX={0} rotationY={0.5}/>
        </>
    )
}
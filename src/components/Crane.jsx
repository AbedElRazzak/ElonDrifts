import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Crane() {

    let CraneMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/crane/scene.gltf"
    ).scene

    useEffect(() => {
        CraneMesh.scale.set(0.003, 0.003, 0.003)
        CraneMesh.children[0].position.set(600, 650, 2000)
    }, [CraneMesh])

    return (
        <>
          <primitive object={CraneMesh} rotation-y={3.6}/>
          <ColliderBox position={[-4.14, 0, -4.2]} scale={[0.4, 1, 0.4]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-4.5, 0, -4.9]} scale={[0.4, 1, 0.4]} rotationX={0} rotationY={0}/>
          <ColliderBox position={[-4.3, 0, -4.5]} scale={[0.2, 1, 0.2]} rotationX={0} rotationY={0}/>
        </>
    )
}
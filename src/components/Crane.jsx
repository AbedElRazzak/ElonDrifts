import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Crane() {

    let CraneMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/crane/scene.glb"
    ).scene

    useEffect(() => {
        CraneMesh.scale.set(2.1, 2.1, 2.1)
        CraneMesh.children[0].position.set(2.2, 0, 3.2)
    }, [CraneMesh])

    return (
        <>
          <primitive object={CraneMesh} rotation-y={3.6}/>
          <ColliderBox position={[-7, 0, -4]} scale={[0.9, 1, 0.4]} rotationX={0} rotationY={0.47}/>
        </>
    )
}
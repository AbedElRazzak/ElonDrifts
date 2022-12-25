import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Raptor() {

    let RaptorMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/raptor/scene.glb"
    ).scene

    useEffect(() => {
        RaptorMesh.scale.set(0.00015, 0.00015, 0.00015)
        RaptorMesh.children[0].position.set(10000, 0, 26000)
    }, [RaptorMesh])

    return (
        <>
          <primitive object={RaptorMesh} />
          <ColliderBox position={[1.5, 0, 3.9]} scale={[0.3, 1, 0.3]} rotationX={0} rotationY={0}/>
        </>
    )
}
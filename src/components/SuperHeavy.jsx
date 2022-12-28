import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function SuperHeavy() {

    let SuperHeavyMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/superheavy/scene.glb"
    ).scene

    useEffect(() => {
        SuperHeavyMesh.scale.set(0.011, 0.011, 0.011)
        SuperHeavyMesh.children[0].position.set(400, 7, 360)
    }, [SuperHeavyMesh])

    return (
        <>
        
        <primitive object={SuperHeavyMesh}  rotation-y={2}/>
        <ColliderBox position={[2.26, 0, -4.5]} scale={[0.2, 1, 0.7]} rotationX={0} rotationY={0.5}/>
        </>
    )
}



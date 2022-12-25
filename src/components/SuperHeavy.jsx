import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function SuperHeavy() {

    let SuperHeavyMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/superHeavy/scene.gltf"
    ).scene

    useEffect(() => {
        SuperHeavyMesh.scale.set(0.009, 0.009, 0.009)
        SuperHeavyMesh.children[0].position.set(-100, 100, 310)
    }, [SuperHeavyMesh])

    return (
        <primitive object={SuperHeavyMesh}  rotation-y={2}/>
    )
}



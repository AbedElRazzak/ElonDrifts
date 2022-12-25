import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Model3() {

    let Model3Mesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/model3/scene.gltf"
    ).scene

    useEffect(() => {
        Model3Mesh.scale.set(0.0008, 0.0008, 0.0008)
        Model3Mesh.children[0].position.set(1200, 60, 9500)
    }, [Model3Mesh])

    return (
        <>
          <primitive object={Model3Mesh} rotation-y={-3.15}/>
          <ColliderBox position={[-0.9, 0, -7.65]} scale={[0.3, 0.31, 0.47]} rotationX={0} rotationY={0}/>
        </>
    )
}
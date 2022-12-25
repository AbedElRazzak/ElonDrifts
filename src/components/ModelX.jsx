import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function ModelX() {

    let ModelXMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/modelx/scene.gltf"
    ).scene

    useEffect(() => {
        ModelXMesh.scale.set(0.00009, 0.00009, 0.00009)
        ModelXMesh.position.set(-1.7, 0, -7.5)
    }, [ModelXMesh])

    return (
        <>
          <primitive object={ModelXMesh} rotation-y={0}/>
          <ColliderBox position={[-1.6, 0, -7.65]} scale={[0.3, 0.31, 0.47]} rotationX={0} rotationY={0}/>
        </>
    )
}

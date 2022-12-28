import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function PrototypeRocket() {

    let PrototypeRocketMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/prototypeRocket/scene.glb"
    ).scene

    useEffect(() => {
        PrototypeRocketMesh.scale.set(0.013, 0.013, 0.013)
        PrototypeRocketMesh.children[0].position.set(430, 79, -350)
    }, [PrototypeRocketMesh])

    return (
        <>
          <primitive object={PrototypeRocketMesh} rotation-y={1}/>
          <ColliderBox position={[-0.8, 0, -7.15]} scale={[1, 1, 0.6]} rotationX={0} rotationY={-0.5}/>
        </>
    )
}
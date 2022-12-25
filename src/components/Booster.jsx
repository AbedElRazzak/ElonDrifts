import React,{ useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Booster() {

    const BoosterMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/Booster/scene.gltf"
    ).scene

    useEffect(() => {
        BoosterMesh.scale.set(0.04, 0.04, 0.04)
        BoosterMesh.children[0].position.set(60, 2.2, -120)
    }, [BoosterMesh])

    return (
        <>
          <primitive object={BoosterMesh}/>
          <ColliderBox position={[2.4, 0, -4.8]} scale={[1.2, 1, 1.2]} rotationX={0} rotationY={0}/>
        </>
    )
}
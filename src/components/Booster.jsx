import React,{ useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Booster() {

    const BoosterMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/Booster/scene.glb"
    ).scene

    useEffect(() => {
        BoosterMesh.scale.set(0.2, 0.2, 0.2)
        BoosterMesh.children[0].position.set(17.2, 1, -5.1)
    }, [BoosterMesh])

    return (
        <>
          <primitive object={BoosterMesh}/>
        </>
    )
}
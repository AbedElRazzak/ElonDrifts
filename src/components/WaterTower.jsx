import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function WaterTower() {

    let WaterTowerMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/waterTower/scene.glb"
    ).scene

    useEffect(() => {
        WaterTowerMesh.scale.set(1, 1, 1)
        WaterTowerMesh.children[0].position.set(-9, 1, 0)
    }, [WaterTowerMesh])

    return (
        <>
            <primitive object={WaterTowerMesh} rotation-y={0}/>
            <ColliderBox position={[-9, 0, 0]} scale={[0.8, 0.8, 0.1]} rotationX={0} rotationY={0}/>
            <ColliderBox position={[-9, 0, 0]} scale={[0.1, 0.8, 0.8]} rotationX={0} rotationY={0}/>
        </>
    )
}


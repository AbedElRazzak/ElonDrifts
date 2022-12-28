import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function GazTank() {

    let GazTankMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/gazTank/scene.glb"
    ).scene

    useEffect(() => {
        GazTankMesh.scale.set(0.003, 0.003, 0.003)
        GazTankMesh.children[0].position.set(-1200, 0, -2550)
    }, [GazTankMesh])

    return (
        <>
          <primitive object={GazTankMesh} />
          <ColliderBox position={[-3.6, 0, -7.66]} scale={[1.3, 1, 0.4]} rotationX={0} rotationY={0.04}/>
        </>
    )
}
import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function SemiTruck() {

    let SemiTruckMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/semiTruck/scene.glb"
    ).scene

    useEffect(() => {
        SemiTruckMesh.scale.set(0.1, 0.1, 0.1)
        SemiTruckMesh.children[0].position.set(-20, 1, -73)
    }, [SemiTruckMesh])

    return (
        <>
          <primitive object={SemiTruckMesh} rotation-y={0}/>
          <ColliderBox position={[-2, 0, -7.56]} scale={[0.3, 0.7, 0.56]} rotationX={0} rotationY={0}/>
        </>
    )
}
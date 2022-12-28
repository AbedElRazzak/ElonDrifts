import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Truck() {

    let TruckMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/truck/scene.glb"
    ).scene

    useEffect(() => {
        TruckMesh.scale.set(0.04, 0.04, 0.04)
        TruckMesh.children[0].position.set(-21, 1, -150)
    }, [TruckMesh])

    return (
        <>
          <primitive object={TruckMesh} rotation-y={0.6}/>
          <ColliderBox position={[-4.05, 0, -4.47]} scale={[0.39, 0.7, 1]} rotationX={0} rotationY={0.6}/>
        </>
    )
}
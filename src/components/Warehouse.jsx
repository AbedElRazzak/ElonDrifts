import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Warehouse() {

    let warehouseMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/warehouse/scene.glb"
    ).scene

    useEffect(() => {
        warehouseMesh.scale.set(0.0002, 0.0002, 0.0002)
        warehouseMesh.children[0].position.set(12000, 0, -10000)
    }, [warehouseMesh])

    return (
        <>
           <primitive object={warehouseMesh} rotation-y={-1.58}/>
           <ColliderBox position={[2, 0, 2.45]} scale={[2, 1, 2]} rotationX={0} rotationY={0}/>
        </>
    )
}

// 
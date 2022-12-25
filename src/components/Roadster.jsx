import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function Roadster() {

    let RoadsterMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/roadster/scene.glb"
    ).scene

    useEffect(() => {
        RoadsterMesh.scale.set(0.055, 0.055, 0.055)
        RoadsterMesh.children[0].position.set(-23,0,-139)
    }, [RoadsterMesh])

    return (
        <>
          <primitive object={RoadsterMesh} rotation-y={0}/>
          <ColliderBox position={[-1.25, 0, -7.65]} scale={[0.3, 0.31, 0.47]} rotationX={0} rotationY={0}/>
        </>
    )
}
import React, { useEffect } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from "./ColliderBox";

export default function StarShip() {

    const starShipMesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/StarShip/scene.glb"
    ).scene

    useEffect(() => {
        starShipMesh.scale.set(0.8, 0.8, 0.8)
        starShipMesh.position.set(-6.1, 0, -4.5)
    }, [starShipMesh])

    return (
        <>
            <primitive object={starShipMesh} rotation-y={2} />
            <ColliderBox position={[-6.13, 0, -4.48]} scale={[0.6, 1, 0.6]} rotationX={0} rotationY={0}/>
            <ColliderBox position={[-5.65, 0, -4.7]} scale={[0.3, 0.8, 0.07]} rotationX={0} rotationY={0.47}/>
            <ColliderBox position={[-6.5, 0, -4.31]} scale={[0.45, 0.8, 0.07]} rotationX={0} rotationY={0.47}/>
        </>
    )
}
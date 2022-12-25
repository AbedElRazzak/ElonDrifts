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
        starShipMesh.scale.set(0.0007, 0.0007, 0.0007)
        // starShipMesh.children[0].position.set(4200,0,2000)
        starShipMesh.position.set(-7,3.6,-3.5)
        // starShipMesh.rotation.y = 9
    }, [starShipMesh])

    return (
        <>
            <primitive object={starShipMesh} rotation-y={0.2} />
            <ColliderBox position={[-7, 0, -3.5]} scale={[0.8, 0.8, 0.8]} rotationX={0} rotationY={0}/>
            <ColliderBox position={[-7.6, 0, -3.43]} scale={[0.3, 0.8, 0.07]} rotationX={0} rotationY={0}/>
            <ColliderBox position={[-6.4, 0, -3.64]} scale={[0.3, 0.8, 0.07]} rotationX={0} rotationY={0}/>
        </>
    )
}
import React, { useEffect, useRef } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useWheels } from "./useWheels";
import { useControls } from "./useControls"
import { WheelDebug } from "./WheelDebug";

export default function Car() {

    let mesh = useLoader(
        GLTFLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/models/cyberTruck/scene.gltf"
    ).scene

    const position = [-2.1, 1, 2.5]

    const width = 0.14;
    const height = 0.06;
    const front = 0.14;
    const wheelRadius = 0.04;
    // const width = 2;
    // const height = 1;
    // const front = 2;
    // const wheelRadius = 0.9;


    const chassisBodyArgs = [width, height, front * 2]
    const [chassisBody, chassisApi] = useBox(
        () => ({
            allowSleep: false,
            args: chassisBodyArgs,
            mass: 150,
            position,
        }),
        useRef(null),
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)
 
    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels
        }),
        useRef(null),
      )
    useControls(vehicleApi, chassisApi)
    


    useEffect(() => {
        if (!mesh) return
        mesh.scale.set(0.09, 0.09, 0.09)
        // mesh.scale.set(1,1,1)
        mesh.children[0].position.set(0, -1.2, 0)
        // set(39, -0.9, -6)
    }, [mesh])

    return (
        <group ref={vehicle} name="vehicle">
            <group ref={chassisBody} name="chassisBody">
              <primitive object={mesh} rotation-y={Math.PI}/>
            </group>
             {/* <mesh ref={chassisBody}>
                 <meshBasicMaterial transparent={true} opacity={0.3}/>
                 <boxGeometry args={chassisBodyArgs} />
             </mesh>



             <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
             <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
             <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
             <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} /> */}
            
        </group>
    )
}



import { useBox } from "@react-three/cannon";

const debug = false

export function ColliderBox({position, scale, rotationX, rotationY}) {
    useBox(() => ({
        args: scale,
        position,
        type: "Static",
    }))


    return (
        debug && (
            <mesh position={position} rotation={[rotationX, rotationY, 0]}>
                <boxGeometry args={scale}/>
                <meshBasicMaterial transparent={true} opacity={0.25}/>
            </mesh>
        )
    )
}
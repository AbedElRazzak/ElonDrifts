import {React, useEffect, useRef} from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import {TextureLoader } from "three";
import { usePlane } from "@react-three/cannon"


export default function Ground() {

    const [ref] = usePlane(
      () => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0, 0],
        position: [0,0,0]
      }),
      useRef(null)
    )

    const gridMap = useLoader(
        TextureLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/grid.png"
        )

    const alphaMap = useLoader(
        TextureLoader,
        "https://abedelrazzak.github.io/ElonDrifts/" + "assets/alpha-map.png"
    )

    const aoMap = useLoader(
      TextureLoader,
      "https://abedelrazzak.github.io/ElonDrifts/" + "assets/ground-ao.png"
    )



    useEffect(() => {
      if (!gridMap) return;
  
      gridMap.anisotropy = 16;
    }, [gridMap]);
    

    return (
        <>
        <mesh
          position={[-2.285, -0.01, -1.325]}
          // position={[-2.285, -0.01, 1]}
          rotation-x={-Math.PI / 2}
        >
            <planeGeometry args={[14, 14]}/>
            <meshBasicMaterial 
              opacity={0.325}
              alphaMap={gridMap}
              transparent={true}
              color={"white"}
            />
        </mesh>



        <mesh
          position={[-2.285, -0.015, -1.325]}
          // position={[0, -0.015, 0]}
          rotation-x={-Math.PI / 2}
          rotation-z={-0.079}
        >
            <circleGeometry args={[8, 60]}/>
            <MeshReflectorMaterial 
              aoMap={aoMap}
              alphaMap={alphaMap}
              transparent={true}
              color={0x1C1C1B}
              //   1C1C1B
              envMapIntensity={0.35}
              metalness={0.05}
              roughness={0.4}

              dithering={true}
              blur={[1024, 512]} // Blur ground reflections (width, heigt), 0 skips blur
              mixBlur={3} // How much blur mixes with surface roughness (default = 1)
              mixStrength={30} // Strength of the reflections
              mixContrast={1} // Contrast of the reflections
              resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
              mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
              depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
              minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
              maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
              depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [bl
              debug={0}
              reflectorOffset={0.02} // Offsets the virtual camera that projects the reflection. Useful when the reflective
            />
        </mesh>
        </>
    )
}
import { React, Suspense } from 'react';
import './App.css'
import { Triangle } from 'react-loader-spinner'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from "@react-three/cannon"
import Ground from './components/Ground';
import Car from './components/Car';
import Track from './components/Track';
import StarShip from './components/StarShip';
import Booster from './components/Booster';
import Truck from './components/Truck';
import SuperHeavy from './components/SuperHeavy';
import PrototypeRocket from './components/PrototypeRocket'
import GazTank from './components/GazTank';
import LaunchPad from './components/LaunchPad';
import Warehouse from './components/Warehouse';
import Crane from './components/Crane';
import WaterTower from './components/WaterTower';



function App() {


  return (
    <div id="canvas-container">
      <Suspense fallback={<Loading />}>
      <Canvas gl={{antialias: true}}>
        <Physics
           broadphase='SAP'
           gravity={[0, -2.6, 0]}
        >
          <Environment background={true} files= {"https://abedelrazzak.github.io/ElonDrifts/" + "assets/sky4k.hdr"} />
          <OrbitControls target={[-2, 0.4, -0.1]}/>
          <PerspectiveCamera makeDefault position={[-15.5, 12, 20]} fov={18}/>
          <ambientLight intensity={0.5} />
          <pointLight intensity={0.5} position={[0,50,0]} />
          <Ground />
          <Car />
          <Track />
          <StarShip />
          <Booster />
          <Truck />
          <SuperHeavy />
          <PrototypeRocket />
          <GazTank />
          <LaunchPad />
          <Warehouse />
          <Crane />
          <WaterTower />
          
         
        </Physics>
      </Canvas>
      <div className="controls">
        <p>press w a s d to move</p>
        <p>press r to reset</p>
        <p>move camera with the mouse</p>
      </div>
      </Suspense>


    </div>
  )
}


function Loading() {
  return (
  <div className='cont'>
    <div className='loading-cont'>
      <Triangle
        height="60"
        width="60"
        color="#D3D4D5"
        ariaLabel="triangle-loading"
      />
      <label className='loading-text'>Downloading the materials, please wait.</label>
    </div>
  </div>
  )

}


export default App

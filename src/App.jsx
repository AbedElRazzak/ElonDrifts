import { React } from 'react';
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Ground from './components/Ground';
import Car from './components/Car';
import Track from './components/Track';
import StarShip from './components/StarShip';
import Booster from './components/Booster';
import SemiTruck from './components/SemiTruck';
import ModelX from './components/ModelX';
import { Physics } from "@react-three/cannon"
import SuperHeavy from './components/SuperHeavy';
import Roadster from './components/Roadster'
import Model3 from './components/Model3'
import Raptor from './components/Raptor';
import LaunchPad from './components/LaunchPad';
import Warehouse from './components/Warehouse';
import Crane from './components/Crane';
import WaterTower from './components/WaterTower';



function App() {


  return (
    <div id="canvas-container">
      <Canvas gl={{antialias: true}}>
        <Physics
           broadphase='SAP'
           gravity={[0, -2.6, 0]}
        >
          <Environment background={true} files= {"https://abedelrazzak.github.io/ElonDrifts/" + "assets/sky4k.hdr"} />
          <OrbitControls target={[-2, 0.4, -0.1]}/>
          <PerspectiveCamera makeDefault position={[-14, 12, 20]} fov={18}/>
          <ambientLight intensity={0.5} />
          <pointLight intensity={0.5} position={[0,50,0]} />
          <Ground />
          <Car />
          <Track />
          <StarShip />
          <Booster />
          <SemiTruck />
          <ModelX />
          <SuperHeavy />
          <Roadster />
          <Model3 />
          <Raptor />
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
    </div>
  )
}

export default App

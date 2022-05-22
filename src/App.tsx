import * as THREE from 'three'
import {Canvas} from '@react-three/fiber'

import Box from "./components/Box/index";

import s from './App.module.scss'
import CameraController from "./components/Camera/CameraController";
import Controls from "./components/Controls";

function App() {
    return (
        <div className={s.canvas}>
            <Controls/>

            <Canvas>
                <CameraController/>

                <ambientLight intensity={0.1}/>
                <pointLight position={[10, 10, 10]}/>
                <directionalLight color="red" position={[1, 2, 3]}/>
                <primitive object={new THREE.AxesHelper(10)}/>

                <Box position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )
}

export default App

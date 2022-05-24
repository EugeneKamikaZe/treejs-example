import React from "react";
import {Canvas} from '@react-three/fiber'
import {useStore} from "./store";
import {Physics} from "@react-three/cannon";

import s from './App.module.scss'

import Model from "./components/Model";
import Controls from "./components/Controls";

import Plane from "./components/Scene/Plane";
import CameraController from "./components/Camera/CameraController";
import Box from "./components/Box";
import Sphere from "./components/Sphere";

function App() {
    const {light} = useStore()
    const {lightPosition} = useStore()

    return (
        <div className={s.canvas}>
            <Controls/>

            <Canvas shadows={true}>
                <CameraController/>

                <color attach="background" args={["lightblue"]}/>
                <Physics>

                    <ambientLight intensity={light}/>
                    <pointLight position={[5, 5, 10]}/>
                    <hemisphereLight intensity={0.35}/>
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={2}
                        castShadow/>
                    <directionalLight color="red" position={[1, 2, 3]}/>

                    <Plane/>
                    <Sphere position={[0, 5, 0]}
                            color="rebeccapurple"/>
                    <Box position={[0, 8, 0]}
                         color="lemonchiffon"/>
                    <Box position={[0, 12, 0]}
                         color="aqua"/>
                    <Model/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default App

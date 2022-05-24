import React from 'react';
import s from './style.module.scss'
import RenderTrack from "./RenderTrack";
import {useStore} from "../../store";
import CameraController from "../Camera/CameraController";

const Controls = () => {
    const {light, setLight} = useStore()
    const {lightPosition, setLightPosition} = useStore()

    return (
        <div className={s.controls}>

            <RenderTrack name={'Light'}
                         step={0.1}
                         min={0}
                         max={1}
                         values={light}
                         setValues={setLight}/>

            <div>
                <h2>Light Position</h2>
                <RenderTrack name={'X'}
                             step={0.5}
                             min={0}
                             max={10}
                             values={[lightPosition[0]]}
                             setValues={setLightPosition}/>
            </div>
        </div>
    );
};

export default Controls;

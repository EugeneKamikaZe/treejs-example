import React from 'react';
import s from './style.module.scss'
import RenderTrack from "./RenderTrack";
import {useStore} from "../../store";

const Controls = () => {
    const {light, setLight} = useStore()

    return (
        <div className={s.controls}>
            <RenderTrack name={'Light'}
                         step={0.1}
                         min={0}
                         max={1}
                         values={light}
                         setValues={setLight}/>
        </div>
    );
};

export default Controls;

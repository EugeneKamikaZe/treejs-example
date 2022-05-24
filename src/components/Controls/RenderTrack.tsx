import React from 'react';
import {getTrackBackground, Range} from "react-range";
import cn from "classnames";

import s from './style.module.scss'

interface IRender {
    name: string,
    step?: number,
    min?: number,
    max?: number,
    values: any,
    setValues: any
}

const RenderTrack: React.FC<IRender> = ({
                                            values,
                                            setValues,
                                            name,
                                            step = 1,
                                            min = 0,
                                            max = 10
                                        }) => {

    return (
        <div>

            <div className={s.label}>
                <h2>{name}</h2>
                <span>{values}</span>
            </div>

            <Range values={values}
                   onChange={value => {
                       setValues(value)
                   }}
                   step={step}
                   min={min}
                   max={max}
                   renderTrack={({
                                     props,
                                     children
                                 }) => (
                       <div onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className={s.renderTrack}>
                           <div ref={props.ref}
                                className={s.renderTrack_children}
                                style={{
                                    background: getTrackBackground({
                                        values,
                                        colors: ["#548BF4", "#ccc"],
                                        min: min,
                                        max: max
                                    })
                                }}>
                               {children}
                           </div>
                       </div>
                   )}
                   renderThumb={({props, isDragged}) => (
                       <div {...props}
                            className={s.renderThumb}>
                           <div className={cn(s.renderThumb_children, {[s.renderThumb_active]: isDragged})}
                           />
                       </div>
                   )}
            />
        </div>
    )
}

export default RenderTrack

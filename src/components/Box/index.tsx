import React from 'react'
import {useBox} from "@react-three/cannon";
import * as THREE from "three";

const Box = (props: any) => {
    const [ref] = useBox(() => ({
        mass: 1,
        ...props
    }));
    const color = props.color ? props.color : "hotpink";
    return (
        <mesh receiveShadow
              castShadow
              ref={ref}>
            <primitive object={new THREE.AxesHelper(10)}/>

            <boxBufferGeometry/>
            <meshLambertMaterial attach="material" color={color}/>
        </mesh>
    );
};

export default Box;

import React from 'react';
import {usePlane} from "@react-three/cannon";
import * as THREE from "three";

const Plane = (props: any) => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));
    return (
        <mesh ref={ref}
              receiveShadow>
            <primitive object={new THREE.AxesHelper(10)}/>

            <planeBufferGeometry attach="geometry" args={[1009, 1000]}/>
            <shadowMaterial attach="material" color="#4a4a4a"/>
        </mesh>
    );
};

export default Plane;

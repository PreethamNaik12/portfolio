// import React from 'react'

import { Canvas } from "@react-three/fiber"
import Village from "../models/Village"
import { useRef, useState } from "react"
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations } from "@react-three/drei"

const About = () => {

    const [position, setPosition] = useState([0.9, 0.9, 0.9])

    const handleClick = () => {
        setPosition(position.map((p) => p + 0.1))
    }

    const cameraControlRef = useRef(null);

    const Xangle = 0.25 * Math.PI;

    return (
        <>
            <Canvas
                style={{ width: '100%', height: '95vh' }}
                shadows
                camera={{ position: [5, 5, 5], rotation: [0, 0, 0] }}
            >
                {/* <CameraControls ref={cameraControlRef}/> */}


                <directionalLight position={[1, 1, 10]} intensity={2} />
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
                <ScrollControls pages={3}>
                    <Village
                        position={[10, -5, -50]}
                        scale={position}
                        rotation={[0, 0, 0]}
                    />
                </ScrollControls>
            </Canvas>


            {/* <button
                onClick={() => {
                    cameraControlRef.current.rotate(Xangle, 0, true);
                }}
            >
                rotate theta 45deg
            </button> */}


        </>
    )
}

export default About
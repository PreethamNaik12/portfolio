import { Suspense, useState } from "react"
import { Box } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { HomeInfo, Loader } from "../components"
import { Bird, Island, Plane, Sky } from "../models"

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false)

    const adjustIslandScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }
        else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandScreenSize();

    const adjustPlaneScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const [planeScale, planePosition] = adjustPlaneScreenSize();

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </Box>
            <Canvas
                style={{ width: '100%', height: '100vh', cursor: isRotating ? 'grabbing' : 'grab' }}
                camera={{ near: 0.1, far: 1000 }}

            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 10]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

                    <Bird />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        position={[0, 0, 0]}
                        rotation={[0, -5, 0]}
                    />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </Box>
    )
}

export default Home
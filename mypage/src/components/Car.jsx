import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "./Loader"

const Car = () => {
    const nissan = useGLTF('./nissan_gt-r35_rocket_bunny/scene.gltf')

    return (
        <mesh> 
            <hemisphereLight intensity={0.15}
            groundColor="black" />
            <pointLight intensity={1} />
            <primitive 
                object={nissan.scene}
                scale={1}
                position={[ 0, -4, -2]}
            />
        </mesh>
    )
}

const CarCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position: [15, 10, 5], fov: 25}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Car />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default CarCanvas
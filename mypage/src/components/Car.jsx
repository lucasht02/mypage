import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment, Lightformer } from "@react-three/drei"
import CanvasLoader from "./Loader"

const Car = () => {
    const nissan = useGLTF('./nissan_gt-r35_rocket_bunny/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.3}
                groundColor="black" />
            <pointLight intensity={5} />
            <primitive
                object={nissan.scene}
                scale={1}
                position={[0, 0, 0]}
            />
            <directionalLight color="#fffcf3" position={[0, 2, 0]} intensity={0.25} />
            <ambientLight intensity={0.2} />

        </mesh>
    )
}

const CarCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [10, 10, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.25}
                    minPolarAngle={Math.PI / 2.25}
                />
                <Car />
            </Suspense>
            <Environment resolution={512}>
                {/* Ceiling */}
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                {/* Sides */}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                {/* Key */}
                <Lightformer form="ring" color="#fff5d7" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
            <Preload all />
        </Canvas>
    )
}

export default CarCanvas
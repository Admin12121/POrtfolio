import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Demon from "./Demon";

const DemonModel = () => {
  return (
    <>
        <Canvas id="canvas" antialias="true" alpha="true" camera={{ position: [0, 5, 15], fov: 10 }}>
          <OrbitControls
            enablePan={false}
            enableDamping={true}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 5}
            maxAzimuthAngle={Math.PI / 2}
            enableZoom={false}
          />
                    <directionalLight
            intensity={0.5}
            color="mediumslateblue"
            position={[0, 1, 0]}
            castShadow
            shadow-mapSize={2048}
            shadow-bias={-0.0001}
          />
          <directionalLight color="pink" position={[0, -5, 5]} intensity={2} />
          <directionalLight position={[0, -0, -5]} intensity={2} />
          <ambientLight intensity={2} />
            <Bounds >
              <Demon  position={[0, -0.8, 0]}/>
            </Bounds>
        </Canvas>
    </>
  )
}

export default DemonModel

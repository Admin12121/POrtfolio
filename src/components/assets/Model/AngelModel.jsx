import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Angel from "./Angel";

const AngleModel = () => {
  return (
    <>
        <Canvas id="canvas" antialias="true" alpha="true" camera={{ position: [0, 0, 2], fov: 1 }}>
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
            color="red"
            position={[0, 1, 0]}
            castShadow
            shadow-mapSize={2048}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[0, -5, 5]} intensity={2} />
          <directionalLight position={[0, -0, -5]} intensity={2} />
          <ambientLight intensity={2} />
            <Bounds >
              <Angel position={[0,-0.02,0]}/>
            </Bounds>
        </Canvas>
    </>
  )
}

export default AngleModel

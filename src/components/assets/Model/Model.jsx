import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = ({children}) => {
  return (
    <>
        <Canvas antialias="true" alpha="true" camera={{ position: [0, 0, 0], fov: 10 }}>
          <OrbitControls
            enablePan={false}
            enableDamping={true}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 5}
            maxAzimuthAngle={Math.PI / 2}
            enableZoom={false}
          />
          <ambientLight intensity={2} />
            <Bounds fit clip observe margin={1}>
              {children}
            </Bounds>
        </Canvas>
    </>
  )
}

export default Model

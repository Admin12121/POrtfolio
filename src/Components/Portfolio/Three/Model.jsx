import {ScrollControls, OrbitControls } from '@react-three/drei'
import {Bounds} from "@react-three/drei"
import React from 'react'
import Angel from './Angel'
// import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"
const Model = () => {
    const lightColor = 0xe5e4e2;
  return (
    <>
    <OrbitControls         
        makeDefault
        enablePan={true}
        enableZoom={false}/>
    <directionalLight intensity={1} color={lightColor} position={[0, 10, 10]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={2} color='red' position={[0, 1, 0]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={1} position={[0, 5, -5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={1} position={[5, -5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={1} position={[-9, -9, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Bounds fit clip observe margin={1}>
    <group >
     <Angel   />
    </group>
    </Bounds>
    {/* <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={.01} />
    </EffectComposer> */}
    </>
  )
}

{/* <mesh>
  <boxBufferGeometry/>
  <meshNormalMaterial/>
</mesh> */}
export default Model

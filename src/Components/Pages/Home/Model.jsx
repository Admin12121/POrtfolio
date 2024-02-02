import {OrbitControls } from '@react-three/drei'
import {Bounds} from "@react-three/drei"
import React from 'react'
import Angel from './Angel'
const Model = () => {
    const lightColor = 0xe5e4e2;
  return (
    <>
    <OrbitControls makeDefault enablePan={true} enableZoom={false}/>
    <directionalLight intensity={2} color={lightColor} position={[0, 0, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={2} color='red' position={[0, 1, 0]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={2} position={[0, 5, -5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={2} position={[5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight intensity={2} position={[-5, 0, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Bounds fit clip observe margin={1}>
       <Angel   />
    </Bounds>
    </>
  )
}
export default Model

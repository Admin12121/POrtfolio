import { Bounds,OrbitControls} from "@react-three/drei";
import React, { useEffect, useState } from 'react'
import Angel from './Angel'
const Model = () => {

  const [screen, setScreen] = useState(window.innerWidth)
  useEffect(()=>{
    const updateScreenWidth = () => {
      setScreen(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", updateScreenWidth);

    // Initial update
    updateScreenWidth();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  },[])
  
  return (
    <>
    <OrbitControls 
    makeDefault 
    // enablePan={true} 
    enablePan = {false}
    enableDamping = {true}
    minPolarAngle = {Math.PI / 2}
    maxPolarAngle = {Math.PI / 2}
    minAzimuthAngle = {-Math.PI / 5}
    maxAzimuthAngle= {Math.PI / 5}
    enableZoom={false}
    />
    <directionalLight intensity={.5} color='red' position={[0, 1, 0]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <directionalLight position={[0, -5, 5]} intensity={2} />
    <directionalLight position={[0, -0, -5]} intensity={2} />
    <ambientLight intensity={2} />
    {/* <Bounds fit clip observe margin={1}> */}
    {screen < 800 ? 
    <Bounds fit clip observe margin={1}> 
     <Angel />
    </Bounds>
     : 
    <Bounds margin={1}> 
       <Angel position={[0,-0.02,0]} />
    </Bounds>}
    </>
  )
}
export default Model

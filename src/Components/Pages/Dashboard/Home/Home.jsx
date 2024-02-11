import React,{useState, useEffect} from "react"
import Model from "./Model"
import Background from "./Background"
import { Canvas } from "@react-three/fiber"
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  const currentYear = new Date().getFullYear();
  
  const [screen, setScreen] = useState(window.innerWidth)
  const [display, setDisplay] = useState(true)
  useEffect(()=>{
    const updateScreenWidth = () => {
      setScreen(window.innerWidth);
        if(screen<700){
          setDisplay(false)
        }
    };
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  },[])
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const xx = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <span style={{position:"fixed",zIndex:1, width: "100%", height:"100%"}}>
    <Navbar/>
      <div className="text-container">
        <div className="ttcontainer">
          <div className="marquee">
            {/* <div className="marquee__inner first"><span>CREATIVE</span><span>FULL</span><span>STACK</span><span>DEVELOPER</span></div> */}
            <div className="marquee__inner second"><span>CREATIVE DEVELOPER</span><span>CREATIVE DEVELOPER</span><span>CREATIVE DEVELOPER</span><span>CREATIVE DEVELOPER</span></div>
          </div>
       </div>
        <span className="scroll_down">
          <span className="arrow">
            <motion.span 
        animate={{ 
          y: [-10, 0, 10, 20],
          opacity:[0.5, 1, .3 ,0]

        }}       
        transition={{
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 1
      }}>
              <FaArrowDown/>
              </motion.span>
            </span> SCROLL DOWN</span>
        <span className="date_span">©️ {currentYear}</span>
      </div>
      {display && 
            <Canvas id="canv" antialias="true" alpha="true" camera={{ position: [0, 0, 2], fov: 1 }}>
            <Model  />
          </Canvas>
      }
      <Background />
    </span>
  )
}

export default Home

import { useRef } from 'react'
import React from 'react'
import './Bat.css'
import { animate, useScroll, useTransform, motion } from "framer-motion";

const Bat = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
    
      const yBg = useTransform(scrollYProgress, [1, 0], [0, 1]);
      console.log(yBg)
  return (
    <>
      <motion.div className="bat" ref={ref} style={{opacity : yBg,transition: 'opacity .2s ease-in-out',}}></motion.div>
    </>
  )
}

export default Bat

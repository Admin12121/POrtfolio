import React from "react"
import Model from "./Model"
import Background from "./Background"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <div className="text-container">
        <motion.div initial={{ y: -500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }} className="title">
          Vicky Tajpuriya
          <br />
          <a href="https://www.linkedin.com/in/vickytajpuriya/" target="_blank">
            @Vicky
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, delay: 1 }}
          className="Higllight">
          <h1>Creative Developer</h1>
          <h1 className="popup">Creative Developer</h1>
        </motion.div>
        <motion.div initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 1 }} className="socials">
          DEVELOP WITH A PASSON FOR CREATING INTUITIVE DIGITAL EXPERENCES
        </motion.div>
      </div>
      <Canvas id="canv" antialias="true" alpha="true" camera={{ position: [0, 0, 2], fov: 1 }}>
        <Model  />
      </Canvas>
      <Background />
    </>
  )
}

export default Home

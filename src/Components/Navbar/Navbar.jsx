import React, { useState } from "react";
import "./Navbar.scss";
import Bar from './Bar/Bar'
import { motion } from "framer-motion";

const Navbar = () => {



  return (
    <>
      <div>
        <motion.div className="Navbar" initial={{y:-100}} animate={{y:0}} transition={{type:"spring",stiffness: 200,duration:1, delay:1}}> 
          <div className="wrapper">
            <span>Vicky.</span>
            <Bar/>
            <motion.button  whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}}>CONTACT US ↗</motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;

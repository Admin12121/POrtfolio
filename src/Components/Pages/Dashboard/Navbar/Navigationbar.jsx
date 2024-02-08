import React from 'react'
import './Navigation.scss'
import { FaRegChessPawn } from "react-icons/fa6";
import {motion} from 'framer-motion' 
const Navigationbar = ({variants,isInView}) => {
    const handleMouseMove = (e) => {
        for (const card of document.getElementsByClassName("navigationbar")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
  return (
    <>
    <div className='fixed_wrappper'>
    <motion.span className='nav_span_position'variants={variants} initial="initial" animate={isInView ? isInView && "animate" : {y:300, opacity:0,  transition:{
    type:"spring",
    stiffness:100,
    duration:1,
    delay:.4
  }}} >
      <div className="navigationbar" onMouseMove={handleMouseMove}>
        <div className="navigation_wrapper">
        <div className="logo">
            <a href="#">
              <span>
                <FaRegChessPawn />
              </span>
            </a>
            </div>
            <div className="links">
                <a href="#cards">About</a>
                <a href="#projects">Projects</a>
                <a href="#form">Contact</a>
            </div>
        </div>
      </div>
    </motion.span>
    </div>
    </>
  )
}

export default Navigationbar

import React,{useRef} from "react";
import './style.scss'
import Curve from "../../Models/Page_Tra/Tran";
import Navbar from '../Dashboard/Navbar/Navbar';
import Navigationbar from "../Dashboard/Navbar/Navigationbar";
import {motion, useInView} from 'framer-motion'

const variants = {
  initial:{
    y:300,
    opacity:0
  },
  animate:{
  y: 0,
  opacity:1,
  transition:{
    type:"spring",
    stiffness:50,
    duration:1,
  }
 }
}
  
const Project = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <>
      <Curve>
        <div ref={ref} className="All_project_wrapper">
          <Navbar />
          <Navigationbar variants={variants} isInView={isInView} />
          Project
        </div>
      </Curve>
    </>
  );
};

export default Project;

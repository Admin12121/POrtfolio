import React, { useRef, useState, useEffect } from 'react'
import Home from './Home/Home'
import About from './About/About'
import { HoverImageLinks } from './Projects/Project'
import ReactForm from './Forms/Form'
import Navigationbar from './Navbar/Navigationbar'

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
  
const Dashboard = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"})
  return (
    <>
    <section >
      <Home />
    </section>
    <span id='body_span' ref={ref}  style={{position:"relative", zIndex:2}}>
      <Navigationbar variants={variants} isInView={isInView} />
      <About/>
    <HoverImageLinks/>
      <ReactForm/>
    </span> 
    </>
  )
}

export default Dashboard

import React, { useRef } from 'react'
import Home from './Home/Home'
import About from './About/About'
import { HoverImageLinks } from './Projects/Project'
import ReactForm from './Forms/Form'
import Navigationbar from './Navbar/Navigationbar'

import {motion, useInView} from 'framer-motion'
import Aboutme from './About/Aboutme'


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
    <span id='body_span' className='body_wrapper' ref={ref}  style={{position:"relative", zIndex:2}}>
     <div class="bg"></div>
      <Navigationbar variants={variants} isInView={isInView} />
     <motion.div className='body_container' >
       {/* <About/> */}
       <Aboutme/>
       <HoverImageLinks/>
       <ReactForm/>
     </motion.div>
    </span> 
    </>
  )
}

export default Dashboard

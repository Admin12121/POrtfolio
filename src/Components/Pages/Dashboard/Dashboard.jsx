import React, { useRef } from 'react'
import Home from './Home/Home'
import { HoverImageLinks } from './Projects/Project'
import ReactForm from './Forms/Form'
import Navigationbar from './Navbar/Navigationbar'

import {motion, useInView} from 'framer-motion'
import Aboutme from './About/Aboutme'
import Curve from '../../Models/Page_Tra/Tran'


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
    <Curve>
      <span style={{background: '#25262A', display: "block", width: '100%', height: '100%'}}>
        <section >
          <Home />
        <div className="bg"></div>
        </section>
        <span id='body_span' className='body_wrapper' ref={ref}  style={{position:"relative", zIndex:2}}>
          <Navigationbar variants={variants} isInView={isInView} />
        <motion.div className='body_container' >
          <Aboutme/>
          <HoverImageLinks/>
          <ReactForm/>
        </motion.div>
        </span> 
      </span>
    </Curve>
    </>
  )
}

export default Dashboard

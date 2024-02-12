import React,{useEffect, useRef} from 'react'
import './styles.css'
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from "framer-motion";
import {  Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Model from './Components/Pages/Model/Model';
import About from './Components/Pages/About/About';
import Project from './Components/Pages/Projects/Project';
const App = () => {
  const lenis = new Lenis()
  const location = useLocation();
  useEffect(()=>{
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])

  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Dashboard imageDetails={imageDetails} />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/model/:id' element={<Model imageDetails={imageDetails} />} />
            </Routes>
          </AnimatePresence>
    </>
  )
}

export default App

import React, { useState,useRef, useEffect, lazy, Suspense} from "react";
import { useInView } from "framer-motion";
import Curve from "../../Animation/Page/Curve";
import ScrollToTop from "../../assets/ScrollToTop/ScrollToTop";

import Navigationbar from "../../assets/Navbar/Navigationbar";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects"
import Contact from "./Contact";
const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: .5,
    },
  },
};

const Dashboard = ({display}) => {
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(()=>{
    (        
      async () =>{
      const Lenis = (   await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        lerp: 0.05,
        duration:0.4,
        wheelMultiplier: 3
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })()
  },[])

  return (
    <>
      <Curve color="#25262A">
        <ScrollToTop>
            <section style={{height:"100vh"}}>
             <Home display={display}/>
            </section>
              <Navigationbar variants={variants} isInView={isInView} />
            <span id='body_span' ref={ref}  >
              <Aboutme/>
              <Projects/>
              <Contact/>
            </span>
        </ScrollToTop>
      </Curve>
    </>
  );
};

export default Dashboard;

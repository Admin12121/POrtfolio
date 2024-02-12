import React,{useRef} from "react";
import './About.scss'
import Curve from '../../Models/Page_Tra/Tran';
import Navigationbar from '../Dashboard/Navbar/Navigationbar';
import Navbar from '../Dashboard/Navbar/Navbar';
import {motion, useInView} from 'framer-motion'
import Form from '../Dashboard/Forms/Form'
import Line from "../../Models/Line";
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
  
const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <>
    <Curve>
      <div ref={ref}  className="About_page_wrapper">
        <Navbar/>
        <Navigationbar variants={variants} isInView={isInView} />
        <div className="about_page_wrapper">
          <div className="portfolio_img">
            <motion.img initial={{y:50, scale:.8}} animate={{y:0,scale:1}} transition={{duration:1, delay:.3, ease: [0.76, 0, 0.24, 1]}} src="orginal.png" alt="" />
            <span>Vicky</span>
          </div>
          <div className="about_container-1">
          <Line/>
          <span className="text_section">
            <span>
            <h1>About me</h1>
            </span>
            <span>
            <p>
              <span className="first_text">Hello, I'm Vicky Tajpuriya, hailing from the eastern part of Nepal, Jhapa.</span>
             I'm a junior full-stack developer with a passion for crafting seamless and engaging user experiences.
               Beyond coding,I channel my creativity into animating videos during my free time. This not only keeps my mind fresh but also fuels my ability to think creatively.
            </p>
            </span>
          </span>
          </div>
          <div className="about_container-1">
          <Line/>
          <span className="text_section">
            <span>
            <h1>Skills</h1>
            </span>
            <span>
            <p>
              <span className="skill_">Python / </span>
              <span className="skill_">Django / </span>
              <span className="skill_">Rest Api / </span>
              <span className="skill_">Javascript / </span>
              <span className="skill_">React / </span>
              <span className="skill_">Next js / </span>
              <span className="skill_">Redux / </span>
              <span className="skill_">Three js </span>
            </p>
            </span>
          </span>
          </div>
          <Form/>
        </div>
      </div>
    </Curve>
    </>
  )
}

export default About;
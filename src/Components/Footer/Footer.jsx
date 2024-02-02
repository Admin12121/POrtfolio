import React, { useRef, useState, useEffect } from 'react'
import './Footer.scss'
import {FaGithub,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
// import { useInView } from 'react-intersection-observer';

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
  stiffness:100,
  duration:1,
  delay:.4
}
}
}

const variables ={
  initial: {
    scale:0, opacity:0
  },
  animate:{
    scale: 1, opacity:1,
    transition:{type:"spring",stiffness: 100,duration:1, delay:1}
  }
}

const Button ={
  initial:{
    y:500, opacity:0
  },
  animate:{
    y:0, 
    opacity:1,
    transition:{type:"spring",stiffness: 50,duration:2, delay:.5}

  }
}

const right={
  initial:{
    y:1000
  },
   animate:{y:0,
    transition:{type:"spring",stiffness: 40,duration:1, delay:.5}} 
}

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"})
  const letters = "ABCDEFGHKNOPQRSUVXY";
  const [text, setText] = useState("Let's Build and Scale it!");
  const [intervalId, setIntervalId] = useState(null);
  const [updatedLength, setUpdatedLength] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 15)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 1.8;
      setUpdatedLength(Math.floor(iteration));
    }, 30);

    setIntervalId(newIntervalId);
  };
  const [triggered, setTriggered] = useState(false);
  const [timt, setTimt] = useState(0);
  useEffect(() => {
    const divElement = document.getElementById("idrt");

    if (divElement && isInView && !triggered) {
      // Trigger the logic when the element is in view
      divElement.click();
      setTimt((prevTimt) => prevTimt + 2);

      // Set the triggered state to true to prevent the effect from running again
      setTriggered(true);
    }
  }, [isInView, triggered]);
  



  return (
    <>
      <motion.div className="footer_wrapper" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <div className="top" ctr={ref}>
        <motion.h1 id="idrt" className='Main-box-letter' onClick={handleMouseOver}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                style={{
                  color:
                    index < updatedLength + timt
                      ? "rgba(37, 38, 42, 0.8235294118)"
                      : "rgba(255, 255, 255, 0)",
                }}
              >
                {letter}
              </span>
            ))}
          </motion.h1>
            <motion.div className="contact_us" variants={variables} initial="initial"  animate={isInView && "animate"}>
                <span>info@gmail.com </span>
                <motion.button  whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}}>CONTACT US ↗</motion.button>
            </motion.div>
        </div>
        <motion.div className="button" variants={Button} initial="initial" animate={isInView && "animate"} >
            <div className="logo">
                Vicky.
            </div>
            <div className="links_ui">
                <motion.a whileHover={{scale:1.2}} whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}} href="">Services</motion.a>
                <motion.a whileHover={{scale:1.2}} whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}} href="">About us</motion.a>
                <motion.a whileHover={{scale:1.2}} whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}} href="">Contact us</motion.a>
            </div>


            <div className="social-icons">
            <a href="https://www.facebook.com/vicky.tajpuriya.75">
            <FaFacebook/>
            </a>
            <a href="https://www.instagram.com/vicky__taj">
              <AiFillInstagram/>
            </a>
            <a href="https://github.com/Admin12121">
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/vicky-taj-7903b5281/">
              <FaLinkedin/>
            </a>
            </div>

        </motion.div>
      </motion.div>
      <motion.div className="right_reserved" variants={right} initial="initial" animate={isInView && "animate"}>
        <h2>@2023 Vicky. All Rights Reserved</h2>
      </motion.div>
    </>
  )
}

export default Footer

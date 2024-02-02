import React, {useEffect, useRef, useState} from 'react'
import './About.scss'
import Ring from './Ring'
import {motion,useScroll,useTransform, useInView} from "framer-motion";

const variants ={
  initial:{
    y:400,
    opacity:1
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      type:"spring",
      stiffness:50,
      duration:2
    }
  }
}

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin:"-100px"})

const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const text =
    "I'm a creative full-stack developer with over 2 years of expertise in both frontend and backend development. Proudly hailing from Nepal, my passion fuels my code.";

  const [characters, setCharacters] = useState([]);
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const generateCharacters = (text) => {
            return text.split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${0.02 * index}s` }}>
                {char === " " ? '\u00A0' : char}
              </span>
            ));
          };

          // Set the characters state
          setCharacters(generateCharacters(text));

          // Disconnect the observer after animation starts to avoid unnecessary checks
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (animatedTextRef.current) {
      observer.observe(animatedTextRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [text]);

  return (
    <>
      <motion.div ref={ref}  className="about_box" variants={variants} initial="initial" animate={isInView && "animate"} >
        <motion.div className="about_title" style={{y:xBg}} initial={{x:-1000,y:300, opacity:1}} animate={isInView && {x:0,y:0, opacity:1}} transition={{duration:1,type:"spring",stiffness:50}}>
          <h1>About Me</h1>
          <h2>My Name is Vicky Tajpuriya</h2>
          <p ref={animatedTextRef} className="animated-text">{characters}</p>
          <motion.span id='span_button' whileTap={{scale:0.93}}  transition={{type:"spring",stiffness: 200}} >
          <motion.button initial={{y:200,x:-150}} animate={isInView && {y:0,x:0 }}   transition={{type:"spring", delay:.4, duration:1}}><span>CONTACT US ↗</span></motion.button>
          </motion.span>
        </motion.div>
        <motion.div className="image_wrapper" style={{y:xBg}} initial={{y:300 ,x:300, opacity:1}} animate={isInView && {y:0,x:0, opacity:1}} transition={{type:"spring",  stiffness:50, duration:1}}>
        <Ring/>
        <img src="etherd.png" alt="" />
        </motion.div>
      </motion.div>
    </>
  )
}

export default About

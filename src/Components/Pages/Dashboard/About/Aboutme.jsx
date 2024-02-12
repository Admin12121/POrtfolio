import { useRef, useLayoutEffect } from 'react';
import "./Aboutme.scss";
import Line from "../../../Models/Line";
import Rounded from '../../../Models/Magnetic'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import RollingText from '../../../Models/Roll/Rotating';


const Aboutme = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <>
      <div id="about" className="About_wrapper">
        <div className="About_title">
          <Line />
          <span>
            <h1>About</h1>
            <span className="links">
            <RollingText link="mailto:vickytaj6459@gmail.com" text="Email" />/
            <RollingText link="https://www.instagram.com/vicky__taj/" text="Instagram" />/
            <RollingText link="https://github.com/Admin12121" text="Github" />/
            <RollingText link="https://www.linkedin.com/in/vickytajpuriya/" text="Linkedin" />/
            </span>
          </span>
        </div>
        <div className="About_text">
          <span>
            <p>
              <span>HELLO, MY NAME IS VICKY TAJPURIYA,</span> I'M A JUNIOR FULL STACK DEVELOPER WITH +1Y EXPERIENCE.
            </p>
          </span>
          <span >
            <img src="orginal.png" alt="" />
            <div className='sliderContainer'>
              <div ref={slider} className='slider'>
                <p ref={firstText}>Vicky Tajpuriya -</p>
                <p ref={secondText}>Vicky Tajpuriya -</p>
              </div>
            </div>
          </span>

          <span>
            <a href="">
          <motion.div >
              <Rounded >
                  <p>Learn</p>
                  <p>More</p>
                  <span>
                     <svg width="3rem" height="3rem" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path></svg>
                  </span>
              </Rounded>
          </motion.div>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

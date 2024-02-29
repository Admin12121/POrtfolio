import React, {useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMotionValue, motion, useSpring, useTransform , useInView} from "framer-motion";

import { SiNextdotjs,SiDjango } from "react-icons/si";
import { FaLock,FaReact, } from "react-icons/fa";
import { ImUnlocked } from "react-icons/im";

import {Line,Rounded} from "../../Animation/Line_Button/Line";
import styles from './style.Dash.module.scss'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true});
  const caresol = useRef()
    const [width,setWidth] =useState(0)
    useEffect(()=>{
         setWidth(caresol.current.scrollWidth - caresol.current.offsetWidth)
    },[])

  return (
    <section ref={ref} className={styles.project}>
      <div className={styles.shadow_title}>
      <Line/>
        <h1>Projects</h1>
        <span className={styles.project_title}>
          <Link to="/project" className={styles.project_hover}>
              <Rounded isInView={isInView}>
                  <p>View All </p>
                  <p>Projects</p>
                  <span>
                  <svg width="3rem" height="3rem" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path></svg>
                  </span>
              </Rounded>
          </Link>
          <span>
            <p><span>Here are some selected projects</span> that showcase my passion for creating web experiences, products & skills.</p>
          </span>
        </span>
      </div>

    <motion.div ref={caresol} className={styles.project_horizontal_wrapper}>
      <motion.div  drag="x"  dragConstraints={{right:0,left:-width}}  className={styles.project_wrapper}>
        <Links
          heading="|About"
          subheading="Learn what we do here"
          imgSrc="/1.png"
          href="/model/yasmeen-tariq"
          react={<FaReact/>}
          python={<SiDjango/>}
          />
        <Links
          heading="|Clients"
          subheading="We work with great people"
          imgSrc="/2.jpg"
          href="#"
          python={<SiDjango/>}
          lock={true}
          />
        <Links
          heading="|Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="/3.jpeg"
          href="#"
          nextjs={<SiNextdotjs/>}
          />
        <Links
          heading="Careers"
          subheading="We want cool people"
          imgSrc="/4.jpg"
          href="#"
          />
          
        </motion.div>
      </motion.div>
    </section>
  );
};

const Links = ({ heading, imgSrc, subheading, href , react, python , nextjs, lock}) => {
  const projectref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = projectref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <Link to={href}>
    <motion.div
      ref={projectref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className={styles.project_card_wrapper}
      >
      <div className={styles.project_mobile_display} style={{display:"flex", alignItems:'center' , gap:"20px"}}>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className={styles.project_box_span_wrapper}
          >
          { react || python || nextjs ? <span className={styles.tech}>{react} {python} {nextjs}</span> : ""}
          {heading.split("").map((l, i) => (
            <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 16 },
            }}
              transition={{ type: "spring" }}
              className={styles.inline_block}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className={styles.project_box_header}>
        —— {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        exit={{position:"absolute", top:"50%", left:"50%"}}
        transition={{ type: "spring" }}
        src={imgSrc}
        className={styles.project_image_wrapper}
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className={styles.project_icon_wrapper}
      >
         {lock ?   
         <span className={styles.lock}>
           <FaLock/> contact for details
         </span> 
         : 
         <span className={styles.lock}>
           <ImUnlocked/> view more details
         </span> 
        }
      </motion.div>
    </motion.div>
        </Link>
  );
};

export default Projects;
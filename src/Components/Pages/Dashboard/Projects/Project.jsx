import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import './Project.scss'
import { Link } from "react-router-dom";
import { SiNextdotjs,SiDjango } from "react-icons/si";
import { FaLock,FaReact, } from "react-icons/fa";
import { ImUnlocked } from "react-icons/im";
import Line from "../../../Models/Line";
import Rounded from "../../../Models/Magnetic";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const HoverImageLinks = () => {
  
  return (
    <section id="projects" className="project">
      <div className="shadow-title">
        <h1>⤵ PROJECTS</h1>
      <Line/>
        <span className="project_title">
          <span className="project_hover">
              <Rounded >
                  <p>View All </p>
                  <p>Projects</p>
                  <span>
                  <svg width="3rem" height="3rem" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path></svg>
                  </span>
              </Rounded>
          </span>
          <span>
            <p><span>Here are some selected projects</span> that showcase my passion for creating web experiences, products & skills.</p>
          </span>
        </span>
      </div>
      <div className="project_wrapper">
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
        <Links
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/5.jpeg"
          href="#"
        />
        <Links
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/5.jpeg"
          href="#"
        />
      </div>
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
      className="project_card_wrapper"
      >
      <div style={{display:"flex", alignItems:'center' , gap:"20px"}}>
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
          className="project_box_span_wrapper"
          >
          { react || python || nextjs ? <span className="tech">{react} {python} {nextjs}</span> : ""}
          {heading.split("").map((l, i) => (
            <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 16 },
            }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="project_box_header">
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
        className="project_image_wrapper"
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
        className="project_icon_wrapper"
      >
         {lock ?   
         <span className="lock">
           <FaLock/> contact for details
         </span> 
         : 
         <span className="lock">
           <ImUnlocked/> view more details
         </span> 
        //  <FiArrowRight className="project_icon" />
        }
      </motion.div>
    </motion.div>
        </Link>
  );
};
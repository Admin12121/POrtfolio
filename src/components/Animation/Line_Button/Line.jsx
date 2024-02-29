import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import "./Roll.css";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";

const pathVariants = {
  hidden:{
    opacity: 0,
    pathLength:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}


const Line = (isInView) => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.93;
    if (path.current ){
      path.current.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
    }
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <>
      <div className={styles.line}>
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className={styles.box}
        ></div>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
    </>
  );
};

const Rounded = ({ children, backgroundColor = "#455CE9",isInView, ...attributes }) => {

  const Magnetic = ({ children }) => {
    const magnetic = useRef(null);

    useEffect(() => {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.85);
        yTo(y * 0.85);
      });
      magnetic.current.addEventListener("mouseleave", (e) => {
        xTo(0);
        yTo(0);
      });
    }, []);

    return React.cloneElement(children, { ref: magnetic });
  };
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        <motion.svg  className={styles.svgpath} id="sw-js-blob-svg" viewBox="0 0 100 100" width="100px" height="100px" xmlns="http://www.w3.org/2000/svg"> 
              <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
                  <stop id="stop2"  stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <motion.path variants={pathVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}  d="M50 0 A50 50 0 1 0 50 100 A50 50 0 1 0 50 0" width="100%" height="100%"  stroke-width="1" style={{transition: "all 0.3s ease 0s"}} stroke="url(#sw-gradient)" fill="none" />
        </motion.svg>
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

const RollingText = ({ text, link, st }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    setIsPlaying(false);
  };

  const renderLetters = () => {
    return text.split("").map((letter, index) => (
      <span key={index} className="letter">
        {letter.trim() === "" ? "\xa0" : letter}
      </span>
    ));
  };

  return (
    <>
      {link ? (
        <a
          className={`rolling-text ${isPlaying ? "play" : ""}`}
          target="_blank"
          href={link}
          onMouseOver={handleMouseOver}
        >
          <div className="block">{renderLetters()}</div>
          <div className="block">{renderLetters()}</div>
          <div className="smallblock">{st}</div>
        </a>
      ) : (
        <span
          className={`rolling-text ${isPlaying ? "play" : ""}`}
          onMouseOver={handleMouseOver}
        >
          <div className="block">{renderLetters()}</div>
          <div className="block">{renderLetters()}</div>
          <div className="smallblock">{st}</div>
        </span>
      )}
    </>
  );
};

const RollingHeader = ({ text }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true});

  const renderLetters = () => {
    return text.split("").map((letter, index) => (
      <span key={index} className="letter">
        {letter.trim() === "" ? "\xa0" : letter}
      </span>
    ));
  };

  return (
    <h1
      ref={ref}
      className={`rolling-text ${isInView ? "play" : ""}`}
      style={{ height: "80px" }}
    >
      <div className="blocks">{renderLetters()}</div>
      <div className="blocks">{renderLetters()}</div>
    </h1>
  );
};

export { Line, Rounded, RollingText, RollingHeader };

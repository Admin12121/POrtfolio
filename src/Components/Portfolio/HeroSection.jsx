// ... (your existing imports)

import React, { useState, useEffect, useRef } from "react";
import "./Hero.scss";
import { animate, useScroll, useTransform, motion } from "framer-motion";
import Bat from "./Bat";
// import Img from "../Source/portfolio.png";

const HeroSection = () => {
  const letters = "ABCDEFGHKNOPQRSUVXY";
  const [text, setText] = useState("CREATIVE DEVELOPER");
  const [intervalId, setIntervalId] = useState(null);
  const [updatedLength, setUpdatedLength] = useState(0);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

      iteration += 1 / 3;
      setUpdatedLength(Math.floor(iteration));
    }, 30);

    setIntervalId(newIntervalId);
  };

  const [timt, setTimt] = useState(0);

  useEffect(() => {
    const divElement = document.getElementById("id");

    if (divElement) {
      setTimeout(() => {
        divElement.click();
        setTimt((prevTimt) => prevTimt + 2);
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }, []);

  return (
    <>
      <div className="ui-wrapper" ref={ref}>
        <div className="Header">
          <motion.h1 id="id" style={{ y: ytext }} onClick={handleMouseOver}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                style={{
                  color:
                    index < updatedLength + timt
                      ? "#dcdcdc"
                      : "rgba(255, 255, 255, 0)",
                }}
              >
                {letter}
              </span>
            ))}
          </motion.h1>
        </div>
        <div className="box">
          <div className="main">
            <motion.div
              style={{ y: yBg }}
              className="portfolio_box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ stiffness: 100, type: "spring", delay: 2 }}
            >

            <Bat />
            </motion.div>
            <div className="text">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

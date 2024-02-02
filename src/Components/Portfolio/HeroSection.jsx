import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./Hero.scss";
import Buddha from "./Desktop/Buddha";
import Model from './Three/Model'
const HeroSection = () => {
  const letters = "ABCDEFGHKNOPQRSUVXY";
  const [text, setText] = useState("CREATIVE WEB DEVELOPER");
  const [intervalId, setIntervalId] = useState(null);
  const [updatedLength, setUpdatedLength] = useState(0);
  const [loadDesktop, setLoadDesktop] = useState(false);
  const ref = useRef();


  useEffect(() => {
    if (intervalId) {
      const intervalIdCopy = intervalId; // Create a copy to capture the current value
      return () => clearInterval(intervalIdCopy); // Clear the interval on component unmount
    }
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
        setLoadDesktop(true); // Trigger loading of Desktop component after completing the animation
      }

      iteration += 1 / 1.8;
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
          <motion.h1 id="id" onClick={handleMouseOver}>
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
          <h1 className="hover">CREATIVE WEB DEVELOPER</h1>
        </div>
        <div className="box">
            {/* <Buddha/> */}
            {/* <Model/> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

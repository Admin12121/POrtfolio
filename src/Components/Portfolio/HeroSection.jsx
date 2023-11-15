// ... (your existing imports)

import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Img from '../Source/portfolio.png'

const HeroSection = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("CREATIVE DEVELOPER");
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

            return letters[Math.floor(Math.random() * 26)];
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

  useEffect(() => {
    const divElement = document.getElementById("id");
    if (divElement) {
      divElement.click();
    }
  }, []);

  return (
    <>
      <div className="ui-wrapper">
        <div className="Header">
          <h1 id="id" onClick={handleMouseOver}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                style={{
                  color:
                    index < updatedLength ? "#dcdcdc" : "rgba(255, 255, 255, 0)",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="box">
          <div className="main">
        <div className="portfolio_box"></div>
          <img src={Img} alt="" /> 
          </div>
        <div className="text">

        </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

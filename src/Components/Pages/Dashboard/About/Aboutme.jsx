import React from "react";
import "./Aboutme.scss";
import Line from "../../../Models/Line";
const Aboutme = () => {
  return (
    <>
      <div id="about" className="About_wrapper">
        <div className="About_title">
          <Line/>
          <span>
            <h1>About</h1>
            <span className="links">
              <a href="https://www.linkedin.com/in/vickytajpuriya/" target="_blank">Linkedin</a>/
              <a href="https://github.com/Admin12121" target="_blank">Github</a>/
              <a href="https://www.instagram.com/vicky__taj/" target="_blank">Instagram</a>/
              <a href="https://www.facebook.com/vicky.tajpuriya.75" target="_blank">Facebook</a>/
            </span>
          </span>
        </div>
        <div className="About_text">
          <span>       
              <p>
                <span>HELLO, MY NAEME IS VICKY TAJPURIYA,</span> I'M A JUNIOR FULL STACK DEVELOPER WITH +1Y EXPERIENCE. 
          </p></span>
          <span>
            <img src="orginal.png" alt="" />
          </span>
          <span>
          <a href="">
            <button>Learn <br/> more</button>
          </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

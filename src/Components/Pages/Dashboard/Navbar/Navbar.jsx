import React from "react";
import "./Nav.scss";
import { FaRegChessPawn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const Navbar = () => {
  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("nav")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <>
      <motion.div initial={{y:-100, scale:.9}} animate={{y:10, scale:1}} transition={{duration:1, delay:.3, ease: [0.76, 0, 0.24, 1]}}  className="Nav_wrapper">
        <div className="nav" onMouseMove={handleMouseMove}>
          <div className="nav_wrap">
            <div className="logo">
            <Link to="/">
              <span>
                <FaRegChessPawn />
              </span>
            </Link>
              <p>Creative & Passonated FullStack Developer</p>
            </div>
            <div className="button-container-1">
              <span className="mas">Available for FreeLance</span>
              <button type="button" className="button-3"  name="Hover">
                Available for FreeLance
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

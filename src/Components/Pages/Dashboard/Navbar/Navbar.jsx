import React from "react";
import "./Nav.scss";
import { FaRegChessPawn } from "react-icons/fa6";
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
      <div className="Nav_wrapper">
        <div className="nav" onMouseMove={handleMouseMove}>
          <div className="nav_wrap">
            <div className="logo">
              <span>
                <FaRegChessPawn />
              </span>
              <p>Creative & Passonated FullStack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

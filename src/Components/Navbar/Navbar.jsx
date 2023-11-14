import React, { useState } from "react";
import "./Navbar.scss";
import Bar from './Bar/Bar'
import { motion } from "framer-motion";

const Navbar = () => {



  return (
    <>
      <div>
        <div className="Navbar">
          <div className="wrapper">
            <span>Vicky</span>
            <Bar/>
            <button>CONTACT US ↗</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

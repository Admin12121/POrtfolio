import React, { useState, useEffect } from "react";
import './App.scss'
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "./components/pages/Home/Dashboard";
import Contact from "./components/pages/Contact/Contact";
import Aboutme from "./components/pages/About/Aboutme";
import Projects from "./components/pages/Projects/Project";

const App = () => {
  const location = useLocation();
  const [screen, setScreen] = useState(window.innerWidth);
  const [display,setDisplay] = useState(false)
  useEffect(() => {
    const updateScreenWidth = () => {
      if (screen > 700) {
        setDisplay(true)
      }
    };
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <>
      <div className="bg"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard display={display}/>} />
          <Route path="/about" element={<Aboutme/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

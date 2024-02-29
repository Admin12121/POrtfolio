import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { perspective, curve, translate } from "./anim";
import "./style.scss";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, color }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const pageElement = document.querySelector(".page_animation_click");
    if (pageElement) {
      pageElement.click();
      pageElement.click();
      pageElement.click();
    }
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve">
          <div
            style={{ opacity: dimensions.width == null ? 1 : 0 }}
            className="background"
          />
          {dimensions.width != null && <SVG {...dimensions} />}
            <motion.div className="page page_animation_click" {...anim(perspective)} style={{background: color, display: "block", width: '100%', height: '100%'}}>
                {children}
            </motion.div>
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 0
        Q${width / 2} 300 ${width} 0
        L${width} ${height}
        Q${width / 2} ${height + 600} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg className="svg" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

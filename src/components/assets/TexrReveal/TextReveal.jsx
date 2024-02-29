import React, {useRef} from "react";
import {motion,  useInView } from 'framer-motion'
import './style.css'; 

const TextReveal = ({children,style}) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" , once: true});

  return (
    <div ref={ref} className="wrapper">
      <div  className="line" style={style}>
        <motion.span initial={{y:150, skewY:5}} animate={isInView ? {  y:0, skewY:0} : {y:150, skewY:5}} transition={{duration:.6}}>{children}</motion.span>
      </div>
    </div>
  );
};

export default TextReveal;

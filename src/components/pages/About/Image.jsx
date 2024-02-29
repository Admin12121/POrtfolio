import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <>
      <motion.div initial={{height:0, width:0, top:200}} animate={{top:0,width:"90vw", height:"80vh"}} transition={{duration:1,delay:.1}} className="intro">
        <div className="corner tl">
          <div className="bloop"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 35"
          >
            <path
              fill="#7b68ee"
              d="M0 19.4062h35.332V15.082H0v4.3242Zm15.5039 15.0469h4.2891V0h-4.2891v34.4531Z"
            />
          </svg>
        </div>
        <div className="corner tr">
          <div className="bloop"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 35"
          >
            <path
              fill="#7b68ee"
              d="M0 19.4062h35.332V15.082H0v4.3242Zm15.5039 15.0469h4.2891V0h-4.2891v34.4531Z"
            />
          </svg>
        </div>
        <div className="dot_background"></div>

        <img src="/portfolio.png" className="portfolio_image" />
        <div className="corner bl">
          <div className="bloop"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 35"
          >
            <path
              fill="#7b68ee"
              d="M0 19.4062h35.332V15.082H0v4.3242Zm15.5039 15.0469h4.2891V0h-4.2891v34.4531Z"
            />
          </svg>
        </div>
        <div className="corner br">
          <div className="bloop"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 35"
          >
            <path
              fill="#7b68ee"
              d="M0 19.4062h35.332V15.082H0v4.3242Zm15.5039 15.0469h4.2891V0h-4.2891v34.4531Z"
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
};

export default Image;

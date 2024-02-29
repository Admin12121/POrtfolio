import React from "react";
import { motion } from "framer-motion";
import './Spotlight.css'; // Import your CSS file

export function SpotlightPreview({children}) {
  return (
    <div className="spotlight-preview-container">
      <motion.div
        className="spotlight-svg-container"
        initial={{ opacity: 0, scale: 0.5, translateX: "-72%", translateY: "-62%" }}
        animate={{ opacity: 1, scale: 1, translateX: "-50%", translateY: "-40%" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.75 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="white"
              fillOpacity="0.21"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </motion.div>
      {children}
    </div>
  );
}

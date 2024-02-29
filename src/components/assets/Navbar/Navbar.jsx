import React from "react";
import "./style.navigation.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = (props) => {
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
      <motion.div
        initial={{ y: -100, scale: 0.9 }}
        animate={{ y: 10, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="Nav_wrapper"
      >
        <div className="nav" onMouseMove={handleMouseMove}>
          <div className="nav_wrap">
            <div className="logo">
              <Link to="/">
                <motion.span >
                  <motion.svg
                  initial={{rotate:360}} animate={{rotate:0 }} transition={{type:"spring", delay:.5,duration:1, stiffness:100}}
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.000000pt"
                    height="26.000000pt"
                    viewBox="0 0 188.000000 176.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)"
                      fill="#fff"
                      stroke="none"
                    >
                      <path
                        d="M660 1491 c-55 -29 -75 -64 -75 -129 0 -31 4 -72 8 -89 8 -29 6 -33
-11 -33 -32 0 -109 -76 -138 -138 -27 -57 -64 -180 -64 -214 0 -26 -42 -23
-68 5 -12 13 -22 35 -22 50 0 72 103 202 224 283 31 20 54 39 52 41 -11 11
-170 -83 -225 -134 -109 -98 -143 -187 -100 -262 25 -45 66 -74 127 -91 l39
-10 -5 -50 c-7 -76 39 -163 141 -264 l80 -80 -23 -18 c-94 -76 -198 80 -217
325 -6 75 -7 79 -16 47 -14 -52 -2 -236 18 -295 62 -175 184 -218 304 -106
l32 30 39 -25 c73 -48 202 -48 341 0 l69 24 6 -25 c32 -127 -174 -144 -398
-32 -75 38 -81 36 -27 -5 138 -105 331 -155 426 -109 65 31 94 113 69 197
l-14 46 42 18 c45 20 86 63 116 122 23 46 57 151 65 207 6 41 7 41 36 31 94
-33 68 -139 -68 -269 -37 -36 -87 -78 -110 -94 -53 -34 -54 -40 -5 -20 115 48
239 152 282 235 17 34 21 55 18 97 -6 68 -41 107 -119 133 l-53 18 -1 59 c-2
82 -39 149 -140 251 l-83 82 25 20 c40 32 75 26 116 -19 47 -52 76 -134 97
-271 l17 -115 7 75 c16 154 -29 316 -105 385 -33 29 -47 35 -85 35 -52 0 -95
-19 -141 -62 l-31 -30 -37 28 c-34 25 -47 29 -129 32 -75 3 -105 -1 -171 -21
-44 -13 -87 -26 -95 -28 -11 -3 -16 6 -18 34 -4 50 16 73 76 85 78 16 174 -5
327 -72 51 -22 56 -23 35 -6 -139 113 -348 171 -440 121z m350 -183 c59 -31
65 -53 31 -124 -26 -55 -98 -134 -122 -134 -6 0 -37 20 -69 45 -80 61 -170
169 -170 203 0 16 87 30 190 31 81 1 103 -2 140 -21z m289 -148 c70 -104 91
-199 52 -234 -30 -28 -125 -32 -191 -9 -50 18 -55 22 -58 52 -5 50 26 177 60
250 l30 63 35 -33 c19 -19 52 -59 72 -89z m-639 -12 c38 -41 66 -101 74 -160
l7 -47 -48 -21 c-69 -31 -188 -60 -246 -60 l-49 0 6 33 c9 46 78 186 111 226
28 32 75 60 103 61 7 0 26 -14 42 -32z m291 -254 c27 -13 30 -19 27 -55 -2
-31 -9 -44 -30 -57 -25 -15 -30 -15 -63 1 -31 15 -35 21 -35 55 0 30 5 41 28
54 34 22 36 22 73 2z m483 -101 c-33 -136 -127 -273 -197 -289 -28 -6 -35 -2
-69 37 -39 44 -68 118 -68 171 0 25 7 32 48 49 71 31 181 58 240 58 52 1 52 1
46 -26z m-736 -38 l43 -18 -6 -51 c-13 -108 -52 -231 -87 -273 -14 -17 -35 0
-95 81 -107 145 -121 267 -31 279 55 8 131 0 176 -18z m271 -159 c80 -59 191
-186 191 -219 0 -10 -126 -28 -197 -28 -91 0 -137 12 -170 43 -28 26 -28 40
-2 98 19 43 104 140 122 140 5 0 30 -15 56 -34z"
                      />
                    </g>
                  </motion.svg>
                </motion.span>
              </Link>
              <p>Creative & Passonated FullStack Developer</p>
            </div>
            <Link to="/contact" className="button_container_1">
              <button type="button" className="button_3" name="Hover">
                Available for FreeLance
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion} from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

import Navbar from "../../assets/Navbar/Navbar";
import styles from './style.Dash.module.scss';
import Text from "../../assets/TextScroll/Text";
import Loader from "../../assets/Loader/loader";
import Background from "../../Animation/Background/background";

const Home = ({display}) => {
  let LazyLoadedComponent ;
  const currentYear = new Date().getFullYear();
  const [showComponent, setShowComponent] = useState(false);
  if(display){
     LazyLoadedComponent = lazy(() => import("../../assets/Model/AngelModel"));
  }
  else{
    LazyLoadedComponent = ""
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span style={{ position: "fixed", zIndex: 1, width: "100%", height: "100%" }} >
      <Navbar />
      <div className={styles.text_container}>
        <div className={styles.ttcontainer}>
          <Text css={styles.slider} text="Creative Developer"/>
        </div>
        <span className={styles.scroll_down}>
          <span className={styles.arrow}>
            <motion.span
              animate={{
                y: [-10, 0, 10, 20],
                opacity: [0.5, 1, 0.3, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeIn",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <FaArrowDown />
            </motion.span>
          </span>
          SCROLL DOWN
        </span>
        <span className={styles.date_span}>©️ {currentYear}</span>
      </div>
      { display  &&   <Suspense fallback={<Loader/>}>
          {showComponent &&  <LazyLoadedComponent />}
        </Suspense>
      }
        <Background />
    </span>
  );
};

export default Home;

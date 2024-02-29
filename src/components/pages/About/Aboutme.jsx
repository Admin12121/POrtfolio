import Curve from "../../Animation/Page/Curve";
import ScrollToTop from "../../assets/ScrollToTop/ScrollToTop";
import Navbar from "../../assets/Navbar/Navbar";
import styles from "./style.module.scss";
import { Line } from "../../Animation/Line_Button/Line";
import TextReveal from "../../assets/TexrReveal/TextReveal";
import Lottie from "lottie-react";
import A1 from './a7.json'
import Model from "../../assets/Model/Model";
import { Truck } from "./Truck";
import ReactiveForm from "../Home/Contact";
import Image from "./Image";
import {useState, useEffect } from "react";
const Aboutme = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(()=>{
    const updateScreenWidth = () => {
      if (screen > 700) {
        (        
          async () =>{
          const Lenis = (   await import('@studio-freight/lenis')).default;
          const lenis = new Lenis({
            lerp: 0.05,
            duration:0.4,
            wheelMultiplier: 3,
            infinite:false
          })
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          requestAnimationFrame(raf)
        })()
      }
    };
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };

  },[])
  const style = {
    margin: "0 0 0 200px"
  } 
  return (
    <>
      <Curve>
        <ScrollToTop>
          <Navbar />
          <div className={styles.about_container}>
            <div className={styles.about_wrapper}>
              <div className={styles.text_wrapper}>
                {/* <img src="/portfolio.png" alt="" /> */}
                <Image/>
              </div>
            </div>
            <div className={styles.description}>
              <Line />
              <span className={styles.page_no}>
                <p>01/</p>
                <p>/03</p>
              </span>
              <div className={styles.text_area}>
                <h1>Aboutme</h1>
                <p>
                  <TextReveal  style={style}>Hello, I'm Vicky Tajpuriya hailing from the  </TextReveal>
                  <TextReveal >eastern part of Nepal, Jhapa. I'm a junior full-stack developer  </TextReveal>
                  <TextReveal >with a passion for crafting seamless and engaging user </TextReveal>
                  <TextReveal >experiences. </TextReveal>
                  <br/>
                  <TextReveal > Beyond coding, I channel my creativity into animating videos </TextReveal>
                  <TextReveal > during my free time. This not only keeps my mind fresh </TextReveal>
                  <TextReveal > but also fuels my ability to think creatively. </TextReveal>
                </p>
                <p>
                  <span>Hello, I'm Vicky Tajpuriya</span>, hailing from the eastern part of
                  Nepal, Jhapa. I'm a junior full-stack developer with a passion
                  for crafting seamless and engaging user experiences.<br/><br/>
                  Beyond coding, I channel my creativity into animating videos during my
                  free time. This not only keeps my mind fresh but also fuels my
                  ability to think creatively.
                  
                </p>
              </div>
            </div>
            <div className={styles.description}>
               <Line />
               <span className={styles.page_no}>
                <p>02/</p>
                <p>/03</p>
              </span>
              <div className={styles.text_area}>
              <h1>Skills</h1>
                 <Lottie className={styles.lottie_animation} animationData={A1} />
                 <div className={styles.Model_wrapper}>
                     <Model>
                        <Truck position={[0, -100, 0]}/>
                      </Model>
                 </div>
              </div>
            </div>
            <ReactiveForm/>
          </div>
        </ScrollToTop>
      </Curve>
    </>
  );
};

export default Aboutme;

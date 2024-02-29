import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./style.css";
import Curve from "../../Animation/Page/Curve";
import ScrollToTop from "../../assets/ScrollToTop/ScrollToTop";
import Navbar from "../../assets/Navbar/Navbar";

const Project = () => {
  const [itemsInstanceArr, setItemsInstanceArr] = useState([
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description:
        "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g",
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description:
        "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g",
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description:
        "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g",
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description:
        "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g",
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description:
        "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g",
    },

  ]);
  const refArray = itemsInstanceArr.map(() => useRef());

  return (
    <Curve>
      <ScrollToTop>
        <Navbar />
        <div className="project_body">
          <main className="main">
            <div className="type" data-type-transition aria-hidden="true">
              <div className="type" data-type-transition aria-hidden="true">
                <div className="type__line">bonjour bonjour bonjour</div>
                <div className="type__line">attrayant attrayant attrayant</div>
                <div className="type__line">charmante charmante charmante</div>
                <div className="type__line">rosetta rosetta rosetta</div>
                <div className="type__line">tendresse tendresse tendresse</div>
                <div className="type__line">chatoyer chatoyer chatoyer</div>
                <div className="type__line">bonjour bonjour bonjour</div>
                <div className="type__line">attrayant attrayant attrayant</div>
                <div className="type__line">charmante charmante charmante</div>
                <div className="type__line">rosetta rosetta rosetta</div>
                <div className="type__line">tendresse tendresse tendresse</div>
                <div className="type__line">charmante charmante charmante</div>
                <div className="type__line">rosetta rosetta rosetta</div>
                <div className="type__line">tendresse tendresse tendresse</div>
              </div>
            </div>
            <section className="item-wrap">
              {itemsInstanceArr.map(({ title, intro }, index) => {
                const isInView = useInView(refArray[index], {
                  margin: "-400px",
                });
                const [screen, setScreen] = useState(window.innerWidth);
                useEffect(() => {
                  const updateScreenWidth = () => {
                    if (screen > 700) {
                      (async () => {
                        const Lenis = (await import("@studio-freight/lenis"))
                          .default;
                        const lenis = new Lenis({
                          lerp: 0.05,
                          duration: 0.4,
                          wheelMultiplier: 3,
                          // infinite: true,
                        });
                        function raf(time) {
                          lenis.raf(time);
                          requestAnimationFrame(raf);
                        }
                        requestAnimationFrame(raf);
                      })();
                    }
                  };
                  window.addEventListener("resize", updateScreenWidth);
                  updateScreenWidth();
                  return () => {
                    window.removeEventListener("resize", updateScreenWidth);
                  };
                }, []);
                const {scrollYProgress} = useScroll({
                  target: refArray[index],
                  offset:["start start", "end start"]
                });
              
                const yBg = useTransform(scrollYProgress, [0,1] , ["500px","100px"])
                const yText = useTransform(scrollYProgress, [0,1] , ["0px","-190px"])
                const newIndex = index % itemsInstanceArr.length; // Circular remapping
                return (
                  <motion.figure
                    ref={refArray[index]}
                    key={index}
                    className="item"
                    data-article={`article-${index + 1}`}
                  >
                    <motion.img
                      initial={{scale:.9, opacity: 0.3 }}
                      animate={isInView ? {scale:1, opacity: 1 } : {}}
                      transition={{ type: "spring", duration: 1 }}
                      className="item__img"
                      style={{height:yBg, background:"#000"}}
                      src={`img/${index + 1}.jpeg`}
                      alt={`Some title ${index + 1}`}
                    />
                  <span className="item__caption-title">
                     <motion.h1 initial={{y:150}} animate={isInView ? {y:0 } : {}} transition={{duration:.5}} >{title}</motion.h1>
                  </span>
                  <motion.span style={{y:yText}} className="item__caption-description1">
                     <motion.p initial={{y:50}} animate={isInView ? {y:0 } : {}} transition={{duration:.5,delay:.5}} >{intro}</motion.p>
                  </motion.span>
                  <motion.span style={{y:yText}} className="item__caption-description2">
                     <motion.p initial={{y:50}} animate={isInView ? {y:0 } : {}} transition={{duration:.5,delay:.5}} >{intro}</motion.p>
                  </motion.span>
                  <motion.span style={{y:yText}} className="item__caption-description3">
                     <motion.p initial={{y:50}} animate={isInView ? {y:0 } : {}} transition={{duration:.5,delay:.5}} >2024.04.03</motion.p>
                  </motion.span>

                  </motion.figure>
                );
              })}
            </section>
          </main>
        </div>
      </ScrollToTop>
    </Curve>
  );
};

export default Project;

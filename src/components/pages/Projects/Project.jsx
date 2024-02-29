import {useState , useEffect} from 'react';
import {motion} from "framer-motion"
import "./style.css"
import Curve from '../../Animation/Page/Curve';
import ScrollToTop from '../../assets/ScrollToTop/ScrollToTop';
import Navbar from '../../assets/Navbar/Navbar';

const Project = () => {
  const [itemsInstanceArr, setItemsInstanceArr] = useState([
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description: "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g"
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description: "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g"
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description: "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g"
    },
    {
      title: "Admin sudo",
      intro: "Devantro ksdknsg sadgjnsdgiu9",
      description: "sdlkjghs hdgsdkgnousdhgs dgsdnghisudg sdgksg wlrituqrhgergeroghdug rg regwgeorihgre g ihadgadpjfgh9ae rgaej pddfh dfoigudfh g"
    },
  ]);
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
            wheelMultiplier: 3
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
  return (
    <Curve>
      <ScrollToTop>
    <Navbar/>
    <div className="project_body">
        <main className='main'>
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
          {/* <section className="item-wrap">
            {itemsInstanceArr.map(({ title, intro }, index) => (
              <motion.figure initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{type:"spring", duration:1,delay:.5}} key={index} className="item" data-article={`article-${index + 1}`}>
                <img className="item__img" src={`img/${index + 1}.jpeg`} alt={`Some title ${index + 1}`} />
                <figcaption className="item__caption">
                  <h2 className="item__caption-title">{`0${index + 1} &mdash; ${title}`}</h2>
                  <p className="item__caption-description">{intro}</p>
                </figcaption>
              </motion.figure>
            ))}
          </section> */}
        </main>
    </div>
    </ScrollToTop>
    </Curve>
  );
}

export default Project;

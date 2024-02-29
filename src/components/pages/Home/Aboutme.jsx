import {useRef} from 'react'
import { useInView} from 'framer-motion';
import {Link} from 'react-router-dom'
import styles from './style.Dash.module.scss';
import {Line,Rounded, RollingText} from '../../Animation/Line_Button/Line'

const Aboutme = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true});
  return (
     <>
       <div ref={ref} className={styles.About_wrapper}>
         <div className={styles.About_title}>
           <Line/>
           <span className={styles.span_links}>
             <h1>About</h1>
             <span className={styles.links}>
             <RollingText link="mailto:vickytaj6459@gmail.com" text="Email" st="EM" />/
             <RollingText link="https://www.instagram.com/vicky__taj/" text="Instagram" st="IN"/>/
             <RollingText link="https://github.com/Admin12121" text="Github"  st="GH"/>/
             <RollingText link="https://www.linkedin.com/in/vickytajpuriya/" text="Linkedin" st="LI"/>/
             </span>
           </span>
         </div>
         <div className={styles.About_text}>
           <span>
             <p>
               <span>HELLO, MY NAME IS VICKY TAJPURIYA,</span> <br/> I'M A JUNIOR FULL STACK DEVELOPER WITH +1Y EXPERIENCE.
             </p>
           </span>
           <span >
             <img src="orginal.png" alt="" />
             <div className={styles.sliderContainer}>
             </div>
           </span>

           <span>
             <Link to="/about">
           <div >
               <Rounded isInView={isInView}>
                   <p>Learn</p>
                   <p>More</p>
                   <span>
                      <svg width="3rem" height="3rem" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" fill="white"></path></svg>
                   </span>
               </Rounded>
           </div>
             </Link>
           </span>
         </div>
       </div>
     </>
  );
};

export default Aboutme;

import React from 'react'
import './Footer.scss'

import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="top">
            <h1 className="Main-box-letter">
                Let's Build and Scale it!
            </h1>
            <div className="contact_us">
                <span>Bikitaj1235@gmil.com </span>
                <motion.button  whileTap={{scale:0.93}} transition={{type:"spring",stiffness: 300}}>CONTACT US ↗</motion.button>
            </div>
        </div>
        <div className="button">
            <div className="logo">
                Vicky.
            </div>
            <div className="links_ui">
                <a href="">Services</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>

            <div className="scoial-icons">
                
            </div>

        </div>
      </div>
    </>
  )
}

export default Footer

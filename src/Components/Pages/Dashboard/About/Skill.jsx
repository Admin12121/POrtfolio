import React from 'react'
import './skill.scss'
import { SiNextdotjs,SiDjango,SiRedux,SiThreedotjs } from "react-icons/si";
import { FaSass,FaReact,FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const Skill = () => {
  return (
    <>
      <div className="skill_grid">
        <div className="Skill_text">
        </div>
        <div className="skill_desc">
            <div className="skill_box">
                <div className="box_grid">
                </div>
            </div>
            <div className="skill_box">
                <div className="box_grid"></div>
            </div>
            <div className="skill_box">
                <div className="box_grid">
                  <p>My Skills </p>
                  <div className="skills">
                    <span className='skills_logo'><IoLogoJavascript/></span>
                    <span className='skills_logo'><FaPython/></span>
                    <span className='skills_logo'><FaReact/></span>
                    <span className='skills_logo'><SiDjango/></span>
                    <span className='skills_logo'><SiNextdotjs/></span>
                    <span className='skills_logo'><SiRedux/></span>
                    <span className='skills_logo'><SiThreedotjs/></span>
                    <span className='skills_logo'><FaSass/></span>
                  </div>
                </div>
            </div>
            <div className="skill_box">
                <div className="box_grid"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Skill

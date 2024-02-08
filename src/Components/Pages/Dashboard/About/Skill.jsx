import React from 'react'
import './skill.scss'
import { SiThreedotjs } from "react-icons/si";
const Skill = () => {
  return (
    <>
      <div className="skill_grid">
        <div className="Skill_text">
        </div>
        <div className="skill_desc">
            <div className="skill_box">
                <div className="box_grid">
                <SiThreedotjs/>
                </div>
            </div>
            <div className="skill_box">
                <div className="box_grid"></div>
            </div>
            <div className="skill_box">
                <div className="box_grid"></div>
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

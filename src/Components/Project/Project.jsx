import React from "react";
import "./pro.css";

const Project = () => {
    const data = [
        {
            img:"https://i.pinimg.com/564x/ac/3f/0a/ac3f0aa3f621d41fabff543d7617e23b.jpg",
            title:'E-commerse Daraz'
        },
        {
            img:"https://i.pinimg.com/736x/75/a6/60/75a660dd8de7288464fdf4e0e70b2a46.jpg",
            title:'3d Portfolio'
        },
        {
            img:"https://i.pinimg.com/564x/a0/9d/dc/a09ddce6d8c250e4c256279b751b4180.jpg",
            title:'E-Learning PLatform'
        },
        {
            img:"https://i.pinimg.com/564x/f4/67/6c/f4676ce41be2d23260f7482d82c5d953.jpg",
            title:'Job Portal'
        },
        {
            img:"https://i.pinimg.com/564x/4f/76/1b/4f761b69525e91b92c705e65d367866c.jpg",
            title:'Admin Dashboard'
        },
    ]
  return (
    <>
      <div className="project_wrapper">
        {data.map(({img,title},index)=>(
        <div key={index} className="work_card">
          <div className="work_card_headerL flexc">
            <div className="headerL_winDots" style={{background: '#fc5B52;'}}></div>
            <div className="headerL_winDots" style={{background: '#fffb76;'}}></div>
            <div className="headerL_winDots" style={{background: '#71FCAA'}}></div>
          </div>
          <div className="work_card_imgCon">
            <div className="work_card_imgOverlay">
              <div className="work_card_imgOverlay_info flexc">
                <div className="imgOverlay_text">{title}</div>
                <div className="imgOverlay_line"></div>
                <div className="imgOverlay_count">
                  01
                  <br />
                  <i className="far fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
            <img src={img} alt="" />
          </div>
          <div className="work_card_footerL"></div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Project;

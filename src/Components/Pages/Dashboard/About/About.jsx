import React, { useState, useEffect } from "react"
import "./About.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Skill from "./Skill"
const About = () => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Admin12121")
        if (response.ok) {
          const data = await response.json()
          setUserData(data)
        } else {
          console.error("Error fetching data:", response.statusText)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])
  
  const Data = [
    {
      title: "About me"
    },
    {
      img: "https://media.licdn.com/dms/image/D5603AQGjgJUqBct-pw/profile-displayphoto-shrink_400_400/0/1703576988996?e=1712188800&v=beta&t=0Bht0XZThag7zMtMML6QIjEkotVpTfV2HRjE1O2KOZ0",
      platform: "Linkedin",
      title: "",
      desc: "Vicky",
      icon: <FaLinkedin />
    },
    {
      comp: <Skill/>
    },
    {
      img: userData ? userData.avatar_url : "",
      platform: "Github",
      followers: userData ? userData.followers : "",
      desc: userData ? userData.login : "",
      icon: <FaGithub />
    }
  ]

  const handleMouseMove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  const Text = ({ title }) => {
    return (
      <svg viewBox="0 0 120 100">
        <filter id="handDrawn">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="1" result="color-turbulence" />
          <feDisplacementMap in2="color-turbulence" in="SourceGraphic" result="color-dirtorted" scale="3" xChannelSelector="R" yChannelSelector="G" />

          <feMorphology operator="dilate" radius=".25" in="SourceAlpha" result="thin-thickened" />
          <feComposite in="thin-thickened" in2="sourceGraphic" operator="xor" result="thin-outline" />
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="1" seed="2" result="thin-turbulence" />
          <feDisplacementMap in2="thin-turbulence" in="thin-outline" result="thin-dirtorted" scale="5" xChannelSelector="R" yChannelSelector="G" />

          <feMorphology operator="dilate" radius=".25" in="SourceAlpha" result="thick-thickened" />
          <feComposite in="thick-thickened" in2="sourceGraphic" operator="xor" result="thick-outline-thin" />
          <feMorphology operator="dilate" radius=".5" in="thick-outline-thin" result="thick-thickened-twice" />
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="1" seed="3" result="thick-turbulence" />
          <feDisplacementMap in2="thick-turbulence" in="thick-thickened-twice" result="thick-dirtorted" scale="2" xChannelSelector="R" yChannelSelector="G" />

          <feMerge result="complete">
            <feMergeNode in="thin-dirtorted" />
            <feMergeNode in="color-dirtorted" />
            <feMergeNode in="thick-dirtorted" />
          </feMerge>
        </filter>
        <text>{title}</text>
      </svg>
    )
  }
  return (
    <>
      <div className="About_Section">
        <div id="cards" onMouseMove={handleMouseMove}>
          {Data.map(({ img, title, desc, followers, icon, platform, comp }, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                {comp && comp}
                {img && (
                  <div className="card-image">
                    <span>
                      <img src={img} alt="" />
                      <span>
                        <p>
                          <span>{icon} </span>
                          {platform}
                        </p>
                        <p>@{desc}</p>
                        <a href="https://github.com/Admin12121">
                          <button>Follow {followers}</button>
                        </a>
                      </span>
                    </span>
                  </div>
                )}
                {title && (
                  <div className="card-ifo-wrapper">
                    <Text title={title} />
                    <div className="card-info">
                      <p>
                        Hello! I'm Vicky Tajpuriy, a passionate full-stack developer with over a year of hands-on experience. My journey in web development has
                        been fueled by a love for coding and a deep understanding of technologies like JavaScript, React, Next.js, RESTful APIs, Python, Django,
                        and SCSS. Coding isn't just a job for me; it's a passion. I find joy in crafting elegant code and translating ideas into functional,
                        beautiful websites and web apps. My commitment to staying updated with the latest trends and technologies ensures that my work is at the
                        forefront of innovation.Outside of the coding realm, I channel my creativity into making animated videos and indulging in the art of drawing.
                        These activities not only serve as a creative outlet but also contribute to keeping my mind fresh and open to new ideas. </p>
                      <div className="card-info-title"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {RollingHeader, Rounded, RollingText} from "../../Animation/Line_Button/Line";
import "./Contact.css";

const ReactiveForm = () => {
  const reff = useRef();
  const isInVieww = useInView(reff, { once: true});

  const [display, setDisplay] = useState(false);
  const constraintsRef = useRef(null)
  const question = [
    {
      question: "> To start, could you give us your email?",
      content: "Enter Email :",
      type: "email",
    },
    {
      question: "> Awesome! And what's your name?",
      content: "Enter name:",
      type: "text",
    },
    {
      question: "> Perfect, and how can I help you?",
      content: "Enter description:",
      type: "text",
    },
    {
      question: "> All set!",
      content: "Press `Y` to Submit or `N` to Exit ",
      type: "text",
    },
  ];

  const message = [
    {
      command: "help || h ",
      msg: "Provides Help information for Form commands.",
    },
    {
      command: "reset || r",
      msg: "Reset the  form to initial state.",
    },
  ];

  const [query, setQuery] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specialCommand, setSpecialCommand] = useState(false);
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const [isValid, setIsValid] = useState(true);
  const [err, setErr] = useState(["", "", "", ""]);
  const [er, seter] = useState(false);

  useEffect(() => {
    if (currentIndex === 0) {
      const email = query[0];

      const validateEmail = (value) => {
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/;
        return emailRegex.test(value);
      };

      setIsValid(validateEmail(email));
    }
  }, [query[0], currentIndex]);

  useEffect(()=>{
    if(!display){
      inputRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.value = "";
        }
      });
      setQuery(["", "", "", ""]);
      setCurrentIndex(0);
      seter(false);
    }
  },[display])
  const handleInputChange = (index, value) => {
    const newQueries = [...query];
    newQueries[index] = value;
    setQuery(newQueries);
  };

  const handleEnterKey = (index, event) => {
    if (event.key === "Enter") {
      if (
        query[index].toLowerCase() === "help" ||
        query[index].toLowerCase() === "h"
      ) {
        // Handle the special command
        setSpecialCommand(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (index === 0 && !isValid) {
        // Email validation failed
        if (inputRefs.current[index]) {
          inputRefs.current[index].current.value = "";
        }
        setQuery((prevQueries) => [
          "",
          prevQueries[1],
          prevQueries[2],
          "", // Set only the last query to an empty string on invalid input
        ]);
        seter(true);
        setErr(["Invalid Email 🫨", "", "", ""]);
      } else if (index === 0 && isValid) {
        seter(false);
        setErr(["", "", "", ""]);
        setSpecialCommand(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (query[index] === "r" || query[index] === "reset") {
        // Reset the form
        inputRefs.current.forEach((ref) => {
          if (ref.current) {
            ref.current.value = "";
          }
        });
        setQuery(["", "", "", ""]);
        setCurrentIndex(0);
        setSpecialCommand(false);
      } else if (index === question.length - 1) {
        // Last question
        if (query[question.length - 1] === "N") {
          inputRefs.current.forEach((ref) => {
            if (ref.current) {
              ref.current.value = "";
            }
          });
          setQuery(["", "", "", ""]);
          setCurrentIndex(0);
          seter(false);
        } else if (query[question.length - 1] === "Y") {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setErr(["", "", "", ""]);
        } else {
          if (inputRefs.current[index]) {
            inputRefs.current[index].current.value = "";
          }
          setQuery((prevQueries) => [
            prevQueries[0],
            prevQueries[1],
            prevQueries[2],
            "", // Set only the last query to an empty string on invalid input
          ]);
          seter(true);
          setErr(["", "", "", "Invalid Input 😵 "]);
        }
      } else if(query[index].toLowerCase() === ""){
        seter(true);
        setErr((prevErr) => {
          const newErr = [...prevErr];
          newErr[index] = "Field cant be Empty 🐧";
          return newErr;
        });
      } else {
        seter(false);
        setSpecialCommand(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };
  const variants = {
    initial: {
     width: "100%",
     height : '150%',
     border : '1px solid transparent'
    },
    animate: {
      width: "95%",
      height: "90%",
      border : '1px solid  #ffffff65 ',
      y: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { once: true});

  return (
    <motion.div ref={reff} id="form">
      <motion.div
        className="form_border"
        ref={ref}
        variants={variants}
        initial="initial"
        animate={
          isInView
            ? isInView && "animate"
            : {
                width: "100%",
                height: "150%",
                transition: {
                  type: "spring",
                  stiffness: 100,
                  duration: 1,
                },
              }
        }
      >
      <motion.div ref={constraintsRef}  className="contact_page">
        <p>GOT A PROJECT IN MIND</p>
        <RollingHeader text="LET'S CONNECT" />
        <span onClick={()=>setDisplay(true)}>
          <Rounded isInView={isInVieww}>
            <p>WRITE A</p>
            <p>MESSAGE</p>
            <span>
              <svg
                width="3rem"
                height="3rem"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </Rounded>
        </span>
      </motion.div>
        <motion.div drag dragConstraints={constraintsRef} initial={{scale: display ? 1 : 0}} animate={{scale:display ? 1 : 0}} transition={{ease: [0.76, 0, 0.24, 1], duration: .75}} className="dModelForm" style={{display: `${display ? 'flex': 'none'}`}} >
          <div className="form-react">
            <div className="form_header">
              <span className="form_header_dot">
                <p onClick={()=>setDisplay(false)}>🔴<img src="close.png" alt="" /></p>
                <p>🟡<img src="minimize.png" alt="" /></p>
                <p>🟢</p>
                </span>
              <span>contact@tajpuriya.dev</span>
              <span></span>
            </div>

            <span className={`form_span`}>
              <p>Hey there, We're excited to link 🔗</p>
              <p>
                --------------------------------------------------------------------------------------------------
              </p>
              {question.map(({ question, content, type }, index) => (
                <span
                  key={index}
                  className={`${currentIndex > index ? "react-completed" : ""}`}
                >
                  {(currentIndex >= index || query[index]) && (
                    <>
                      <p>{question}</p>
                      <input
                        type={type}
                        className={`react-input`}
                        style={{
                          display: `${currentIndex > index ? "none" : ""}`,
                        }}
                        onChange={(el) =>
                          handleInputChange(index, el.target.value)
                        }
                        onKeyPress={(event) => handleEnterKey(index, event)}
                        disabled={currentIndex > index}
                        ref={inputRefs.current[index]}
                        autoFocus={currentIndex === index && currentIndex >= 1}
                      />
                      <span
                        className="form_content"
                        style={{
                          color: `${
                            currentIndex > index ? "mediumslateblue" : ""
                          }`,
                        }}
                      >
                        <span>{currentIndex > index ? "~" : "~"} </span>
                        <span
                          style={{
                            color: `${er ? "orange" : "white"}`,
                            fontSize: "15px",
                          }}
                        >
                          {er
                            ? err[index]
                            : currentIndex <= index && content}
                        </span>
                        {query[index]}
                      </span>
                      <span
                        className="typed-cursor"
                        style={{
                          display: `${currentIndex > index ? "none" : ""}`,
                        }}
                      >
                        &#9646;
                      </span>
                      {specialCommand && index === currentIndex - 1 && (
                        <>
                          {message.map(({ command, msg }, index) => (
                            <p style={{ color: "#fff" }} key={index}>
                              {command} : {msg}
                            </p>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </span>
              ))}
              {currentIndex === question.length && !err.includes("Invalid") && (
                <>
                  <p style={{ color: "#fff" }}>Submitted successfully! 😎</p>
                  <p style={{ color: "#fff" }}>
                    Check My New
                    <a
                      style={{
                        color: "mediumslateblue",
                        cursor: "pointer",
                        TextDecoder: "underline",
                      }}
                    >
                      Projects
                    </a>
                    🗃️
                  </p>
                </>
              )}
            </span>
          </div>
        </motion.div>
      </motion.div>
      <div className="social_links">
          <span  className="social_link_text">FEEL FREE TO CONNECT ME ON SOCIAL</span>
          <span>
             <RollingText link="mailto:vickytaj6459@gmail.com" text="Email" st="EM" />
             <RollingText link="https://www.instagram.com/vicky__taj/" text="Instagram" st="IN"/>
             <RollingText link="https://github.com/Admin12121" text="Github"  st="GH"/>
             <RollingText link="https://www.linkedin.com/in/vickytajpuriya/" text="Linkedin" st="LI"/>
             </span>
        </div>
    </motion.div>
  );
};

export default ReactiveForm;


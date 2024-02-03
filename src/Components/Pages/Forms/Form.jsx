{/*
import React, { useState, useEffect, useRef } from "react";
import { LuCheckCircle } from "react-icons/lu";
import "./form.css";

const ReactiveForm = () => {
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
  ];

  const [query, setQuery] = useState(["", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    if (currentIndex < question.length) {
      inputRefs.current[currentIndex].current.focus();
    }
  }, [currentIndex]);

  const handleInputChange = (index, value) => {
    const newQueries = [...query];
    newQueries[index] = value;
    setQuery(newQueries);
  };

  const handleEnterKey = (index, event) => {
    if (event.key === "Enter") {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div id="form">
      <div className="form-react">
        <div className="form_header">
          <span className="form_header_dot">🔴🟠🟢</span>
          <span>contact@tajpuriya.dev</span>
          <span></span>
        </div>

        <span className={`form_span`}>
          <p>Hey there, We're excited to link 🔗</p>
          <p>--------------------------------------------------------------------------------------------------</p>
          {question.map(({ question, content, type }, index) => (
            <span key={index} className={`${currentIndex > index ? 'react-completed' : ""}`}>
              {(currentIndex >= index || query[index]) && (
                <>
                  <p>{question}</p>
                  <input
                    type={type}
                    className={`react-input`}
                    style={{ display: `${currentIndex > index ? 'none' : ""}` }}
                    onChange={(el) => handleInputChange(index, el.target.value)}
                    onKeyPress={(event) => handleEnterKey(index, event)}
                    disabled={currentIndex > index}
                    ref={inputRefs.current[index]}
                    autoFocus={currentIndex === index}
                  />
                  <span className="form_content" style={{color:`${currentIndex > index ? 'mediumslateblue' : ""}`}}>                    
                  <span >{currentIndex > index ? '~': "~"} </span>
                    {currentIndex <= index && content}
                    {query[index]}
                  </span>
                  <span className="typed-cursor" style={{ display: `${currentIndex > index ? 'none' : ""}` }}>&#9646;</span>
                </>
              )}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ReactiveForm;
*/}

import React, { useState, useEffect, useRef } from "react";
import { LuCheckCircle } from "react-icons/lu";
import "./form.css";

const ReactiveForm = () => {
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
  ];

  const message =[
    {
      command: "help || -h ",
      msg: 'Provides Help information for Form commands.'
    },
    {
      command: 'reset || -r',
      msg: 'Reset the  form to initial state.'
    },

  ]
  const [query, setQuery] = useState(["", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specialCommand, setSpecialCommand] = useState(false);
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    if (currentIndex < question.length) {
      inputRefs.current[currentIndex].current.focus();
    }
  }, [currentIndex]);

  const handleInputChange = (index, value) => {
    const newQueries = [...query];
    newQueries[index] = value;
    setQuery(newQueries);
  };

  const handleEnterKey = (index, event) => {
    if (event.key === "Enter") {
      if (query[index].toLowerCase() === "help" || query[index].toLowerCase() === "-h") {
        // Handle the special command
        setSpecialCommand(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setSpecialCommand(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  return (
    <div id="form">
      <div className="form-react">
        <div className="form_header">
          <span className="form_header_dot">🔴🟠🟢</span>
          <span>contact@tajpuriya.dev</span>
          <span></span>
        </div>

        <span className={`form_span`}>
          <p>Hey there, We're excited to link 🔗</p>
          <p>--------------------------------------------------------------------------------------------------</p>
          {question.map(({ question, content, type }, index) => (
            <span key={index} className={`${currentIndex > index ? 'react-completed' : ""}`}>
              {(currentIndex >= index || query[index]) && (
                <>
                  <p>{question}</p>
                  <input
                    type={type}
                    className={`react-input`}
                    style={{ display: `${currentIndex > index ? 'none' : ""}` }}
                    onChange={(el) => handleInputChange(index, el.target.value)}
                    onKeyPress={(event) => handleEnterKey(index, event)}
                    disabled={currentIndex > index}
                    ref={inputRefs.current[index]}
                    autoFocus={currentIndex === index}
                  />
                  <span className="form_content" style={{ color: `${currentIndex > index ? 'mediumslateblue' : ""}` }}>
                    <span >{currentIndex > index ? '~' : "~"} </span>
                    {currentIndex <= index && content}
                    {query[index]}
                  </span>
                  <span className="typed-cursor" style={{ display: `${currentIndex > index ? 'none' : ""}` }}>&#9646;</span>
                  {specialCommand && index === currentIndex - 1 && (
                    <>
                    {message.map(({command, msg},index)=>(
                      <p style={{color:"#fff"}} key={index}>{command} : {msg}</p>
                    ))}
                    </>
                  )
                  }
                </>
              )}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ReactiveForm;

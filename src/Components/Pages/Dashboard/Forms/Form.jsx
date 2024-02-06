{/*import React, { useState, useEffect, useRef } from "react";
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
    {
      question: "> All set!",
      content: "Press `Y` to Comfirm or `N` to Exit ",
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
  const [query, setQuery] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specialCommand, setSpecialCommand] = useState(false);
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const [err, seterr] = useState("")
  useEffect(() => {
    if (currentIndex < question.length) {
      if (currentIndex >= 1 ){
        console.log(currentIndex, inputRefs)
         inputRefs.current[currentIndex].current.focus();
      }
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
      }
      if (query[index] === "r" || query[index] === 'reset') {
        // Reset the form
        setQuery(["", "", "",""]);
        setCurrentIndex(0);
      }
      if (query[question.length - 1]) {
        // Reset the form
        if(query[question.length - 1] === "N"){
          setQuery(["", "", "", ""]);
          setCurrentIndex(0);
        }
        if(query[question.length - 1] === "Y"){
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
        else{
          seterr("Invalid Input");
        }
      }
       else {
        setSpecialCommand(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  
  return (
    <div id="form">
      <div className="dModelForm">
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
                    autoFocus={currentIndex === index && currentIndex >= 1}
                  />
                  <span className="form_content" style={{ color: `${currentIndex > index ? 'mediumslateblue' : ""}` }}>
                    <span >{currentIndex > index ? '~' : "~"} </span>
                    {currentIndex <= index && content}
                    {err.length > 0 ? err : query[index] }
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
          {currentIndex === question.length && (
            <>
              <p style={{ color: "#fff" }}>Submitted successfully! 😎</p>
            </>
          )}
        </span>
      </div>
      </div>
    </div>
  );
};

export default ReactiveForm;
*/}

import React, { useState, useEffect, useRef } from "react";
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
    {
      question: "> All set!",
      content: "Press `Y` to Confirm or `N` to Exit ",
      type: "text",
    },
  ];

  const message = [
    {
      command: "help || -h ",
      msg: "Provides Help information for Form commands.",
    },
    {
      command: "reset || -r",
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
  const [err, setErr] = useState("");

  useEffect(() => {
    if (currentIndex < question.length) {
      if (currentIndex >= 1) {
        inputRefs.current[currentIndex].current.focus();
      }
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
      } else if (query[index] === "r" || query[index] === "reset") {
        // Reset the form
        setQuery(["", "", "", ""]);
        setCurrentIndex(0);
        setSpecialCommand(false);
      } else if (index === question.length - 1) {
        // Last question
        if (query[question.length - 1] === "N") {
          setQuery(["", "", "", ""]);
          setCurrentIndex(0);
        } else if (query[question.length - 1] === "Y") {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setErr("Invalid Input");
        }
      } else {
        setSpecialCommand(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  return (
    <div id="form">
      <div className="dModelForm">
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
              <span key={index} className={`${currentIndex > index ? "react-completed" : ""}`}>
                {(currentIndex >= index || query[index]) && (
                  <>
                    <p>{question}</p>
                    <input
                      type={type}
                      className={`react-input`}
                      style={{ display: `${currentIndex > index ? "none" : ""}` }}
                      onChange={(el) => handleInputChange(index, el.target.value)}
                      onKeyPress={(event) => handleEnterKey(index, event)}
                      disabled={currentIndex > index}
                      ref={inputRefs.current[index]}
                      autoFocus={currentIndex === index && currentIndex >= 1}
                    />
                    <span className="form_content" style={{ color: `${currentIndex > index ? "mediumslateblue" : ""}` }}>
                      <span>{currentIndex > index ? "~" : "~"} </span>
                      {currentIndex <= index && content}
                      {err.length > 0 ? err : query[index]}
                    </span>
                    <span className="typed-cursor" style={{ display: `${currentIndex > index ? "none" : ""}` }}>
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
            {currentIndex === question.length && !err && (
              <>
                <p style={{ color: "#fff" }}>Submitted successfully! 😎</p>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReactiveForm;

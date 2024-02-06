{/*
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
  const [err, setErr] = useState("","","","");
  const [er, seter] = useState(false)


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
      if (query[index].toLowerCase() === "help" || query[index].toLowerCase() === "h") {
        // Handle the special command
        setSpecialCommand(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if(query[0] ){
          const email = query[0]
          const validateEmail = (value) => {
            // Regular expression for a simple email validation
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(value);
          };
          setIsValid(validateEmail(email));
          if(!isValid){
            if (inputRefs.current[currentIndex]) {
              inputRefs.current[currentIndex].current.value = "";
            }
            setQuery((prevQueries) => [
              "",
              prevQueries[1],
              prevQueries[2],
              "", // Set only the last query to an empty string on invalid input
            ]);
            seter(true)
            setErr(["Invalid Email","","",""]);
          }else{
            setSpecialCommand(false);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
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
          setErr("")
        } else {
          if (inputRefs.current[currentIndex]) {
            inputRefs.current[currentIndex].current.value = "";
          }
          setQuery((prevQueries) => [
            prevQueries[0],
            prevQueries[1],
            prevQueries[2],
            "", // Set only the last query to an empty string on invalid input
          ]);
          seter(true)
          setErr(["","","","Invalid Input "]);
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
                      <span style={{color:`${er ? "orange": "white"}` , fontSize:"15px"}}> {er ? err[index]  : currentIndex <= index && content }  </span>
                      {query[index]}
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
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/;
        return emailRegex.test(value);
      };

      setIsValid(validateEmail(email));
    }
  }, [query[0], currentIndex]);

  const handleInputChange = (index, value) => {
    const newQueries = [...query];
    newQueries[index] = value;
    setQuery(newQueries);
  };

  const handleEnterKey = (index, event) => {
    if (event.key === "Enter") {
      if (query[index].toLowerCase() === "help" || query[index].toLowerCase() === "h") {
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
      }else if (index === 0 && isValid){
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
                      <span style={{ color: `${er ? "orange" : "white"}`, fontSize: "15px" }}>
                        {" "}
                        {er ? err[index] : currentIndex <= index && content}{" "}
                      </span>
                      {query[index]}
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
            {currentIndex === question.length && !err.includes("Invalid") && (
              <>
                <p style={{ color: "#fff" }}>Submitted successfully! 😎</p>
                <p style={{ color: "#fff" }}>Check My New <a style={{color:"mediumslateblue",cursor:"pointer" , TextDecoder:'underline'}}>Projects</a> 🗃️</p>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReactiveForm;

import React from "react"
import styles from "./bubble.module.css"

const Example = ({text}) => {
    return (
      <div className="text_area">
        <BubleText text={text}/>
      </div>
    );
  };
  
const BubleText = ({text}) => {
  return (
    <>
      <h2 className="main_text">
        {text.split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </>
  )
}

export default Example;

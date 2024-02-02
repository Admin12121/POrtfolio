import React, { useEffect, useState } from 'react';

const Ring = () => {
  const [rotatedText, setRotatedText] = useState('');

  useEffect(() => {
    const originalText = 'Vicky Tajpuriya - Creative Web Developer - ';
    setRotatedText(
      originalText
        .split('')
        .map((char, i) => (
          <span key={i} style={{ transform: `rotate(${i * 8.3}deg)` }}>
            {char}
          </span>
        ))
    );
  }, []);

  return (
    <>
      <div className="circle">
        <div className="ui_text">
          <p>{rotatedText}</p>
        </div>
          <span id='text_center'>↗</span>
      </div>
    </>
  );
};

export default Ring;

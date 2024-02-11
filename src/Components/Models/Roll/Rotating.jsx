import React, { useState } from 'react';
import './Roll.css'; // Import your CSS file

const RollingText = ({ text, link }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    setIsPlaying(false);
  };

  const renderLetters = () => {
    return text.split('').map((letter, index) => (
      <span key={index} className="letter">
        {letter.trim() === '' ? '\xa0' : letter}
      </span>
    ));
  };

  return (
    <a
      className={`rolling-text ${isPlaying ? 'play' : ''}`}
      target='_blank'
      href={link}
      onMouseOver={handleMouseOver}
    >
      <div className="block">{renderLetters()}</div>
      <div className="block">{renderLetters()}</div>
    </a>
  );
};

export default RollingText;

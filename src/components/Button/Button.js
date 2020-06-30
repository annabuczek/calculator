import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { className, content, handleButtonClick, value } = props;
  return (
    <button
      className={`button ${className}`}
      onClick={handleButtonClick}
      value={value}
    >
      {content}
    </button>
  );
};

export default Button;

import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    className,
    content,
    handleButtonClick,
    value,
    action,
  } = props;
  return (
    <button
      className={`button ${className}`}
      onClick={handleButtonClick}
      value={value}
      action={action}
    >
      {content}
    </button>
  );
};

export default Button;

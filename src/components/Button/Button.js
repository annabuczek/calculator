import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { className, content } = props;
  return <button className={`button ${className}`}>{content}</button>;
};

export default Button;

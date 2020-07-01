import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { input, finalInput } = props;
  return <div className="input">{input || finalInput}</div>;
};

export default Input;

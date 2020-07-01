import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { input, finalInput } = props;
  return <div className="input">{input || finalInput}</div>;
};

Input.propTypes = {
  input: PropTypes.string.isRequired,
  finalInput: PropTypes.string.isRequired,
};

export default Input;

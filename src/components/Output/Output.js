import React from 'react';
import PropTypes from 'prop-types';
import './Output.scss';

const Output = (props) => {
  return <div className="output">{props.output}</div>;
};

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Output from '../Output/Output';
import './Header.scss';

const Header = (props) => {
  const { input, output, finalInput } = props;
  return (
    <div className="header">
      <Input input={input} finalInput={finalInput} />
      <Output output={output} />
    </div>
  );
};

Header.propTypes = {
  input: PropTypes.string.isRequired,
  finalInput: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
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

export default Header;

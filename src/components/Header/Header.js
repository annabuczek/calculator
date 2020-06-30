import React from 'react';
import Input from '../Input/Input';
import Output from '../Output/Output';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <Input />
      <Output />
    </div>
  );
};

export default Header;

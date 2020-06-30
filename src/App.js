import React, { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div className="calculator">
      <Header input={input} output={output} />
      <Keyboard handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setPrevNum] = useState('');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    const action = e.target.attributes.action.value;
    console.log(action);
    console.log(value);

    switch (action) {
      case 'num':
        if (currNum === '0') {
          setCurrNum(value);
        } else {
          setCurrNum(currNum + value);
        }
        if (!!input.match(/(\s|^)0$/)) {
          setInput(input.replace(/0$/, value));
        } else {
          setInput(input + value);
        }
        break;
      case 'comma':
        if (!currNum) {
          setCurrNum('0' + value);
          setInput(input + '0' + value);
        } else if (currNum.indexOf(',') === -1) {
          setCurrNum(currNum + value);
          setInput(input + value);
        }
        break;
      case 'toggle':
        const regex = new RegExp(`${currNum}$`);
        if (currNum.indexOf('-') === -1) {
          setCurrNum('-' + currNum);
          setInput(input.replace(regex, `-${currNum}`));
        } else {
          setCurrNum(currNum.substr(1));
          setInput(input.replace(regex, currNum.substr(1)));
        }
        break;
      case 'operator':
        setPrevNum(currNum);
        setCurrNum('');
        setInput(input + ' ' + value + ' ');
        break;
      case 'clear':
        setInput('');
        setOutput('0');
        setCurrNum('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <pre>
        {JSON.stringify(
          {
            input: input,
            output: output,
            currNum: currNum,
            prevNum: prevNum,
          },
          null,
          1,
        )}
      </pre>
      <Header input={input} output={output} />
      <Keyboard handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;

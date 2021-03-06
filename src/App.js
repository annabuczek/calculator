import React, { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/Header/Header';
import { evaluate } from './helpers/math';
import './App.scss';

const App = () => {
  const [input, setInput] = useState('');
  const [finalInput, setFinalInput] = useState('');
  const [output, setOutput] = useState('0');
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [activeOperator, setActiveOperator] = useState(false);
  const [activePercent, setActivePercent] = useState(false);

  const handleButtonClick = (e) => {
    const value = e.target.value;
    const action = e.target.attributes.action.value;
    const currNumRegex = new RegExp(`${currNum}$`);

    if (output !== '0') {
      setOutput('0');
      setFinalInput('');
    }

    switch (action) {
      case 'num':
        if (currNum === '0' || activePercent) {
          setCurrNum(value);
        } else {
          setCurrNum(currNum + value);
        }

        if (!!input.match(/(\s|^)0$/)) {
          setInput(input.replace(/0$/, value));
        } else if (activePercent) {
          setInput(input.replace(currNumRegex, value));
        } else {
          setInput(input + value);
        }

        setActiveOperator(false);
        setActivePercent(false);
        break;
      case 'comma':
        if (!currNum) {
          setCurrNum('0' + value);
          setInput(input + '0' + value);
        } else if (currNum.indexOf('.') === -1) {
          setCurrNum(currNum + value);
          setInput(input + value);
        }

        setActiveOperator(false);
        break;
      case 'toggle':
        if (currNum.indexOf('-') === -1) {
          setCurrNum('-' + currNum);
          setInput(input.replace(currNumRegex, `-${currNum}`));
        } else {
          setCurrNum(currNum.substr(1));
          setInput(input.replace(currNumRegex, currNum.substr(1)));
        }

        setActiveOperator(false);
        break;
      case 'operator':
        if (!input || input === '-') {
          break;
        }

        setCurrNum('');
        if (activeOperator) {
          setInput(input.replace(/(\+|-|\/|\*)\s$/, `${value} `));
        } else {
          setInput(input + ' ' + value + ' ');
          setPrevNum(currNum);
        }

        setActiveOperator(true);
        setActivePercent(false);
        break;
      case 'percent':
        if (!currNum) {
          break;
        }

        let percentValue;
        if (!prevNum) {
          percentValue = String(parseFloat(currNum) / 100);
          setCurrNum(percentValue);
          setInput(input.replace(currNumRegex, percentValue));
        } else {
          percentValue = String(
            parseFloat(prevNum) * (parseFloat(currNum) / 100),
          );
          setCurrNum(percentValue);
          setInput(input.replace(currNumRegex, percentValue));
        }

        setActivePercent(true);
        break;
      case 'evaluate':
        if (output !== '0' || !input) {
          break;
        }
        setOutput(evaluate(input));
        setFinalInput(input);

        setInput('');
        setCurrNum('');
        setPrevNum('');
        setActiveOperator(false);
        setActivePercent(false);
        break;
      case 'clear':
        setInput('');
        setFinalInput('');
        setOutput('0');
        setCurrNum('');
        setPrevNum('');
        setActiveOperator(false);
        setActivePercent(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <Header input={input} output={output} finalInput={finalInput} />
      <Keyboard handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;

import React from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="calculator">
      <Header />
      <Keyboard />
    </div>
  );
}

export default App;

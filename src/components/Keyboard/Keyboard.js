import React from 'react';
import Button from '../Button/Button';
import buttons from './keyboardButtons';
import './Keyboard.scss';

const Keyboard = (props) => {
  const { handleButtonClick } = props;
  return (
    <div className="keyboard">
      {buttons.map((button) => {
        const { className, content } = button;
        return (
          <Button
            className={className}
            content={content}
            value={content}
            handleButtonClick={handleButtonClick}
            key={`btn-${content}`}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;

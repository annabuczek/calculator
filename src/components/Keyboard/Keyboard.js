import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import buttons from './keyboardButtons';
import './Keyboard.scss';

const Keyboard = (props) => {
  const { handleButtonClick } = props;
  return (
    <div className="keyboard">
      {buttons.map((button) => {
        const { className, content, action, value } = button;
        return (
          <Button
            className={className}
            content={content}
            value={value || content}
            action={action}
            handleButtonClick={handleButtonClick}
            key={`btn-${content}`}
          />
        );
      })}
    </div>
  );
};

Keyboard.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Keyboard;

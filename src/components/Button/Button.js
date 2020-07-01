import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const {
    className,
    content,
    handleButtonClick,
    value,
    action,
  } = props;
  return (
    <button
      className={`button ${className}`}
      onClick={handleButtonClick}
      value={value}
      action={action}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  action: PropTypes.string.isRequired,
};

export default Button;

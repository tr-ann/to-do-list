import React from 'react';
import './Button.css';
import classNames from 'classnames';

// eslint-disable-next-line object-curly-newline
const Button = ({ success, warning, danger, onClick, title }) => {
  const classes = classNames('button', {
    button_success: success,
    button_warning: warning,
    button_danger: danger,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

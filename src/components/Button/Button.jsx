import './Button.css';
import classNames from 'classnames';

export const Button = ({ success, warning, danger, onClick, title }) => {
  let classes = classNames('button', {
    button_success: success,
    button_warning: warning,
    button_danger: danger,
  });

  return (
    <button className={classes} onClick={onClick}>
      {title}
    </button>
  );
};

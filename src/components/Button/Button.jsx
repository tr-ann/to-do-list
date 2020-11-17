import './Button.css';
import classNames from 'classnames';

export function Button(props) {
  let classes = classNames('button', {
    button_success: props.success,
    button_warning: props.warning,
    button_danger: props.danger,
  });

  return (
    <button className={classes} onClick={() => props.onClick()}>
      {props.title}
    </button>
  );
}

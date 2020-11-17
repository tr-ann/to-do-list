import classNames from 'classnames';
import './Input.css';

export function Input(props) {
  let inputClass = classNames('input', props.classNames);

  return (
    <input
      type="text"
      className={inputClass}
      placeholder={props.placeholder}
      onChange={(e) => props.onChanged(e)}
    />
  );
}

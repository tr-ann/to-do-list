import classNames from 'classnames';
import './Input.css';

export const Input = ({ classNames: classes, placeholder, onChange, value }) => {
  let inputClass = classNames('input', classes);

  return (
    <input
      type="text"
      value={value}
      className={inputClass}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

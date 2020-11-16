import './Button.component.css';

export function Button(props) {
  let classes = `button
    ${props.success ? 'button_success' : ''}
    ${props.warning ? 'button_warning' : ''}
    ${props.danger ? 'button_danger' : ''}
  `;

  return (
    <button className={classes} onClick={() => props.onClick()}>
      {props.title}
    </button>
  );
}

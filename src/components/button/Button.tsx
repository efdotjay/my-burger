
import React from 'react';
import classes from './Button.module.css';

type ButtonProps = { onClick: () => void; type: string };

const Button: React.FC<ButtonProps> = props => (
  <button className={[classes.Button, classes[props.type]].join(' ')} onClick={props.onClick}>{props.children}</button>
);

export default Button;

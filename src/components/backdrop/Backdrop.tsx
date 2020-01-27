
import React from 'react';
import classes from './Backdrop.module.css';

type BackdropProps = {
  show: boolean;
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = props => (
  props.show ? <div className={classes.Backdrop} onClick={props.onClick}/> : null
);

export default Backdrop;

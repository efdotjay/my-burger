
import React from 'react';
import classes from './BuildControl.module.css';

type BuildControlProps = {
  label: string;
  clickMore: () => void;
  clickLess: () => void;
  disabled?: boolean;
};

const BuildControl: React.FC<BuildControlProps> = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{ props.label }</div>
    <button className={classes.Less} onClick={props.clickLess} disabled={props.disabled || false}>Less</button>
    <button className={classes.More} onClick={props.clickMore}>More</button>
  </div>
);

export default BuildControl;

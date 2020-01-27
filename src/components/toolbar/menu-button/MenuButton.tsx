
import React from 'react';
import classes from './MenuButton.module.css';

type MenuButtonProps = {
  onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = props => (
  <div className={classes.MenuButton} onClick={props.onClick}>
    <div />
    <div />
    <div />
  </div>
);

export default MenuButton;

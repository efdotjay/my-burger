
import React from 'react';
import classes from './NavigationItem.module.css';

type NavigationItemProps = {
  link?: string;
  active?: boolean;
};

const NavigationItem: React.FC<NavigationItemProps> = props => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : undefined}>{props.children}</a>
  </li>
);

export default NavigationItem;

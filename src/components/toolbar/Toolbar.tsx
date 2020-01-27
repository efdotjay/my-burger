
import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../logo/Logo';

const Toolbar: React.FC = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav></nav>
  </header>
);

export default Toolbar;

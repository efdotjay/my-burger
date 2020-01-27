
import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

const Logo: React.FC = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My burger logo"/>
  </div>
);

export default Logo;

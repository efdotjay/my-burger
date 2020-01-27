
import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import MenuButton from './menu-button/MenuButton';

type ToolbarProps = {
  onMenuClick: () => void;
};

const Toolbar: React.FC<ToolbarProps> = props => (
  <header className={classes.Toolbar}>
    <MenuButton onClick={props.onMenuClick}/>
    <div className={classes.Logo}><Logo /></div>
    <nav className={classes.DesktopOnly}><NavigationItems /></nav>
  </header>
);

export default Toolbar;

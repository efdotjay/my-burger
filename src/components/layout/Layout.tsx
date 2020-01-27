
import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../toolbar/Toolbar';

const Layout: React.FC = props => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{ props.children }</main>
  </Fragment>
);

export default Layout;

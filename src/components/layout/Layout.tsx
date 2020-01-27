
import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../toolbar/Toolbar';
import SideDrawer from '../side-drawer/SideDrawer';

interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends React.Component {
  state: LayoutState = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = (): void => {
    this.setState((state: LayoutState) => ({ showSideDrawer: !state.showSideDrawer }));
  };

  render() {
    const { showSideDrawer } = this.state;

    return (
      <Fragment>
        <Toolbar onMenuClick={this.sideDrawerToggleHandler}/>
        <SideDrawer open={showSideDrawer} onClose={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>{ this.props.children }</main>
      </Fragment>
    );
  }
}

export default Layout;

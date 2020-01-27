
import React, { Fragment } from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import Backdrop from '../backdrop/Backdrop';

type SideDrawerProps = {
  onClose: () => void;
  open: boolean;
};

const SideDrawer: React.FC<SideDrawerProps> = props => {
  const attachedClasses = [classes.SideDrawer];

  if(props.open)
    attachedClasses.push(classes.Open);
  else
    attachedClasses.push(classes.Close);

  return (
    <Fragment>
      <Backdrop
        show={props.open}
        onClick={props.onClose}
      />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}><Logo /></div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;

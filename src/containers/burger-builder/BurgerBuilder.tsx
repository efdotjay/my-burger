
import React, { Fragment } from 'react';
import { Burger } from '../../components';

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;

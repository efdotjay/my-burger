
import React, { Fragment } from 'react';
import Burger, { BurgerIngredients } from '../../components/burger/Burger';

interface BurgerBuilderState {
  ingredients: BurgerIngredients
}

class BurgerBuilder extends React.Component {
  state: BurgerBuilderState = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 2,
      meat: 1
    }
  };

  render() {
    const { ingredients } = this.state;

    return (
      <Fragment>
        <Burger ingredients={ingredients}/>
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;

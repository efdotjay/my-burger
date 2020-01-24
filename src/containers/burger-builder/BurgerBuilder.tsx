
import React, { Fragment } from 'react';

import Burger, { BurgerIngredients } from '../../components/burger/Burger';
import BuildControls from '../../components/build-controls/BuildControls';

interface BurgerBuilderState {
  ingredients: BurgerIngredients,
  totalPrice: number
}

const INGREDIENT_PRICES: { [x in keyof BurgerIngredients]: number } = {
  meat: 10,
  bacon: 20,
  cheese: 30,
  salad: 10
};

class BurgerBuilder extends React.Component {
  state: BurgerBuilderState = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 0
  };

  addIngredientHandler = (type: keyof BurgerIngredients): void => {
    const updatedIngredients: BurgerIngredients = {...this.state.ingredients};
    updatedIngredients[type]++;

    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState((state: BurgerBuilderState) => ({
      ingredients: updatedIngredients,
      totalPrice: state.totalPrice + ingredientPrice
    }));
  }

  removeIngredientHandler = (type: keyof BurgerIngredients): void => {
    if(!this.state.ingredients[type])
      return;

    const updatedIngredients: BurgerIngredients = {...this.state.ingredients};

    updatedIngredients[type]--;
    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState((state: BurgerBuilderState) => ({
      ingredients: updatedIngredients,
      totalPrice: state.totalPrice - ingredientPrice
    }));
  }

  render() {
    const { ingredients } = this.state;

    return (
      <Fragment>
        <Burger ingredients={ingredients}/>
        <BuildControls
          onClickMore={this.addIngredientHandler}
          onClickLess={this.removeIngredientHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;

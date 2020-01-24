
import React, { Fragment } from 'react';

import Burger, { BurgerIngredients } from '../../components/burger/Burger';
import BuildControls, { DisabledInfo } from '../../components/build-controls/BuildControls';
import BurgerIngredient from '../../components/burger/burger-ingredient/BurgerIngredient';

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
    const disabledInfo: DisabledInfo = (Object.keys(ingredients) as (keyof BurgerIngredients)[]).reduce((info, ingredient) => {
      info[ingredient] = !ingredients[ingredient];
      return info;
    }, {} as DisabledInfo);

    return (
      <Fragment>
        <Burger ingredients={ingredients}/>
        <BuildControls
          onClickMore={this.addIngredientHandler}
          onClickLess={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;

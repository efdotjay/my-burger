
import React, { Fragment } from 'react';

import Burger, { BurgerIngredients } from '../../components/burger/Burger';
import BuildControls, { DisabledInfo } from '../../components/build-controls/BuildControls';
import OrderSummary from '../../components/order-summary/OrderSummary';
import Modal from '../../components/modal/Modal';

interface BurgerBuilderState {
  ingredients: BurgerIngredients,
  totalPrice: number,
  purchasable: boolean,
  purchasing: boolean
}

const INGREDIENT_PRICES: { [x in keyof BurgerIngredients]: number } = {
  meat: 1.25,
  bacon: 0.75,
  cheese: 0.5,
  salad: 0.25
};

class BurgerBuilder extends React.Component {
  state: BurgerBuilderState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable = () => {
    const ingredients = this.state.ingredients;
    const sum = (Object.keys(ingredients) as (keyof BurgerIngredients)[])
      .map(ingredient => ingredients[ingredient])
      .reduce((sum, ingredientCount) => sum += ingredientCount, 0)
    ;

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type: keyof BurgerIngredients): void => {
    const updatedIngredients: BurgerIngredients = {...this.state.ingredients};
    updatedIngredients[type]++;

    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState((state: BurgerBuilderState) => ({
      ingredients: updatedIngredients,
      totalPrice: state.totalPrice + ingredientPrice
    }), this.updatePurchasable);
  };

  removeIngredientHandler = (type: keyof BurgerIngredients): void => {
    if(!this.state.ingredients[type])
      return;

    const updatedIngredients: BurgerIngredients = {...this.state.ingredients};

    updatedIngredients[type]--;
    const ingredientPrice = INGREDIENT_PRICES[type];

    this.setState((state: BurgerBuilderState) => ({
      ingredients: updatedIngredients,
      totalPrice: state.totalPrice - ingredientPrice
    }), this.updatePurchasable);
  };

  togglePurchasing = () => {
    this.setState((state: BurgerBuilderState) => ({ purchasing: !state.purchasing }));
  };

  purchaseHandler = () => {
    alert('Continue purchase.');
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;
    const disabledInfo: DisabledInfo = (Object.keys(ingredients) as (keyof BurgerIngredients)[]).reduce((info, ingredient) => {
      info[ingredient] = !ingredients[ingredient];
      return info;
    }, {} as DisabledInfo);

    return (
      <Fragment>
        <Modal show={purchasing} onClose={this.togglePurchasing}>
          <OrderSummary price={totalPrice} ingredients={ingredients} onCancel={this.togglePurchasing} onContinue={this.purchaseHandler}/>
        </Modal>
        <Burger ingredients={ingredients}/>
        <BuildControls
          onClickMore={this.addIngredientHandler}
          onClickLess={this.removeIngredientHandler}
          onClickOrder={this.togglePurchasing}
          disabled={disabledInfo}
          totalPrice={totalPrice}
          purchasable={purchasable}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;

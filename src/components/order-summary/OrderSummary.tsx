
import React, { Fragment } from 'react';
import { BurgerIngredients } from '../burger/Burger';
import { IngredientName } from '../burger/burger-ingredient/BurgerIngredient';

type OrderSummaryProps = { ingredients: BurgerIngredients };

const OrderSummary: React.FC<OrderSummaryProps> = props => {
  const ingredientSummary = (Object.keys(props.ingredients) as IngredientName[])
    .map(ingKey => (
      <li key={ingKey as string}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
      </li>
    ))
  ;

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;

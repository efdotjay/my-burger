
import React, { Fragment } from 'react';

import { BurgerIngredients } from '../burger/Burger';
import { IngredientName } from '../burger/burger-ingredient/BurgerIngredient';
import Button from '../button/Button';

type OrderSummaryProps = {
  ingredients: BurgerIngredients;
  onCancel: () => void;
  onContinue: () => void;
  price: number
};

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button type="Danger" onClick={props.onCancel}>CANCEL</Button>
      <Button type="Success" onClick={props.onContinue}>CONTINUE</Button>
    </Fragment>
  );
};

export default OrderSummary;

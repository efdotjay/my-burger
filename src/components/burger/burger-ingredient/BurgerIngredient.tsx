
import React from 'react';

import classes from './BurgerIngredient.module.css';

export enum Bread {
  top = 'bread-top',
  bottom = 'bread-bottom'
}

export enum IngredientName {
  meat = 'meat',
  cheese = 'cheese',
  bacon = 'bacon',
  salad = 'salad'
}

type BurgerIngredientProps = { type: IngredientName | Bread };

const BurgerIngredient: React.FC<BurgerIngredientProps> = props => {
  let ingredient: React.ReactElement | null = null;

  switch(props.type) {
    case Bread.top:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case Bread.bottom:
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case IngredientName.meat:
      ingredient = <div className={classes.Meat}></div>;
      break;
    case IngredientName.cheese:
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case IngredientName.bacon:
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case IngredientName.salad:
      ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;


import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient, { Bread, IngredientName } from './burger-ingredient/BurgerIngredient';

export type BurgerIngredients = {
  [x in IngredientName]: number
}

type BurgerProps = { ingredients: BurgerIngredients };

const Burger: React.FC<BurgerProps> = props => {
  const transformedIngredients: React.ReactElement[] = (Object.keys(props.ingredients) as IngredientName[])
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
      })
    })
    .reduce((arr, el) => arr.concat(el))
  ;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={Bread.top} />
      {!transformedIngredients.length && <p>Start adding ingredients!</p>}
      {transformedIngredients}
      <BurgerIngredient type={Bread.bottom} />
    </div>
  );
};

export default Burger;


import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';

const Burger: React.FC = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;


import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './build-control/BuildControl';
import { IngredientName } from '../burger/burger-ingredient/BurgerIngredient';

type Control = { label: string; type: IngredientName };
export type DisabledInfo = { [x in IngredientName]: boolean };

type BuildControlsProps = {
  onClickMore: (type: IngredientName) => void;
  onClickLess: (type: IngredientName) => void;
  disabled: DisabledInfo;
};

const controls: Control[] = [
  { label: 'Meat', type: IngredientName.meat },
  { label: 'Bacon', type: IngredientName.bacon },
  { label: 'Cheeze', type: IngredientName.cheese },
  { label: 'Salad', type: IngredientName.salad }
];

const BuildControls: React.FC<BuildControlsProps> = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        clickMore={() => props.onClickMore(control.type)}
        clickLess={() => props.onClickLess(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
);

export default BuildControls;

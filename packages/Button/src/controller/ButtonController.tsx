import React, { useReducer } from 'react';
import { IButtonProps, VariantGroup, Variants } from '../types';
import { model, initialState } from '../model';
import { Button } from '../view/Button';
import { Icon } from '@blaze-react/icon';

export const ButtonController = ({
  label = 'Blaze',
  disabled = false,
  children,
  type = 'button',
  variantGroup = VariantGroup.Filled,
  variant = Variants.Primary,
  displayIcon = 'no-icon',
  iconOnly = false,
  icon,
}: IButtonProps): JSX.Element => {
  const [state, dispatch] = useReducer(model, { ...initialState, variantGroup: variantGroup });

  disabled && dispatch({ type: Variants.Disabled });

  !disabled && dispatch({ type: variant });

  return (
    <Button utilities={state.utilities} type={type}>
      <Icon display={displayIcon} iconOnly={iconOnly} label={label} icon={icon} />
      {children}
    </Button>
  );
};

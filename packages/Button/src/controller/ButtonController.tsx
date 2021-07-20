import React from 'react';
import { DisplayIconProps, IButtonControllerProps, Variants, VariantsGroup } from '../types';
import { useVariant } from '../hooks';
import { Button } from '../view/Button';
import { Icon } from '@blaze-react/icon';
import { overrideClasses } from '@blaze-react/themes';

export const ButtonController = ({
  label,
  disabled = false,
  children,
  type,
  variantsGroup = VariantsGroup.Filled,
  variant = Variants.Primary,
  iconOnly = false,
  displayIcon = DisplayIconProps.NoIcon,
  icon,
  overrides = '',
}: IButtonControllerProps): JSX.Element => {
  //Component logic goes here...
  const display = iconOnly && displayIcon === 'no-icon' ? 'icon-left' : displayIcon;
  const defaultThemeVariant = useVariant(variantsGroup, Variants.Primary);
  const themeVariant = useVariant(variantsGroup, disabled ? Variants.Disabled : variant);
  const themeUtilities = themeVariant.utilities ?? defaultThemeVariant.utilities;
  const utilities = overrideClasses(themeUtilities, overrides);

  return (
    <Button utilities={utilities} type={type} disabled={disabled}>
      <Icon display={display} iconOnly={iconOnly} label={label} icon={icon} />
      {children}
    </Button>
  );
};

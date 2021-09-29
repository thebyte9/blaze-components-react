import React from 'react';
import { DisplayIconProps, IButtonProps } from '../types';
import { ButtonView } from '../view/ButtonView';
import { Icon } from '@blaze-react/icon';
import { useComponentLogic } from '../hooks/useComponentLogic';

export const Button = ({
  label,
  type,
  variant,
  iconOnly = false,
  disabled = false,
  icon,
  displayIcon = DisplayIconProps.NoIcon,
  overrides = [],
  children,
  theme,
  onClick,
}: IButtonProps): JSX.Element => {
  const { display, classes } = useComponentLogic({
    componentVariant: variant,
    theme: theme,
    displayIcon,
    iconOnly: iconOnly,
    overrides: overrides,
  });

  return (
    <ButtonView classes={classes} type={type} disabled={disabled} onClick={onClick}>
      <Icon display={display} iconOnly={iconOnly} label={label} icon={icon} />
      {children}
    </ButtonView>
  );
};

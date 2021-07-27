import React from 'react';
import { DisplayIconProps, IButtonProps } from '../types';
import { ButtonView } from '../view/ButtonView';
import { Icon } from '@blaze-react/icon';
import { useTheme, useVariant, useVariantForState, overrideClasses } from '@blaze-react/themes';

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
}: IButtonProps): JSX.Element => {
  //Get theme
  const { theme: themeFromContext } = useTheme();

  //If theme prop is set it overrides the theme received from context.
  const currentTheme = theme ?? themeFromContext;

  // Get variants
  const defaultUtilities = useVariant(currentTheme, 'button', 'primary', 'container') ?? '';
  const variantUtilities = useVariant(currentTheme, 'button', variant, 'container') ?? defaultUtilities;
  const disabledUtilities = useVariantForState(currentTheme, 'button', 'disabled', variant, 'container') ?? '';

  // Icon logic
  const display = iconOnly && displayIcon === 'no-icon' ? 'icon-left' : displayIcon;

  // Disable state
  const buttonUtilities = disabled ? disabledUtilities : variantUtilities;

  // Override Tailwind classes
  const utilities = overrideClasses(buttonUtilities, overrides);

  return (
    <ButtonView utilities={utilities} type={type} disabled={disabled}>
      <Icon display={display} iconOnly={iconOnly} label={label} icon={icon} />
      {children}
    </ButtonView>
  );
};

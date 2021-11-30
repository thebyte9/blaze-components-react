import { COMPONENT, DEFAULT_VARIANT } from '../constants';
import { IconDisplayType, IconProps } from '@blaze-react/icon';
import { ThemeType, overrideClasses, useTheme } from '@blaze-react/themes';

interface IComponentLogicProps {
  componentVariant: string;
  element?: string;
  theme: ThemeType;
  displayIcon: IconDisplayType;
  iconOnly: boolean;
  overrides: string[];
}

export const useComponentLogic = ({
  componentVariant = DEFAULT_VARIANT,
  theme,
  displayIcon,
  iconOnly,
  overrides,
}: IComponentLogicProps): any => {
  // Theme logic
  const { variant, variants } = useTheme({
    component: COMPONENT,
    variant: componentVariant,
    theme: theme,
  });

  // Icon logic.
  const display = iconOnly && displayIcon === IconDisplayType.NoIcon ? IconDisplayType.Left : displayIcon;

  // Override Tailwind classes.
  const classes = overrideClasses(variant, overrides);

  return { variant, variants, display, classes };
};

import { useTheme, overrideClasses, ThemeType } from '@blaze-react/themes';
import { DisplayIcon } from '@blaze-react/icon';
import { COMPONENT, DEFAULT_VARIANT } from '../constants';

interface IComponentLogicProps {
  componentVariant: string;
  element?: string;
  theme: ThemeType;
  displayIcon: DisplayIcon;
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
  const display = iconOnly && displayIcon === DisplayIcon.NoIcon ? DisplayIcon.Left : displayIcon;

  // Override Tailwind classes.
  const classes = overrideClasses(variant, overrides);

  return { variant, variants, display, classes };
};

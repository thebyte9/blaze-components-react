import { useTheme, overrideClasses, ThemeType } from '@blaze-react/themes';
import { DisplayIcon } from '@blaze-react/icon';
import { COMPONENT, CONTAINER, DEFAULT_VARIANT } from '../constants';

interface IComponentLogicProps {
  componentVariant: string;
  element?: string;
  theme: ThemeType;
  displayIcon: DisplayIcon;
  iconOnly: boolean;
  disabled: boolean;
  overrides: string[];
}

export const useComponentLogic = ({
  componentVariant = DEFAULT_VARIANT,
  element = CONTAINER,
  theme,
  displayIcon,
  iconOnly,
  disabled,
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

  // Disabled state. Fallback to default variant if undefined.
  const stateClasses = disabled ? variants[componentVariant].disabled[element] : variant;

  // Override Tailwind classes.
  const classes = overrideClasses(stateClasses, overrides);

  return { variant, variants, display, classes };
};

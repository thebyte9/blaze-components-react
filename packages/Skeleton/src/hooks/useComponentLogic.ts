import { useTheme, overrideClasses, ThemeType } from '@blaze-react/themes';
import { COMPONENT, CONTAINER, DEFAULT_VARIANT } from '../constants';

interface IComponentLogicProps {
  componentVariant: string;
  element?: string;
  theme: ThemeType;
  overrides: string[];
}

export const useComponentLogic = ({
  componentVariant = DEFAULT_VARIANT,
  element = CONTAINER,
  theme,
  overrides,
}: IComponentLogicProps): any => {
  // Theme logic
  const { variant, showSkeleton } = useTheme({
    component: COMPONENT,
    element: element,
    variant: componentVariant,
    theme: theme,
  });

  // Override Tailwind classes
  const container = overrideClasses(variant, overrides);

  return { container: container, showSkeleton: showSkeleton };
};

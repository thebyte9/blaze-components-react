import { useTheme, overrideClasses, ThemeType, useComponentVariant } from '@blaze-react/themes';
import { InputState, InputType } from '../types';
import {
  COMPONENT,
  DEFAULT_VARIANT,
  HORIZONTAL,
  INPUT,
  LABEL,
  SKELETON,
  VERTICAL,
  ERROR,
  WARNING,
  LOADING,
  SUCCESS,
  MESSAGE,
  ICON,
} from '../constants';

interface IComponentLogicProps {
  componentVariant: string;
  element?: string;
  theme: ThemeType;
  overrides: string[];
  type: InputType;
  currentState: InputState;
}

export const useComponentLogic = ({ componentVariant = DEFAULT_VARIANT, theme, overrides }: IComponentLogicProps) => {
  // Theme logic
  const { variant, variants } = useTheme({
    component: COMPONENT,
    element: DEFAULT_VARIANT,
    variant: componentVariant,
    theme: theme,
  });

  // label
  const label = useComponentVariant({
    component: LABEL,
    variants: variants,
    variant: componentVariant,
  });

  // error
  const error = {
    container: useComponentVariant({ component: ERROR, variants: variants, variant: componentVariant }),
    label: useComponentVariant({ component: ERROR, element: LABEL, variants: variants, variant: componentVariant }),
    input: useComponentVariant({ component: ERROR, element: INPUT, variants: variants, variant: componentVariant }),
    icon: useComponentVariant({ component: ERROR, element: ICON, variants: variants, variant: componentVariant }),
    message: useComponentVariant({ component: ERROR, element: MESSAGE, variants: variants, variant: componentVariant }),
  };

  // success
  const success = {
    container: useComponentVariant({ component: SUCCESS, variants: variants, variant: componentVariant }),
    label: useComponentVariant({ component: SUCCESS, element: LABEL, variants: variants, variant: componentVariant }),
    input: useComponentVariant({ component: SUCCESS, element: INPUT, variants: variants, variant: componentVariant }),
    icon: useComponentVariant({ component: SUCCESS, element: ICON, variants: variants, variant: componentVariant }),
    message: useComponentVariant({
      component: SUCCESS,
      element: MESSAGE,
      variants: variants,
      variant: componentVariant,
    }),
  };

  // loading
  const loading = {
    container: useComponentVariant({ component: LOADING, variants: variants, variant: componentVariant }),
    label: useComponentVariant({ component: LOADING, element: LABEL, variants: variants, variant: componentVariant }),
    input: useComponentVariant({ component: LOADING, element: INPUT, variants: variants, variant: componentVariant }),
    icon: useComponentVariant({ component: LOADING, element: ICON, variants: variants, variant: componentVariant }),
    message: useComponentVariant({
      component: LOADING,
      element: MESSAGE,
      variants: variants,
      variant: componentVariant,
    }),
  };

  // warning
  const warning = {
    container: useComponentVariant({ component: WARNING, variants: variants, variant: componentVariant }),
    label: useComponentVariant({ component: WARNING, element: LABEL, variants: variants, variant: componentVariant }),
    input: useComponentVariant({ component: WARNING, element: INPUT, variants: variants, variant: componentVariant }),
    icon: useComponentVariant({ component: WARNING, element: ICON, variants: variants, variant: componentVariant }),
    message: useComponentVariant({
      component: LOADING,
      element: MESSAGE,
      variants: variants,
      variant: componentVariant,
    }),
  };

  const verticalLayout = useComponentVariant({
    component: SKELETON,
    element: VERTICAL,
    variants: variants,
    variant: componentVariant,
  });

  const horizontalLayout = useComponentVariant({
    component: SKELETON,
    element: HORIZONTAL,
    variants: variants,
    variant: componentVariant,
  });

  // Skeleton
  const skeleton = {
    vertical: {
      container: verticalLayout.container.filter(Boolean).join(' '),
      label: verticalLayout.label.filter(Boolean).join(' '),
      input: verticalLayout.input.filter(Boolean).join(' '),
    },
    horizontal: {
      container: horizontalLayout.container.filter(Boolean).join(' '),
      label: horizontalLayout.label.filter(Boolean).join(' '),
      input: horizontalLayout.input.filter(Boolean).join(' '),
    },
  };

  // Override Tailwind classes
  const overrided = overrideClasses(variant, overrides);

  const classes = {
    default: overrided,
    label: label,
    error: error,
    warning: warning,
    loading: loading,
    success: success,
  };

  return { variant, variants, classes, skeleton };
};

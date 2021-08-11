import { useTheme, ThemeType } from '@blaze-react/themes';
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
  overrides = [],
}: IComponentLogicProps): any => {
  // Theme logic
  const { variant, variants } = useTheme({
    component: COMPONENT,
    element: element,
    variant: componentVariant,
    theme: theme,
  });

  const container = variant.filter(Boolean).join(' ');

  const header = {
    container: variants[componentVariant]?.header.container.filter(Boolean).join(' '),
    title: variants[componentVariant]?.header.title.filter(Boolean).join(' '),
    button: variants[componentVariant]?.header.button.filter(Boolean).join(' '),
  };

  const footer = variants[componentVariant]?.footer.container.filter(Boolean).join(' ');

  return { variant, variants, container, header, footer };
};

import { variants as themeVariants } from '@blaze-react/themes';
import { Variants, VariantsGroup } from '../types';

export const useVariant = (variantsGroup = VariantsGroup.Filled, variant = Variants.Primary): any => {
  switch (variant) {
    case Variants.Primary: {
      return {
        utilities: themeVariants.button[variantsGroup].primary,
      };
    }
    case Variants.Disabled: {
      return {
        utilities: themeVariants.button[variantsGroup].disabled,
      };
    }
    case Variants.Small: {
      return {
        utilities: themeVariants.button[variantsGroup].small,
      };
    }
    case Variants.Medium: {
      return {
        utilities: themeVariants.button[variantsGroup].medium,
      };
    }
    case Variants.Large: {
      return {
        utilities: themeVariants.button[variantsGroup].large,
      };
    }
    case Variants.Stretched: {
      return {
        utilities: themeVariants.button[variantsGroup].stretched,
      };
    }
    default: {
      return {
        utilities: themeVariants.button[variantsGroup].primary,
      };
    }
  }
};

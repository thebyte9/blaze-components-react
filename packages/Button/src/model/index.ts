import { variants as themeVariants } from '@blaze-react/themes';
import { Variants } from '../types';

export const initialState = { variant: 'primary', variantGroup: 'filled', utilities: themeVariants.button.primary };

export const model = (state, variant) => {
  switch (variant.type) {
    case Variants.Primary: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].primary,
      };
    }
    case Variants.Disabled: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].disabled,
      };
    }
    case Variants.Small: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].small,
      };
    }
    case Variants.Medium: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].small,
      };
    }
    case Variants.Large: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].small,
      };
    }
    case Variants.Stretched: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].stretched,
      };
    }
    case Variants.IconOnly: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].iconOnly,
      };
    }
    case Variants.IconLeft: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].IconLeft,
      };
    }
    case Variants.IconRight: {
      return {
        ...state,
        utilities: themeVariants.button[state.variantGroup].iconRight,
      };
    }
  }
};

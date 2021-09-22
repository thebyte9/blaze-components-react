// Note: this should be move out to the Button stories folder
import { filledVariants } from './filled';
import { outlinedVariants } from './outlined';
import { textVariants } from './text';

export const buttonVariants = {
  ...filledVariants,
  ...outlinedVariants,
  ...textVariants,
};

// TODO: another iteration - reuse common class utilities
import { filledVariants } from './filled';
import { outlinedVariants } from './outlined';
import { textVariants } from './text';

export const buttonVariants = {
  ...filledVariants,
  ...outlinedVariants,
  ...textVariants,
};

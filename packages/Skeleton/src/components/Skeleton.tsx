import React from 'react';
import { useComponentLogic } from '../hooks/useComponentLogic';
import { SkeletonProps } from '../types';

export const Skeleton = ({ classes, children, theme, variant, overrides = [] }: SkeletonProps): JSX.Element => {
  const { container, showSkeleton } = useComponentLogic({
    overrides: overrides,
    componentVariant: variant,
    theme: theme,
  });
  return showSkeleton ? <div className={classes ?? container}>{children}</div> : null;
};

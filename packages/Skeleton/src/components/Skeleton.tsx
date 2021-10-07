import React from 'react';
import { useComponentLogic } from '../hooks/useComponentLogic';
import { SkeletonProps } from '../types';

export const Skeleton = ({ classes, children, theme, variant, overrides = [] }: SkeletonProps): JSX.Element => {
  const { container, showSkeleton } = useComponentLogic({
    overrides: overrides,
    componentVariant: variant,
    theme: theme,
  });

  const className = classes === undefined ? container : classes;

  return showSkeleton ? <div className={className}>{children}</div> : null;
};

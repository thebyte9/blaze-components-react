import React from 'react';
import { SkeletonProps } from '../types';

export const Skeleton = ({ classes, children }: SkeletonProps): JSX.Element => {
  return <div className={`${classes} animate-pulse`}>{children}</div>;
};

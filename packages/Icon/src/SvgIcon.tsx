import React from 'react';
import { SvgIconProps } from './types';

export const SvgIcon = ({ classes = '', children, ...rest }: SvgIconProps): JSX.Element => {
  const { svg = '' } = rest;
  return (
    <div className={classes} dangerouslySetInnerHTML={{ __html: svg }}>
      {children}
    </div>
  );
};

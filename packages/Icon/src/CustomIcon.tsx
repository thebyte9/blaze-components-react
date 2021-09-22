import { CustomIconProps } from './types';
import React from 'react';

export const CustomIcon = ({ classes = '', children, ...rest }: CustomIconProps): JSX.Element => {
  const { content = '' } = rest;
  return (
    <div className={classes} dangerouslySetInnerHTML={{ __html: content }}>
      {children}
    </div>
  );
};

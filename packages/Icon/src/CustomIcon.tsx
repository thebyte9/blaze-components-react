import { CustomIconProps } from './types';
import React from 'react';

export const CustomIcon = ({ utilities = '', children, ...rest }: CustomIconProps): JSX.Element => {
  const { content = '' } = rest;
  return (
    <div className={utilities} dangerouslySetInnerHTML={{ __html: content }}>
      {children}
    </div>
  );
};

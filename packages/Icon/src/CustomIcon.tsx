import { IconProps } from './types';
import React from 'react';

const CustomIcon = ({ utilities = '', children, ...rest }: IconProps): JSX.Element => {
  const { content = '' } = rest;
  return (
    <div className={utilities} dangerouslySetInnerHTML={{ __html: content }}>
      {children}
    </div>
  );
};

export default CustomIcon;

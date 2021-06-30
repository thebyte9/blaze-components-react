import React from 'react';
import '@blaze-react/themes/styles/global.css';

export interface ButtonProps {
  children: unknown;
  utilities?: string;
}

export const BlazeButton = ({ children, utilities, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button className={utilities} {...rest}>
      {children}
    </button>
  );
};

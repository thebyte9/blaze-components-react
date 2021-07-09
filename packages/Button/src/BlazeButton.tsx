import React from 'react';

export interface ButtonProps {
  children: unknown;
  utilities?: string;
}

export const BlazeButton = ({ children, utilities, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className={utilities} {...rest}>
      {children}
    </button>
  );
};

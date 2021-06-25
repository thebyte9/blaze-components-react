import React, { useEffect } from 'react';
import '../styles/globals.css';
import { applyTheme } from '../themes/utils';
import { blazeTheme } from '../themes/blazeTheme';

export const ADMIN = 'admin';
export const FRONTEND = 'frontend';

export interface ButtonProps {
  children: unknown;
  utilities?: string;
  blazeUtilities?: string;
  theme: typeof ADMIN | typeof FRONTEND;
}

export const BlazeButton = ({ children, blazeUtilities, utilities, theme, ...rest }: ButtonProps): JSX.Element => {
  useEffect(() => {
    applyTheme(blazeTheme);
  }, []);

  return theme === ADMIN ? (
    <button className={blazeUtilities} {...rest}>
      {children}
    </button>
  ) : (
    <button className={utilities} {...rest}>
      {children}
    </button>
  );
};

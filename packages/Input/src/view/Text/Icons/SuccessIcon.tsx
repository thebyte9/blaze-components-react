import { TextInputDefaultIcon } from '../../../types';
import React from 'react';

export const SuccessIcon = ({ classes, currentState }: TextInputDefaultIcon): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes[currentState].icon}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

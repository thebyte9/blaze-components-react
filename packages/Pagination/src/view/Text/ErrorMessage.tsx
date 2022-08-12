import React from 'react';

export interface IErrorMessageProps {
  message: string;
  classes: string;
}

export const ErrorMessage = ({ classes, message }: IErrorMessageProps): JSX.Element => {
  return <span className={classes}>{message}</span>;
};

import React from 'react';
import { InputProps } from '../types';
import { Skeleton } from './Skeleton';

export const Input = ({ classes }: InputProps): JSX.Element => {
  return (
    <Skeleton classes={classes.container}>
      <Skeleton classes={classes.label} />
      <Skeleton classes={classes.input} />
    </Skeleton>
  );
};

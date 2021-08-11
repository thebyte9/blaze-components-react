import { IModalViewProps } from '../types';
import React from 'react';

export const ModalView = ({ classes, children, ...rest }: IModalViewProps): JSX.Element => {
  return (
    <div className={classes} {...rest}>
      <div className="relative w-auto max-w-3xl mx-auto my-6 rounded rounded-lg bg-modal-container">
        <div className="relative flex flex-col w-full rounded-lg shadow-lg outline-none bg-modal-content focus:outline-none">
          {children}
        </div>
      </div>
    </div>
  );
};

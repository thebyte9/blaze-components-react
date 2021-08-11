import React from 'react';
import { IModalHeader } from '../types';

interface DeprecatedIModalHeaderProps {
  title?: string;
  closeModal: () => void;
}

export const DeprecatedModalHeader = ({ title, closeModal }: DeprecatedIModalHeaderProps): JSX.Element => (
  <>
    <div className="modal__title">{title}</div>
    <div className="modal__close" role="button" onClick={closeModal} data-testid="modal-close">
      <i className="material-icons">close</i>
    </div>
  </>
);

export const ModalHeader = ({ title, onClose, classes }: IModalHeader): any => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <button className={classes.button} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

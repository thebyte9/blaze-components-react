import { Button, ButtonView } from '@blaze-react/button';
import React from 'react';
import { IModalActions, IModalFooter, ModalType } from '../types';

interface IDeprecatedActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface IDeprecatedModalFooterProps {
  footerClassNames: string;
  isAlert?: boolean;
  actions: IDeprecatedActions[];
  closeModal: () => void;
}

export const DeprecatedModalFooter = ({
  footerClassNames,
  closeModal,
  actions,
  isAlert,
}: IDeprecatedModalFooterProps): JSX.Element => (
  <div className={footerClassNames}>
    <div className="modal__button">
      {isAlert && (
        <ButtonView modifiers={['cancel']} onClick={closeModal}>
          Cancel
        </ButtonView>
      )}
      {actions.map(
        ({ textButton, callback, modifiers = [], ...props }: IDeprecatedActions): JSX.Element => (
          <ButtonView key={textButton} modifiers={modifiers} onClick={callback} {...props}>
            {textButton}
          </ButtonView>
        ),
      )}
    </div>
  </div>
);

export const ModalFooter = ({ actions, onClose, type, classes }: IModalFooter): any => {
  const modalFooterActions = () => {
    return actions.map(
      ({ label, onClick, variant, disabled }: IModalActions): JSX.Element => (
        <Button key={label} onClick={onClick} label={label} variant={variant} disabled={disabled} />
      ),
    );
  };

  return (
    <div className={classes}>
      {type === ModalType.ALERT ? <Button onClick={onClose} label="Cancel" /> : modalFooterActions()}
    </div>
  );
};

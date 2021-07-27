import { ButtonView } from '@blaze-react/button';
import React from 'react';

interface IActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface IModalFooterProps {
  footerClassNames: string;
  isAlert?: boolean;
  actions: IActions[];
  closeModal: () => void;
}

const ModalFooter = ({ footerClassNames, closeModal, actions, isAlert }: IModalFooterProps): JSX.Element => (
  <div className={footerClassNames}>
    <div className="modal__button">
      {isAlert && (
        <ButtonView modifiers={['cancel']} onClick={closeModal}>
          Cancel
        </ButtonView>
      )}
      {actions.map(
        ({ textButton, callback, modifiers = [], ...props }: IActions): JSX.Element => (
          <ButtonView key={textButton} modifiers={modifiers} onClick={callback} {...props}>
            {textButton}
          </ButtonView>
        ),
      )}
    </div>
  </div>
);

export default ModalFooter;

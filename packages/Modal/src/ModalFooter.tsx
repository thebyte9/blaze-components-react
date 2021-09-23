import Button from '@blaze-react/button';
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
        <Button modifiers={['cancel']} onClick={closeModal}>
          Cancel
        </Button>
      )}
      {actions.map(
        ({ textButton, callback, modifiers = [], ...props }: IActions): JSX.Element => (
          <Button key={textButton} modifiers={modifiers} onClick={callback} {...props}>
            {textButton}
          </Button>
        ),
      )}
    </div>
  </div>
);

export default ModalFooter;

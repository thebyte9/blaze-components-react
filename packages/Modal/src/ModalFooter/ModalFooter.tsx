import Button from "@blaze-react/button";
import React from "react";

interface IActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface IModalFooterProps {
  footerClassNames: string;
  isAlert: boolean;
  actions: IActions[];
  closeModal: () => void;
}

const ModalFooter = ({
  footerClassNames,
  closeModal,
  actions,
  isAlert
}: IModalFooterProps): JSX.Element => (
  <div className={footerClassNames}>
    <div className="modal__button">
      {isAlert && (
        <Button
          modifiers={[Button.availableModifiers.link]}
          onClick={closeModal}
        >
          Cancel
        </Button>
      )}
      {actions.map(
        ({
          textButton,
          callback,
          modifiers = ["link"]
        }: IActions): JSX.Element => (
          <Button key={textButton} modifiers={modifiers} onClick={callback}>
            {textButton}
          </Button>
        )
      )}
    </div>
  </div>
);

export default ModalFooter;

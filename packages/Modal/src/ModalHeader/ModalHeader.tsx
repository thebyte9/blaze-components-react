import React from "react";

interface IModalHeaderProps {
  title?: string;
  closeModal: () => void;
}

const ModalHeader = ({ title, closeModal }: IModalHeaderProps): JSX.Element => (
  <>
    <div className="modal__title">{title}</div>
    <div className="modal__close" role="button" onClick={closeModal}>
      <i className="material-icons">close</i>
    </div>
  </>
);

export default ModalHeader;

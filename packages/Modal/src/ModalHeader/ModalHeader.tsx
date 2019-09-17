import React from "react";

interface IModalHeaderProps {
  headerClassNames: string;
  title?: string;
  closeModal: () => void;
}

const ModalHeader = ({
  headerClassNames,
  title,
  closeModal
}: IModalHeaderProps): JSX.Element => (
  <div className={headerClassNames}>
    <div className="modal__title">{title}</div>
    <div className="modal__close" role="button" onClick={closeModal}>
      <i className="material-icons">close</i>
    </div>
  </div>
);

export default ModalHeader;

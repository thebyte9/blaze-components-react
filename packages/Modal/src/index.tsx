import Button from "@blaze-react/button";
import React, { Fragment, useState } from "react";
interface IModalProps {
  title?: string;
  buttonText?: string;
  buttonModifiers?: string;
  actions: any[][];
  simple?: boolean;
  upload?: boolean;
  alert?: boolean;
  isActive?: boolean;
  children?: any;
}
const Modal: React.SFC<IModalProps> = ({
  children,
  simple,
  alert,
  title,
  upload,
  actions,
  isActive,
  buttonText,
  buttonModifiers
}) => {
  const [modalStatus, setModalStatus] = useState(isActive);
  const type = () => {
    if (simple) {
      return "--simple";
    }
    if (alert) {
      return "--alert";
    }
    if (upload) {
      return "--upload";
    }
    return "";
  };
  const renderModal = (
    <Fragment>
      <div className="overlay" />
      <div className={`modal modal${type()} modal--show`}>
        <div className={`modal__header modal__header${type()}`}>
          {!alert && <div className="modal__title">{title}</div>}
          {!alert && (
            <div
              className="modal__close"
              role="button"
              onClick={() => setModalStatus(false)}
            >
              <i className="material-icons">close</i>
            </div>
          )}
        </div>
        <div className={`modal__content modal__content${type()}`}>
          {children}
        </div>
        <div className={`modal__footer modal__footer${type()}`}>
          <div className="modal__button">
            {alert && (
              <Button modifiers="link" onClick={() => setModalStatus(false)}>
                Cancel
              </Button>
            )}
            {actions.map(([text, func, modifiers = "link"]) => (
              <Button key={text} modifiers={modifiers} onClick={func}>
                {text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {modalStatus && renderModal}
      {buttonText && (
        <Button
          modifiers={buttonModifiers}
          onClick={() => setModalStatus(!modalStatus)}
        >
          {buttonText}
        </Button>
      )}
    </Fragment>
  );
};
Modal.defaultProps = {
  actions: [],
  alert: false,
  buttonModifiers: "outline",
  buttonText: "",
  children: "No content",
  isActive: false,
  simple: false,
  title: "",
  upload: false
};
export default Modal;

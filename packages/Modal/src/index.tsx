import Button from "@blaze-react/button";
import withUtils from "@blaze-react/utils";
import React, { Fragment, useState } from "react";

interface IActions {
  textButton: string;
  callback: () => void;
  modifiers?: string;
}

interface IModalProps {
  title?: string;
  buttonText?: string;
  buttonModifiers?: string;
  actions: IActions[];
  simple?: boolean;
  upload?: boolean;
  alert?: boolean;
  isActive?: boolean;
  children?: any;
  onClose?: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
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
  buttonModifiers,
  utils: { classNames },
  onClose = () => ({})
}): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean | undefined>(isActive);

  const sections: string[] = ["header", "content", "footer"];

  const closeModal = (): void => {
    setModalStatus(false);
    onClose();
  };

  const modalClassNames: string = classNames("modal modal--show", {
    "modal--alert": alert,
    "modal--simple": simple,
    "modal--upload": upload
  });

  const [
    modalHeaderClassNames,
    modalContentClassNames,
    modalFooterClassNames
  ]: string[] = sections.map(
    (alertType: string): string =>
      classNames(`modal__${alertType}`, {
        [`modal__${alertType}--alert`]: alert,
        [`modal__${alertType}--simple`]: simple,
        [`modal__${alertType}--upload`]: upload
      })
  );

  return (
    <Fragment>
      {modalStatus && (
        <div className="overlay">
          <div className={modalClassNames}>
            <div className={modalHeaderClassNames}>
              {!alert && (
                <Fragment>
                  <div className="modal__title">{title}</div>
                  <div
                    className="modal__close"
                    role="button"
                    onClick={closeModal}
                  >
                    <i className="material-icons">close</i>
                  </div>
                </Fragment>
              )}
            </div>
            <div className={modalContentClassNames}>{children}</div>
            <div className={modalFooterClassNames}>
              <div className="modal__button">
                {alert && (
                  <Button modifiers="link" onClick={closeModal}>
                    Cancel
                  </Button>
                )}
                {actions.map(
                  ({
                    textButton,
                    callback,
                    modifiers = "link"
                  }: IActions): JSX.Element => (
                    <Button
                      key={textButton}
                      modifiers={modifiers}
                      onClick={callback}
                    >
                      {textButton}
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {buttonText && (
        <Button
          modifiers={buttonModifiers}
          onClick={(): void => setModalStatus(!modalStatus)}
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
export default withUtils(Modal);

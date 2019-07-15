import Button from "@blaze-react/button";
import withUtils from "@blaze-react/utils";
import React, { Fragment, useState } from "react";
type TActions = [string, () => void, string?];
interface IModalProps {
  title?: string;
  buttonText?: string;
  buttonModifiers?: string;
  actions: TActions[];
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
  ]: string[] = ["header", "content", "footer"].map(
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
              {!alert && <div className="modal__title">{title}</div>}
              {!alert && (
                <div
                  className="modal__close"
                  role="button"
                  onClick={closeModal}
                >
                  <i className="material-icons">close</i>
                </div>
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
                  ([
                    text,
                    action,
                    modifiers = "link"
                  ]: TActions): JSX.Element => (
                    <Button key={text} modifiers={modifiers} onClick={action}>
                      {text}
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

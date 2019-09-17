import withUtils from "@blaze-react/utils";
import React, { Fragment } from "react";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

interface IActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface IModalProps {
  title?: string;
  buttonModifiers?: string[];
  actions: IActions[];
  isSimple: boolean;
  isUpload: boolean;
  isAlert: boolean;
  overlay?: boolean;
  children?: any;
  onClose?: () => void;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const Modal: React.SFC<IModalProps> = ({
  children,
  isSimple,
  isAlert,
  title,
  isUpload,
  actions,
  overlay,
  utils: { classNames },
  onClose = () => ({})
}): JSX.Element => {
  const sections: string[] = ["header", "content", "footer"];

  const closeModal = (): void => onClose();

  const modalClassNames: string = classNames("modal modal--show", {
    "modal--alert": isAlert,
    "modal--simple": isSimple,
    "modal--upload": isUpload
  });

  const [
    modalHeaderClassNames,
    modalContentClassNames,
    modalFooterClassNames
  ]: string[] = sections.map((alertType: string): string =>
    classNames(`modal__${alertType}`, {
      [`modal__${alertType}--alert`]: isAlert,
      [`modal__${alertType}--simple`]: isSimple,
      [`modal__${alertType}--upload`]: isUpload
    })
  );

  return (
    <Fragment>
      {overlay && <div className="overlay" onClick={closeModal} />}
      <div className={modalClassNames}>
        {!isAlert && (
          <ModalHeader
            headerClassNames={modalHeaderClassNames}
            title={title}
            closeModal={closeModal}
          />
        )}

        <div className={modalContentClassNames}>{children}</div>

        <ModalFooter
          isAlert={isAlert}
          footerClassNames={modalFooterClassNames}
          closeModal={closeModal}
          actions={actions}
        />
      </div>
    </Fragment>
  );
};
Modal.defaultProps = {
  actions: [],
  buttonModifiers: ["outline"],
  children: "No content",
  isAlert: false,
  isSimple: false,
  isUpload: false,
  overlay: true,
  title: ""
};
export default withUtils(Modal);

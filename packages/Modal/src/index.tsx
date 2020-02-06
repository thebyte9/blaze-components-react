import withUtils from "@blaze-react/utils";
import React, { useEffect } from "react";
import { ESCAPE_KEY_CODE } from "./constants";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

interface IActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface IModalProps {
  title?: string;
  actions: IActions[];
  isSimple: boolean;
  isUpload: boolean;
  isFullScreen: boolean;
  isAlert: boolean;
  overlay?: boolean;
  children?: any;
  onClose?: () => void;
  showFooter?: boolean;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
  className: string;
}
const Modal: React.SFC<IModalProps> = ({
  children,
  isSimple,
  isAlert,
  isFullScreen,
  title,
  isUpload,
  actions,
  overlay,
  utils: { classNames },
  className,
  showFooter,
  onClose = () => ({})
}): JSX.Element => {
  const sections: string[] = ["header", "content", "footer"];

  useEffect(() => {
    document.addEventListener("keydown", handleKey, false);

    return () => {
      document.removeEventListener("keydown", handleKey, false);
    };
  }, []);

  const handleKey = ({ keyCode }: any) =>
    keyCode === ESCAPE_KEY_CODE && closeModal();

  const closeModal = (): void => onClose();

  const modalClassNames: string = classNames(`${className} modal modal--show`, {
    "modal--alert": isAlert,
    "modal--full-screen": isFullScreen,
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
      [`modal__${alertType}--upload`]: isUpload,
      [`modal__${alertType}--full-screen`]: isUpload
    })
  );

  return (
    <>
      {overlay && <div className="overlay" onClick={closeModal} />}
      <div className={modalClassNames}>
        <div className={modalHeaderClassNames}>
          {!isAlert && <ModalHeader title={title} closeModal={closeModal} />}
        </div>

        <div className={modalContentClassNames}>{children}</div>

        {showFooter && (
          <ModalFooter
            isAlert={isAlert}
            footerClassNames={modalFooterClassNames}
            closeModal={closeModal}
            actions={actions}
          />
        )}
      </div>
    </>
  );
};
Modal.defaultProps = {
  actions: [],
  children: "No content",
  className: "",
  isAlert: false,
  isFullScreen: false,
  isSimple: false,
  isUpload: false,
  overlay: true,
  showFooter: true,
  title: ""
};
export default withUtils(Modal);

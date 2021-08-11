import { buildClassNames } from '@blaze-react/utils';
import React, { useEffect, FunctionComponent } from 'react';
import { ESCAPE_KEY_CODE } from '../constants';
import { useComponentLogic } from '../hooks/useComponentLogic';
import { DeprecatedModalFooter, ModalFooter } from '../view/ModalFooter';
import { DeprecatedModalHeader, ModalHeader } from '../view/ModalHeader';
import { IModalProps, ModalType } from '../types';
import { ModalView } from '../view/ModalView';

interface DeprecatedIActions {
  textButton: string;
  callback: () => void;
  modifiers?: string[];
}

interface DeprecatedIModalProps {
  title?: string;
  actions: DeprecatedIActions[];
  isSimple?: boolean;
  isUpload?: boolean;
  isFullScreen?: boolean;
  isAlert?: boolean;
  overlay?: boolean;
  children?: any;
  onClose?: () => void;
  showFooter?: boolean;
  className?: string;
}

export const DeprecatedModal: FunctionComponent<DeprecatedIModalProps> = ({
  children,
  isSimple,
  isAlert,
  isFullScreen,
  title,
  isUpload,
  actions,
  overlay,
  className,
  showFooter,
  onClose,
}): JSX.Element => {
  const sections: string[] = ['header', 'content', 'footer'];

  useEffect(() => {
    document.addEventListener('keydown', handleKey, false);

    return () => {
      document.removeEventListener('keydown', handleKey, false);
    };
  }, []);

  const handleKey = ({ keyCode }: any) => keyCode === ESCAPE_KEY_CODE && closeModal();

  const closeModal = (): void => onClose();

  const handleOverlay = (): void => {
    if (overlay) {
      closeModal();
    }
  };

  const modalClassNames: string = buildClassNames(`${className} modal modal--show`, {
    'modal--alert': isAlert,
    'modal--full-screen': isFullScreen,
    'modal--simple': isSimple,
    'modal--upload': isUpload,
  });

  const [modalHeaderClassNames, modalContentClassNames, modalFooterClassNames]: string[] = sections.map(
    (alertType: string): string =>
      buildClassNames(`modal__${alertType}`, {
        [`modal__${alertType}--alert`]: isAlert,
        [`modal__${alertType}--simple`]: isSimple,
        [`modal__${alertType}--upload`]: isUpload,
        [`modal__${alertType}--full-screen`]: isUpload,
      }),
  );

  return (
    <>
      <div className="overlay" onClick={handleOverlay} data-testid="overlay" />
      <div className={modalClassNames} data-testid="modal">
        <div className={modalHeaderClassNames}>
          {!isAlert && <DeprecatedModalHeader title={title} closeModal={closeModal} />}
        </div>

        <div className={modalContentClassNames}>{children}</div>

        {showFooter && (
          <DeprecatedModalFooter
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

export const Modal = ({
  type = ModalType.OVERLAY,
  title,
  onClose,
  children,
  actions,
  showFooter,
  theme,
  variant = 'default',
  overrides,
  ...rest
}: IModalProps): any => {
  const { container, header, footer } = useComponentLogic({
    componentVariant: variant,
    theme: theme,
    overrides: overrides,
  });

  return (
    <>
      <ModalView classes={container} {...rest}>
        {type !== ModalType.ALERT && <ModalHeader classes={header} title={title} onClose={onClose}></ModalHeader>}
        {children}
        {showFooter && <ModalFooter classes={footer} onClose={onClose} actions={actions} type={type}></ModalFooter>}
      </ModalView>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

DeprecatedModal.defaultProps = {
  actions: [],
  children: 'No content',
  className: '',
  isAlert: false,
  isFullScreen: false,
  isSimple: false,
  isUpload: false,
  overlay: true,
  showFooter: true,
  title: '',
};

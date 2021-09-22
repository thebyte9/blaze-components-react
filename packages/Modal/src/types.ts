import { ThemeType } from '@blaze-react/themes';

export interface IModalActions {
  label: string;
  onClick: () => void;
  variant?: string | 'default';
  disabled?: boolean;
}

export enum ModalType {
  SIMPLE = 'simple',
  UPLOAD = 'upload',
  FULLSCREEN = 'fullscreen',
  ALERT = 'alert',
  OVERLAY = 'overlay',
}

export interface IModalViewProps {
  classes: string;
  children?: JSX.Element | JSX.Element[];
}

export interface IModalBaseProps {
  variant?: string | 'default';
  overrides?: string[];
  theme?: ThemeType;
  title?: string;
  actions?: IModalActions[];
  type?: ModalType;
  onClose: () => void;
}

export interface IModalProps extends IModalBaseProps {
  children?: JSX.Element;
  showFooter?: boolean;
}

export interface IModalHeader extends IModalBaseProps {
  classes: {
    container: string;
    title: string;
    button: string;
  };
}

export interface IModalFooter extends IModalBaseProps {
  classes: string;
}

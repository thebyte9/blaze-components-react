import { ThemeType } from '@blaze-react/themes';

export type TType = 'button' | 'submit' | 'reset';

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

// Variants enum is used only on Storybook. Theming variants are dynamically defined inside a Theme object.
export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum DisplayIconProps {
  Left = 'left',
  Right = 'right',
  NoIcon = 'no-icon',
}

export interface IButtonProps extends IButtonViewProps {
  variant?: Variants;
  displayIcon?: 'left' | 'right' | 'no-icon';
  iconOnly?: boolean;
  icon?: string;
  overrides?: string[];
  theme?: ThemeType;
}

export interface IButtonViewProps {
  label?: string;
  disabled?: boolean;
  children?: unknown;
  classes?: string;
  modifiers?: string[];
  type?: TType;
  onClick?: () => void;
}

export type TType = 'button' | 'submit' | 'reset';

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export enum Variants {
  Primary = 'primary',
  Disabled = 'disabled',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Stretched = 'stretched',
}

export enum VariantsGroup {
  Filled = 'filled',
  Outlined = 'outlined',
  Text = 'text',
}

export enum DisplayIconProps {
  Left = 'left',
  Right = 'right',
  NoIcon = 'no-icon',
}

export interface IButtonControllerProps {
  label?: string;
  disabled?: boolean;
  children?: unknown;
  utilities?: string;
  modifiers?: string[];
  type?: TType;
  variantsGroup?: VariantsGroup;
  variant?: Variants;
  displayIcon?: 'left' | 'right' | 'no-icon';
  iconOnly?: boolean;
  icon?: string;
  overrides?: string;
}

export interface IButtonProps {
  label?: string;
  disabled?: boolean;
  children?: unknown;
  utilities?: string;
  modifiers?: string[];
  type?: TType;
}

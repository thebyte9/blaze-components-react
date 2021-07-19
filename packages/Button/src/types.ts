export type TType = 'button' | 'submit' | 'reset';

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Disabled = 'disabled',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Stretched = 'stretched',
  IconRight = 'iconRight',
  IconLeft = 'iconLeft',
  IconOnly = 'iconOnly',
}

export enum VariantGroup {
  Filled = 'filled',
  Outline = 'outline',
  Text = 'text',
}

export interface IButtonProps {
  label?: string;
  disabled?: boolean;
  children?: unknown;
  utilities?: string;
  modifiers?: string[];
  type?: TType;
  variantGroup?: VariantGroup;
  variant?: Variants;
  displayIcon?: 'left' | 'right' | 'no-icon';
  iconOnly?: boolean;
  icon?: string;
}

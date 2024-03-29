export interface CustomIconProps {
  children?: unknown;
  content?: string;
  classes?: string;
}

export enum IconDisplayType {
  Left = 'left',
  Right = 'right',
  NoIcon = 'no-icon',
}

export interface IconProps {
  display: IconDisplayType;
  iconOnly?: boolean;
  label: string;
  icon: string;
}

export interface SvgIconProps {
  children?: unknown;
  svg?: string;
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

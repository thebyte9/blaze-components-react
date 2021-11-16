import { ThemeType } from '@blaze-react/themes';

export interface SkeletonProps {
  classes: string;
  children?: JSX.Element | JSX.Element[];
  variant?: string | 'default';
  theme?: ThemeType;
  overrides?: string[];
}

export interface InputProps {
  classes: {
    container: string;
    label: string;
    input: string;
  };
  children?: JSX.Element | JSX.Element[];
}

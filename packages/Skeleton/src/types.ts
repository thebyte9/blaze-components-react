export interface SkeletonProps {
  classes: string;
  children?: JSX.Element | JSX.Element[];
}

export interface InputProps {
  classes: {
    container: string;
    label: string;
    input: string;
  };
  children?: JSX.Element | JSX.Element[];
}

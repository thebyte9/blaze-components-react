import { ThemeType } from '@blaze-react/themes';

export enum InputType {
  Checkbox = 'Checkbox',
  Date = 'Date',
  Email = 'Email',
  Field = 'Field',
  Number = 'Number',
  Password = 'Password',
  Radio = 'Radio',
  Search = 'Search',
  Tel = 'Tel',
  Text = 'Text',
  Textarea = 'Textarea',
  Time = 'Time',
  Url = 'Url',
  Week = 'Week',
}

export enum LayoutType {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export enum DisplayErrorAs {
  Icon = 'icon',
  Message = 'message',
}

export enum InputState {
  Warning = 'warning',
  Error = 'error',
  Loading = 'loading',
  Success = 'success',
}

export interface TextInputIcon {
  icon: string;
}

export interface TextInputDefaultIcon {
  classes: TextInputClasses;
  currentState: InputState;
}

export interface TextInputVariant {
  container: string;
  label: string;
  input: string;
  icon: string;
  message: string;
}

export interface TextInputClasses {
  warning: TextInputVariant;
  error: TextInputVariant;
  loading: TextInputVariant;
  success: TextInputVariant;
}
export interface TextInputProps {
  icon?: TextInputIcon;
  label: string;
  layout: LayoutType;
  placeholder: string;
  classes: TextInputClasses;
  loading?: boolean;
  errorMessage: string;
  displayError: DisplayErrorAs;
  currentState: InputState;
  type: InputType;
}

export interface InputControllerProps extends TextInputProps {
  theme: ThemeType;
  overrides?: string[];
  error?: boolean;
}

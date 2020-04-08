import { FunctionComponent } from "react";
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IData {
  id?: string;
  checked?: boolean;
  show?: boolean;
}

interface IMultiSelectProps {
  data: {
    identification: string;
    keyValue: string;
    filterBy: any[];
    data: object[];
  };
  getSelected: (...args: any[]) => any;
  label?: string;
  limit?: number;
  placeholder?: string;
  id?: string;
  children?: any;
  notFoundMessage?: string;
  required?: boolean;
  limitReachedMessage?: string;
  onChange?: (arg: { event: Event; value: string; name: string }) => void;
  error?: boolean;
  name: string;
  validationMessage: string | JSX.Element;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
    uniqueId: (element: any) => string;
  };
}

export { IErrorMessage, IData, IMultiSelectProps };

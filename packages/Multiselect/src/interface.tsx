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
  onItemsRendered: (...args: any[]) => Promise<any>;
  label?: string;
  limit?: number;
  placeholder?: string;
  id?: string;
  notFoundMessage?: string;
  searchTerm?: any;
  required?: boolean;
  isDynamic?: boolean;
  limitReachedMessage?: string;
  onChange?: (arg: {
    event: Event;
    value: string;
    name: string;
    clearList: () => void;
  }) => void;
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

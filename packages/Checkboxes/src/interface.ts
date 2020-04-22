import { FunctionComponent } from "react";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface ICheckBoxesProps {
  options?: any[] | object;
  returnBoolean?: boolean;
  onChange: ({
    event,
    value,
    data,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    value: boolean | object;
    data: object[];
  }) => void;
  error?: boolean;
  name?: string;
  validationMessage: string | JSX.Element;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}

export { IErrorMessage, ICheckBoxesProps };

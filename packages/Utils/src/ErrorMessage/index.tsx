import React, { FunctionComponent } from "react";
interface IErrorMessage {
  message: string | JSX.Element | undefined;
  icon?: string;
}

const ErrorMessage: FunctionComponent<IErrorMessage> = ({
  message,
  icon
}): JSX.Element => {
  return (
    <div className="validation" data-testid="validation-message">
      <i className="material-icons">{icon}</i>
      {message}
    </div>
  );
};

ErrorMessage.defaultProps = {
  icon: "warning"
};

export default ErrorMessage;

import classNames from "classnames";
import React, { FunctionComponent } from "react";
import ErrorMessage from "./ErrorMessage";
import uniqueId from "./uniqueId";

export default (ChildComponent: any) => {
  const WithUtils: FunctionComponent = (props: object): JSX.Element => {
    const utils = {
      ErrorMessage,
      classNames,
      uniqueId
    };
    return <ChildComponent utils={utils} {...props} />;
  };
  return WithUtils;
};

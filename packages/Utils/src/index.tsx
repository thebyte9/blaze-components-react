import classNames from "classnames";
import hoistStatics from "hoist-non-react-statics";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import BCREventBus from "./eventBus";
import removeExtraSpaces from "./removeExtraSpaces";
import uniqueId from "./uniqueId";

const withUtils = (Component: any) => {
  const InnerComponent = (props: object): JSX.Element => {
    const utils = {
      BCREventBus,
      ErrorMessage,
      classNames,
      removeExtraSpaces,
      uniqueId,
    };
    return <Component utils={utils} {...props} />;
  };

  InnerComponent.displayName = `withUtils(${
    Component.displayName || Component.name
  })`;
  InnerComponent.WrappedComponent = Component;

  return hoistStatics(InnerComponent, Component);
};

withUtils.displayName = "withUtils";

export default withUtils;

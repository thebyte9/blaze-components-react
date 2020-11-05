import hoistStatics from "hoist-non-react-statics";
import React from "react";

const withUtils = (Component: any) => {
  const InnerComponent = (props: object): JSX.Element => {
    const utils = new Proxy(
      {
        ErrorMessage: () => require("./ErrorMessage").default,
        classNames: () => require("classnames"),
        parseTextBlock: () => require("./text-block-parser").default,
        removeExtraSpaces: () => require("./removeExtraSpaces").default,
        uniqueId: () => require("./uniqueId").default,
      },
      {
        get(target, property) {
          if (property in target) {
            return target[property]();
          }
        },
      }
    );

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

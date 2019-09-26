import React, { FunctionComponent } from "react";

export default (ChildComponent: any) => {
  const WithUtils: FunctionComponent = (props: object): JSX.Element => {
    const utils = new Proxy(
      {},
      {
        get({}, libName: string) {
          const allowedLibraries: string[] = [
            "classNames",
            "ErrorMessage",
            "uniqueId",
            "useDebounce"
          ];
          if (allowedLibraries.includes(libName)) {
            return require(`./${libName}`).default;
          }
        }
      }
    );
    return <ChildComponent utils={utils} {...props} />;
  };
  return WithUtils;
};

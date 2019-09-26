import React, { FunctionComponent } from "react";

export default (ChildComponent: any) => {
  const WithUtils: FunctionComponent = (props: object): JSX.Element => {
    const handler = {
      get({}, utilName: string) {
        const allowedLibraries: string[] = [
          "classNames",
          "ErrorMessage",
          "uniqueId",
          "useDebounce"
        ];
        if (allowedLibraries.includes(utilName)) {
          return require(`./${utilName}`).default;
        }
      }
    };
    const utils = new Proxy({}, handler);
    return <ChildComponent utils={utils} {...props} />;
  };
  return WithUtils;
};

// import React, { FunctionComponent } from "react";

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

export default utils;

// export default (ChildComponent: any) => {
//   const WithUtils: FunctionComponent = (props: object): JSX.Element => {
//     const utils = new Proxy(
//       {},
//       {
//         get({}, libName: string) {
//           const allowedLibraries: string[] = [
//             "classNames",
//             "ErrorMessage",
//             "uniqueId",
//             "useDebounce"
//           ];
//           if (libName === "uniqueId") {
//             return (async () => {
//               const a = await import(`./${libName}`);
//               return a.default;
//             })();
//           }
//           if (allowedLibraries.includes(libName)) {
//             return require(`./${libName}`).default;
//           }
//         }
//       }
//     );
//     return <ChildComponent utils={utils} {...props} />;
//   };
//   return WithUtils;
// };

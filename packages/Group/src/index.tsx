
// // import  { useTheme } from "@blaze-react/utils/src/customHooks";
// import React, { ButtonHTMLAttributes } from "react";

// type TType = "button" | "submit" | "reset";

// interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   disabled?: boolean;
//   children?: JSX.Element | string;
//   type?: TType;
//   modifiers?: string[];
//   utils: {
//     buildClassNames: (className: string | object, optionalClassNames?: object) => string;
//     useTheme: (componentName: string) => string
//   };
// }

// const Group = 
//   ({
//     disabled,
//     type,
//     children,
//     modifiers = [],
//     utils: { buildClassNames },
//     ...attrs
//   }: IButtonProps): JSX.Element => {
//     const formatedModifiers: string = modifiers
//       .map((modifier) => `button--${modifier}`)
//       .join(" ");
//     const buttonClassNames: string = buildClassNames("button", {
//       [formatedModifiers]: !!modifiers,
//     });

//     return (
//       <button
//         disabled={disabled}
//         className={buttonClassNames}
//         type={type}
//         {...attrs}
//       >
//         {children}
//       </button>
//     );
//   }


// Group.defaultProps = {
//   children: "",
//   disabled: false,
//   type: "button",
// };

// export default Group;

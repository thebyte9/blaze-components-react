import React from "react";
interface IButtonProps {
    disabled?: boolean;
    submit?: boolean;
    children?: JSX.Element | string;
    modifiers?: string;
    attrs?: any;
}
declare const Button: React.SFC<IButtonProps>;
export default Button;

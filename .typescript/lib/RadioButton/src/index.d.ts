import React from "react";
interface IRadioButtonProps {
    options: any[];
    required?: boolean;
    onChange: (...args: any[]) => any;
}
declare const RadioButton: React.SFC<IRadioButtonProps>;
export default RadioButton;

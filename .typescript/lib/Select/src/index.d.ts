import React, { InputHTMLAttributes } from "react";
interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    label?: string;
    keys?: any[];
    options: any[];
    required?: boolean;
    onChange: (...args: any[]) => any;
    selected?: any;
    id?: string;
}
declare const Select: React.SFC<ISelectProps>;
export default Select;

import React from "react";
interface IMultiSelectProps {
    data: {
        keyValue: string;
        filterBy: any[];
        data: object[];
    };
    selected: (...args: any[]) => any;
    placeholder?: string;
    children?: any;
}
declare const MultiSelect: React.SFC<IMultiSelectProps>;
export default MultiSelect;

import React from "react";
interface IProgressProps {
    progress: number;
    type?: string | any;
    steps: any[];
    onChange: (...args: any[]) => any;
}
declare const Progress: React.SFC<IProgressProps>;
export default Progress;

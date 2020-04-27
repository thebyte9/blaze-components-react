interface IDateRangeProps {
    children?: any;
    onChange: (args: IOnChangeArguments) => void;
    selected: 1 | 2 | 3 | 7 | 30 | 12 | "custom" | "any";
}
interface ISubtract {
    value: number | string;
    type: string;
}
interface IOnChangeArguments {
    end?: string;
    start?: string;
    selectedDate?: string;
}
export { IDateRangeProps, ISubtract, IOnChangeArguments };

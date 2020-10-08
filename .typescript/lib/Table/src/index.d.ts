import { FunctionComponent } from "react";
interface ITableProps {
    placeholder?: string;
    checkboxes?: boolean;
    data: {
        identification: string;
        columns: string[];
        orderBy: string[];
        rows: object[];
        appliedSort?: any;
        labels: object;
    };
    value?: string;
    overScanBuffer?: number;
    onSelect?: (arg: any[]) => any;
    onSort?: (arg: any) => any;
    onRenderItems?: (arg: any) => void;
    onClickRow?: (arg: any) => void;
    scrollToIndex?: number;
}
declare const Table: FunctionComponent<ITableProps>;
export default Table;

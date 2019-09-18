import { FunctionComponent } from "react";
interface ITableProps {
    placeholder?: string;
    checkboxes?: boolean;
    data: {
        identification: string;
        columns: string[];
        orderBy: string[];
        rows: object[];
    };
    value?: string;
    onSelect?: (arg: any[]) => any;
}
declare const Table: FunctionComponent<ITableProps>;
export default Table;

import Checkboxes from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import React from "react";
interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}
interface ITableBody {
  allRows: object[];
  checkboxes?: boolean;
  identification: string;
  selected: any[];
  handleSelected: (
    checked: ICheckbox[],
    value: string | ICheckbox[],
    isMultiselect?: boolean
  ) => void;
  columns: string[];
  placeholder: string | JSX.Element;
  utils: {
    uniqueId: (element: any) => string;
  };
}

const TableBody = ({
  allRows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  utils: { uniqueId }
}: ITableBody): JSX.Element => (
  <tbody>
    {allRows.map(
      (row: object, key: number): JSX.Element => (
        <tr key={uniqueId(row)} data-testid={`tablerow-${key + 1}`}>
          {checkboxes && (
            <td>
              <Checkboxes
                data-testid={`row-checkbox-${key + 1}`}
                options={{
                  checked: selected.includes(row[identification]),
                  id: row[identification],
                  value: row[identification]
                }}
                onChange={({ value }: { value: ICheckbox[] }): void =>
                  handleSelected(value, row[identification])
                }
              />
            </td>
          )}
          {columns.map(
            (column: string): JSX.Element => (
              <td key={column}>{row[column]}</td>
            )
          )}
        </tr>
      )
    )}
    {!allRows.length && (
      <tr>
        <td
          colSpan={checkboxes ? columns.length + 1 : columns.length}
          align="center"
        >
          {placeholder}
        </td>
      </tr>
    )}
  </tbody>
);

export default withUtils(TableBody);

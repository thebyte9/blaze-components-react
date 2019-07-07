import Checkboxes from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import React from "react";

interface ITableBody {
  allRows: object[];
  checkboxes?: boolean;
  identification: string;
  selected: any[];
  handleSelected: (checked: object[], value: string, isMultiselect?: boolean) => void;
  columns: string[];
  placeholder: string | JSX.Element;
  utils: {
    uniqueId: (element: any) => string
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
  utils: {
    uniqueId
  }
}: ITableBody): JSX.Element => (
    <tbody>
      {allRows.map((row: any) => (
        <tr key={uniqueId(row)}>
          {checkboxes && (
            <td>
              <Checkboxes
                options={[
                  {
                    checked: selected.includes(row[identification]),
                    id: row[identification],
                    value: row[identification]
                  }
                ]}
                onChange={({ checked }: any): void =>
                  handleSelected(checked, row[identification])
                }
              />
            </td>
          )}
          {columns.map((column: any): JSX.Element => (
            <td key={column}>{row[column]}</td>
          ))}
        </tr>
      ))}
      {!allRows.length && (
        <tr>
          <td colSpan={checkboxes ? columns.length + 1 : columns.length} align="center">
            {placeholder}
          </td>
        </tr>
      )}
    </tbody>
  );

export default withUtils(TableBody);

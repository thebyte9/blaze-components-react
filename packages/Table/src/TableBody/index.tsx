import Checkboxes from "@blaze-react/checkboxes";
import utils from "@blaze-react/utils";
import React from "react";

interface ITableBody {
  allRows: any;
  checkboxes: any;
  identification: any;
  selected: any;
  handleSelected: any;
  columns: any;
  placeholder: any;
  colSpan: any;
  utils: { uniqueId: any };
}

const TableBody = ({
  allRows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  colSpan,
  utils: { uniqueId }
}: ITableBody) => (
  <tbody>
    {allRows.map((row: any) => (
      <tr key={uniqueId(row)}>
        {checkboxes && (
          <td>
            <Checkboxes
              withEffect
              options={[
                {
                  checked: selected.includes(row[identification]),
                  id: row[identification],
                  value: row[identification]
                }
              ]}
              onChange={({ checked }: any) =>
                handleSelected(checked, row[identification])
              }
            />
          </td>
        )}
        {columns.map((column: any) => (
          <td key={column}>{row[column]}</td>
        ))}
      </tr>
    ))}
    {!allRows.length && (
      <tr>
        <td colSpan={colSpan} align="center">
          {placeholder}
        </td>
      </tr>
    )}
  </tbody>
);

export default utils(TableBody);

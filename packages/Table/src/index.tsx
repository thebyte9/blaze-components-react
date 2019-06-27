import Checkboxes from "@blaze-react/checkboxes";
import orderBy from "lodash.orderby";
import React, { FunctionComponent, useEffect, useState } from "react";
import uuidv1 from "uuid/v1";

interface ITableProps {
  placeholder?: string;
  checkboxes?: boolean;
  data: {
    identification: string;
    columns: string[];
    rows: any[];
  };
  value?: string;
  onSelect: (...args: any[]) => any;
}
const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification },
  onSelect,
  checkboxes,
  placeholder,
  value
}) => {
  const [selected, setSelected] = useState<any[]>([]);
  const [allRows, setRows] = useState(rows);
  const [sortColumns, setSortColumns] = useState(
    columns.reduce((result, item) => ({ ...result, [item]: "asc" }), {})
  );

  const handleSelected = (
    [checked]: [{ checked: boolean; id: string | number; value: any }],
    multiselect = false
  ) => {
    if (multiselect) {
      let checkedValue = [];
      if (checked) {
        checkedValue = Array.isArray(checked.value)
          ? [...checked.value]
          : [checked.value];
      }
      setSelected(checkedValue);
      return;
    }
    if (checked && !selected.includes(checked.value)) {
      setSelected([...selected, checked.value]);
    } else {
      setSelected(selected.filter(currentValue => currentValue !== value));
    }
  };

  const sort = (column: any) => {
    setRows([...orderBy(allRows, [column], [sortColumns[column]])]);

    setSortColumns({
      ...sortColumns,
      [column]: sortColumns[column] === "asc" ? "desc" : "asc"
    });
  };

  useEffect(() => onSelect(selected));
  const colSpan = checkboxes ? columns.length + 1 : columns.length;
  const thead = (
    <thead>
      <tr>
        {checkboxes && (
          <th>
            <Checkboxes
              withEffect
              options={[
                Object.assign(
                  {},
                  {
                    checked: selected.length === allRows.length,
                    id: "Select_all",
                    value: allRows.map(row => row[identification])
                  }
                )
              ]}
              onChange={({ checked }: { checked: any }) =>
                handleSelected(checked, true)
              }
            />
          </th>
        )}
        {Object.keys(sortColumns).map(column => (
          <th key={column || uuidv1()}>
            {column}
            <i
              id={`sort_${column}`}
              className="material-icons"
              onClick={() => sort(column)}
              role="button"
            >
              {sortColumns[column] === "asc"
                ? "keyboard_arrow_up"
                : "keyboard_arrow_down"}
            </i>
          </th>
        ))}
      </tr>
    </thead>
  );
  const tbody = (
    <tbody>
      {allRows.map(row => (
        <tr key={row.id || uuidv1()}>
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
          {columns.map(column => (
            <td key={`${row.id}${row[column]}` || uuidv1()}>{row[column]}</td>
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
  return (
    <div className="table-scroll__wrapper">
      <div className="table-scroll">
        <table>
          {thead}
          {tbody}
        </table>
      </div>
    </div>
  );
};

Table.defaultProps = {
  checkboxes: false,
  data: {
    columns: [],
    identification: "",
    rows: []
  },
  onSelect: (): void => {
    return;
  },
  placeholder: "No records available"
};
export default Table;

import _orderBy from "lodash.orderby";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

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
  onSelect: (arg: any[]) => any;
}
const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy },
  onSelect,
  checkboxes,
  placeholder
}) => {
  const formatColumns = columns.reduce((result, item) => ({ ...result, [item]: "asc" }), {})

  const [selected, setSelected] = useState<any[]>([]);
  const [allRows, setRows] = useState<object[]>(rows);
  const [sortColumns, setSortColumns] = useState(formatColumns);

  useEffect(() => {
    setRows(rows);
    setSortColumns(formatColumns);
    onSelect(selected)
  }, [rows, columns, selected]);

  const handleSelected = (
    [checked]: [{ checked: boolean; id: string | number; value: any }],
    value: string,
    multiselect = false
  ): void => {
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
    setRows([..._orderBy(allRows, [column], [sortColumns[column]])]);
    setSortColumns({
      ...sortColumns,
      [column]: sortColumns[column] === "asc" ? "desc" : "asc"
    });
  };

  const enableOrderBy = (column: string) =>
    <Fragment>
      {
        orderBy.includes(column) && (
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
        )
      }
    </Fragment>

  return (
    <div className="table-scroll__wrapper">
      <div className="table-scroll">
        <table>
          <TableHead
            checkboxes={checkboxes}
            selected={selected}
            identification={identification}
            allRows={allRows}
            handleSelected={handleSelected}
            enableOrderBy={enableOrderBy}
            sortColumns={sortColumns}
          />
          <TableBody
            allRows={allRows}
            checkboxes={checkboxes}
            identification={identification}
            selected={selected}
            handleSelected={handleSelected}
            columns={columns}
            placeholder={placeholder}
          />
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
    orderBy: [],
    rows: []
  },
  onSelect: (): void => {
    return;
  },
  placeholder: "No records available"
};
export default Table;
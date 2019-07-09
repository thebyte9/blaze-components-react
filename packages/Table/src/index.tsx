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
  onSelect?: (arg: any[]) => any;
}
const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy },
  onSelect = () => {
    return;
  },
  checkboxes,
  placeholder
}) => {
  const asc: string = "asc";
  const desc: string = "desc";

  const formatColumns = columns.reduce(
    (result, item) => ({ ...result, [item]: asc }),
    {}
  );

  const [selected, setSelected] = useState<any[]>([]);
  const [sortColumns, setSortColumns] = useState(formatColumns);
  const [allRows, setRows] = useState<object[]>(rows);

  useEffect(() => {
    setRows(rows);
    setSortColumns(formatColumns);
  }, [rows, columns]);

  const handleSelected = (
    [checked]: [{ checked: boolean; id: string | number; value: any }],
    value: string,
    multiselect = false
  ): void => {
    let checkedValue = [];

    if (checked && !selected.includes(checked.value)) {
      checkedValue = [...selected, checked.value];
    } else {
      checkedValue = selected.filter(currentValue => currentValue !== value);
    }

    if (multiselect) {
      checkedValue = checked ? [...checked.value] : [];
    }

    updateSelected(checkedValue);
  };

  const updateSelected = (selectedRows: any[]) => {
    setSelected(selectedRows);
    onSelect(selectedRows);
  };

  const sort = (column: any) => {
    setRows([..._orderBy(allRows, [column], [sortColumns[column]])]);
    setSortColumns({
      ...sortColumns,
      [column]: sortColumns[column] === asc ? desc : asc
    });
  };

  const enableOrderBy = (column: string): JSX.Element => (
    <Fragment>
      {orderBy.includes(column) && (
        <i
          data-testid={`sortby-${column}`}
          className="material-icons"
          onClick={() => sort(column)}
          role="button"
        >
          {sortColumns[column] === asc
            ? "keyboard_arrow_up"
            : "keyboard_arrow_down"}
        </i>
      )}
    </Fragment>
  );

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
  placeholder: "No records available"
};
export default Table;

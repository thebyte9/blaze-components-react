import _orderBy from "lodash.orderby";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}
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
  onSelect = () => ({}),
  checkboxes,
  placeholder
}) => {
  type TSortDirection = "asc" | "desc" | boolean;

  const asc: TSortDirection = "asc";
  const desc: TSortDirection = "desc";
  const hide: TSortDirection = true;

  const formatColumns = columns.reduce((result, item) => {
    return { ...result, [item]: hide };
  }, {});

  const [selected, setSelected] = useState<any[]>([]);
  const [sortColumns, setSortColumns] = useState(formatColumns);
  const [allRows, setRows] = useState<object[]>(rows);

  useEffect(() => {
    setRows(rows);
    setSortColumns(formatColumns);
  }, [rows, columns]);

  const handleSelected = (
    [checked]: ICheckbox[],
    value: string | ICheckbox[],
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

  const getSortDirection = (column: string): TSortDirection => {
    if (sortColumns[column] === hide) {
      return asc;
    }
    return sortColumns[column] === asc ? desc : asc;
  };

  const sort = (column: any) => {
    if (!orderBy.includes(column)) {
      return;
    }

    const resetSortColumns = {};

    Object.keys(sortColumns).forEach(key => (resetSortColumns[key] = hide));

    const sortDirection = getSortDirection(column);

    setRows([..._orderBy(allRows, [column], [sortDirection])]);

    setSortColumns({
      ...resetSortColumns,
      [column]: sortDirection
    });
  };

  const enableOrderBy = (column: string): JSX.Element => (
    <Fragment>
      <span
        data-testid={`sortby-${column}`}
        onClick={() => sort(column)}
        role="button"
      >
        {column}
      </span>
      {sortColumns[column] !== hide && (
        <i className="material-icons">
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

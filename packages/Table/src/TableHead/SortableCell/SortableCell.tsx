import React, { useEffect, useState } from "react";

const SortableCell = ({
  onSort,
  orderBy,
  column,
  columns,
  appliedSort
}: {
  onSort: any;
  orderBy: any;
  column: any;
  columns: any;
  appliedSort: any;
}) => {
  const formatColumns = columns.reduce((acc: any, item: any): any => {
    return { ...acc, [item]: null };
  }, {});
  const [tableColumns, setTableColumns] = useState(formatColumns);

  type TSortDirection = "asc" | "desc" | null;
  const asc: TSortDirection = "asc";
  const desc: TSortDirection = "desc";
  const hide: TSortDirection = null;

  const getSortDirection = (col: string): TSortDirection => {
    if (tableColumns[col] === hide) {
      return asc;
    }
    return tableColumns[col] === asc ? desc : asc;
  };

  const sort = (col: any) => {
    if (!orderBy.includes(col)) {
      return;
    }

    const resetTableColumns = Object.keys(tableColumns).reduce(
      (acc: any, key: any) => {
        acc[key] = hide;
        return acc;
      },
      {}
    );

    const sortDirection = getSortDirection(column);

    setTableColumns({
      ...resetTableColumns,
      [column]: sortDirection
    });

    onSort({
      [column]: sortDirection
    });
  };

  useEffect(() => {
    if (appliedSort) {
      const [[col, direction]] = appliedSort && Object.entries(appliedSort);
      if (tableColumns[col] !== direction) {
        const merged = {
          ...tableColumns,
          [col]: "asc"
        };

        setTableColumns(merged);
      }
    }
  }, [appliedSort]);

  return (
    <div className="sortable">
      <span
        data-testid={`sortby-${column}`}
        onClick={() => sort(column)}
        role="button"
      >
        {column}
      </span>

      {tableColumns[column] !== hide && (
        <i className="material-icons">
          {tableColumns[column] === asc
            ? "keyboard_arrow_up"
            : "keyboard_arrow_down"}
        </i>
      )}
    </div>
  );
};

export default SortableCell;

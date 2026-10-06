import React, { KeyboardEvent, useEffect, useState } from 'react';

interface IMap {
  [index: string]: any;
}

const SortableCell = ({
  onSort,
  orderBy,
  column,
  columns,
  appliedSort,
  labels,
}: {
  onSort: any;
  orderBy: any;
  column: any;
  columns: any;
  appliedSort: any;
  labels: IMap;
}) => {
  const formatColumns = columns.reduce((acc: any, item: any): any => {
    return { ...acc, [item]: null };
  }, {});
  const [tableColumns, setTableColumns] = useState(formatColumns);

  type TSortDirection = 'asc' | 'desc' | null;
  const asc: TSortDirection = 'asc';
  const desc: TSortDirection = 'desc';
  const hide: TSortDirection = null;

  const getSortDirection = (col: string): TSortDirection => {
    if (tableColumns[col] === hide) {
      return asc;
    }
    return tableColumns[col] === asc ? desc : asc;
  };

  const isSortable = orderBy.includes(column);

  const sort = () => {
    if (!isSortable) {
      return;
    }

    const resetTableColumns = Object.keys(tableColumns).reduce((acc: any, key: any) => {
      acc[key] = hide;
      return acc;
    }, {});

    const sortDirection = getSortDirection(column);

    setTableColumns({
      ...resetTableColumns,
      [column]: sortDirection,
    });

    onSort({
      [column]: sortDirection,
    });
  };

  useEffect(() => {
    if (appliedSort) {
      const [[col, direction]] = Object.entries(appliedSort);
      if (tableColumns[col] !== direction) {
        const merged = {
          ...tableColumns,
          [col]: direction,
        };

        setTableColumns(merged);
      }
    }
  }, [appliedSort]);

  const currentDirection = tableColumns[column];

  if (!isSortable) {
    return (
      <div className="sortable">
        <span data-testid={`sortby-${column}`}>{labels[column]}</span>
      </div>
    );
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      sort();
    }
  };

  return (
    <div
      className={`sortable sortable--enabled${currentDirection !== hide ? ' sortable--active' : ''}`}
      onClick={sort}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <span data-testid={`sortby-${column}`}>{labels[column]}</span>

      <i className="material-icons sortable__arrow" aria-hidden="true">
        {currentDirection === desc ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
      </i>
    </div>
  );
};

export default SortableCell;

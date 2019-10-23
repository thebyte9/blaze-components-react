import withUtils from "@blaze-react/utils";
import React from "react";
import SortableCell from "./SortableCell";

interface ITableHead {
  columns: any;
  headRef: any;
  onSort: any;
  utils: {
    uniqueId: (element: any) => string;
  };
  orderBy: any;
  appliedSort: any;
}

const TableHead = ({
  onSort,
  orderBy,
  columns,
  utils: { uniqueId },
  headRef,
  appliedSort
}: ITableHead): JSX.Element => (
  <div className="table-head" ref={headRef}>
    <div className="table-cell--checkbox"></div>
    {columns.map(
      (column: string): JSX.Element => (
        <div key={uniqueId(column)} className="table-cell">
          <SortableCell
            appliedSort={appliedSort}
            onSort={onSort}
            orderBy={orderBy}
            column={column}
            columns={columns}
          />
        </div>
      )
    )}
  </div>
);

export default withUtils(TableHead);

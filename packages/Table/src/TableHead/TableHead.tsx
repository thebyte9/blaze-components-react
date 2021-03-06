import React from 'react';
import SortableCell from './SortableCell';

interface ITableHead {
  columns: any;
  headRef: any;
  onSort: any;
  orderBy: any;
  appliedSort: any;
  labels: Record<string, unknown>;
}

const TableHead = ({ onSort, orderBy, columns, headRef, appliedSort, labels }: ITableHead): JSX.Element => (
  <div className="table-head" ref={headRef}>
    <div className="table-cell--checkbox"></div>
    {columns.map(
      (column: string, index: number): JSX.Element => (
        <div key={`tablehead-${index}`} className="table-cell">
          <SortableCell
            appliedSort={appliedSort}
            onSort={onSort}
            orderBy={orderBy}
            column={column}
            columns={columns}
            labels={labels}
          />
        </div>
      ),
    )}
  </div>
);

export default TableHead;

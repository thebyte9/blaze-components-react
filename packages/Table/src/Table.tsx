import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Pagination from "@blaze-react/pagination";
import TableBody from './TableBody';
import TableHead from './TableHead';
import { ITableRow, ICheckboxItem } from './interfaces';

interface ITableProps {
  placeholder?: string;
  checkboxes?: boolean;
  data: {
    identification: string;
    columns: string[];
    orderBy: string[];
    rows: ITableRow[];
    appliedSort?: any;
    labels: Record<string, unknown>;
  };
  value?: string;
  overScanBuffer?: number;
  onSelect?: (arg: any[]) => any;
  onSort?: (arg: any) => any;
  onRenderItems?: (arg: any) => void;
  onClickRow?: (arg: any) => void;
  scrollToIndex?: number;
}

const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy, appliedSort, labels },
  onSelect = () => ({}),
  onSort = () => ({}),
  onClickRow = () => ({}),
  checkboxes,
  placeholder = '',
}) => {
  const [selected, setSelected] = useState<any[]>([]);
  const [allRows, setAllRows] = useState<ITableRow[]>(rows);
  const [allColumns, setAllColumns] = useState<any>(columns);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 4,
  });
  const headRef = useRef<any>(null);

  useEffect(() => {
    setAllRows(rows);
    setAllColumns(columns);
  }, [rows, rows && rows.length, columns, columns && columns.length]);

  const handleSelected = ([checked]: ICheckboxItem[], value: string | ICheckboxItem[], multiselect = false): void => {
    let checkedValue = [];

    if (checked && !selected.includes(checked.value)) {
      checkedValue = [...selected, checked.value];
    } else {
      checkedValue = selected.filter((currentValue) => currentValue !== value);
    }

    if (multiselect) {
      checkedValue = checked ? [...checked.value] : [];
    }

    setSelected(checkedValue);
    onSelect(checkedValue);
  };

  const getTableBody = () => {
    const indexOfLastTodo = pagination.currentPage * pagination.itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - pagination.itemsPerPage;
    return allRows.slice(indexOfFirstTodo, indexOfLastTodo);
  };

  const handleOnPageChange = (currentPage) => {
    setPagination({ ...pagination, currentPage });
  };

  const tableBody = getTableBody();
  const totalPages = Math.round(allRows.length / pagination.itemsPerPage);

  return (
    <>
    <div className="table-wrapper">
      <TableHead
        onSort={onSort}
        orderBy={orderBy}
        headRef={headRef}
        columns={allColumns}
        appliedSort={appliedSort}
        labels={labels}
      />
      <TableBody
        onClickRow={onClickRow}
        allRows={tableBody}
        checkboxes={checkboxes}
        identification={identification}
        selected={selected}
        handleSelected={handleSelected}
        columns={columns}
        placeholder={placeholder}
      />
    </div>
    <Pagination
        totalPages={totalPages}
        currentPage={pagination.currentPage}
        paginationPagesPerSide={5}
        handleOnPageChange={handleOnPageChange}
      />
    </>
  );
};

Table.defaultProps = {
  checkboxes: false,
  data: {
    columns: [],
    identification: '',
    orderBy: [],
    rows: [],
    labels: {},
  },
  placeholder: 'No records available',
};

export default Table;

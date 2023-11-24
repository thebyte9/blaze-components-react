import React, { FunctionComponent, useRef, useState } from 'react';
import Pagination from '@blaze-react/pagination';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { ITableRow, ICheckboxItem } from './interfaces';

interface IPaginationProps {
  display: boolean;
  paginationPagesPerSide: number;
  itemsPerPage: number;
  currentPage: number;
}
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
  rowsPerPage: number;
  value?: string;
  overScanBuffer?: number;
  onSelect?: (arg: any[]) => any;
  onSort?: (arg: any) => any;
  onClickRow?: (arg: any) => void;
  paginationProps: IPaginationProps;
}

const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy, appliedSort, labels },
  onSelect = () => ({}),
  onSort = () => ({}),
  onClickRow = () => ({}),
  checkboxes,
  placeholder = '',
  paginationProps
}) => {
  const headRef = useRef<any>(null);
  const [selected, setSelected] = useState<any[]>([]);


  const [pagination, setPagination] = useState({
    currentPage: paginationProps.currentPage,
    itemsPerPage: paginationProps.itemsPerPage,
  });

  const handleSelected = ([checked]: ICheckboxItem[], value: string | ICheckboxItem[], multiselect = false): void => {
    let checkedValue: any = [];

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

  const handleOnPageChange = (currentPage) => {
    setPagination({ ...pagination, ...currentPage });
  };


  const getTableBody = () => {
    const indexOfLastTodo = pagination.currentPage * pagination.itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - pagination.itemsPerPage;
    return rows.slice(indexOfFirstTodo, indexOfLastTodo);
  };

  const totalPages = Math.round(rows.length / paginationProps.itemsPerPage);
  const tableRows = getTableBody();

  return (
    <div className="table-wrapper">
      <TableHead
        onSort={onSort}
        orderBy={orderBy}
        headRef={headRef}
        columns={columns}
        appliedSort={appliedSort}
        labels={labels}
      />
      <div className="table-body">
        <TableBody
          onClickRow={onClickRow}
          rows={tableRows}
          checkboxes={checkboxes}
          identification={identification}
          selected={selected}
          handleSelected={handleSelected}
          columns={columns}
          placeholder={placeholder}
        />
      </div>
      {paginationProps.display && <Pagination
        totalPages={totalPages}
        currentPage={paginationProps.currentPage}
        paginationPagesPerSide={paginationProps.paginationPagesPerSide}
        handleOnPageChange={handleOnPageChange}
      />}
    </div>
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
  paginationProps: {
    display: true,
    paginationPagesPerSide: 5,
    itemsPerPage: 5,
    currentPage: 1
  },
  placeholder: 'No records available',
};

export default Table;

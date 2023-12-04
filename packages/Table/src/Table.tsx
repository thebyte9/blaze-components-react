import React, { FunctionComponent, useRef, useState } from 'react';
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
  onClickRow?: (arg: any) => void;
}

const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy, appliedSort, labels },
  onSelect = () => ({}),
  onSort = () => ({}),
  onClickRow = () => ({}),
  checkboxes,
  placeholder = '',
}) => {
  const headRef = useRef<any>(null);
  const [selected, setSelected] = useState<any[]>([]);

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
          rows={rows}
          checkboxes={checkboxes}
          identification={identification}
          selected={selected}
          handleSelected={handleSelected}
          columns={columns}
          placeholder={placeholder}
        />
      </div>
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
  placeholder: 'No records available',
};

export default Table;

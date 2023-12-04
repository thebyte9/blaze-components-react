import { Checkboxes } from '@blaze-react/checkboxes';
import { ITableRow } from '../interfaces';
import React from 'react';
import { nanoid } from 'nanoid';

interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}

interface ITableBody {
  rows: ITableRow[];
  checkboxes?: boolean;
  identification: string;
  selected: any[];
  handleSelected: (checked: ICheckbox[], value: string | ICheckbox[], isMultiselect?: boolean) => void;
  columns: string[];
  placeholder: string | JSX.Element;
  onClickRow: (arg: any) => void;
}

const TableBody = ({
  rows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  onClickRow,
}: ITableBody): JSX.Element => {
  if (!rows || !rows.length)
    return (
      <div className="table-body-placeholder">
        <div>{placeholder}</div>
      </div>
    );


  return (
    <div className="custom-virtual-list">
      {rows.map((row, index) => (
        <div
          onClick={() => onClickRow({ ...row, index })}
          className="table-row"
          key={`tablerow-${nanoid()}`}
          data-testid={`tablerow-${index}`}
          style={{ height: '62px' }} // Adjust the height as needed
        >
          {checkboxes && (
            <div className="table-cell--checkbox">
              <Checkboxes
                test-id={`row-checkbox-${index}`}
                options={{
                  checked: selected.includes(row[identification]),
                  id: row[identification],
                  value: row[identification],
                }}
                onChange={({ value }: any): void => handleSelected(value, row[identification])}
              />
            </div>
          )}
          {columns.map((column: string) => (
            <div className="table-cell" key={column}>
              <div className="table-cell--content">{row[column]}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableBody;

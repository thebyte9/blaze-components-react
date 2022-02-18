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
  allRows: ITableRow[];
  checkboxes?: boolean;
  identification: string;
  selected: any[];
  handleSelected: (checked: ICheckbox[], value: string | ICheckbox[], isMultiselect?: boolean) => void;
  columns: string[];
  placeholder: string | JSX.Element;
  onClickRow: (arg: any) => void;
}

const TableBody = ({
  allRows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  onClickRow,
}: ITableBody): JSX.Element => {

  return (
    <div className="table-body">
      {allRows.length && (
        allRows.map((_, index) => (
          <div
          onClick={() => onClickRow({ ...allRows[index], index })}
          className="table-row"
          key={`tablerow-${nanoid()}`}
          data-testid={`tablerow-${index}`}
          >
          {checkboxes && (
            <div className="table-cell--checkbox">
              <Checkboxes
                test-id={`row-checkbox-${index}`}
                options={{
                  checked: selected.includes(allRows[index][identification]),
                  id: allRows[index][identification],
                  value: allRows[index][identification],
                }}
                onChange={({ value }: any): void => handleSelected(value, allRows[index][identification])}
              />
            </div>
          )}
          {columns.map(
            (column: string): JSX.Element => (
              <div className="table-cell" key={column}>
                <div className="table-cell--content">{allRows[index][column]}</div>
              </div>
            ),
          )}
        </div>
        ))
      )}

      {!allRows.length && (
        <div className="table-body-placeholder">
          <div>{placeholder}</div>
        </div>
      )}
    </div>
  );
};

export default TableBody;

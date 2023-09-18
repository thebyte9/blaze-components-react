import { Checkboxes } from '@blaze-react/checkboxes';
import { ITableRow } from '../interfaces';
import React from 'react';
import VirtualList from 'react-tiny-virtual-list';
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
  bodyRef: any;
  scrollToIndex: number;
  overScanBuffer: number;
  onRenderItems?: (arg: any) => void;
  onClickRow: (arg: any) => void;
  tableBodyHeight?: number;
}

const TableBody = ({
  rows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  bodyRef,
  overScanBuffer = 20,
  onRenderItems,
  scrollToIndex = 0,
  onClickRow,
  tableBodyHeight,
}: ITableBody): JSX.Element => {
  if (!rows || !rows.length)
    return (
      <div className="table-body-placeholder">
        <div>{placeholder}</div>
      </div>
    );

  const rowsLength = rows.length;
  const bodyHeight = bodyRef && bodyRef.offsetHeight;
  const listHeight = tableBodyHeight || bodyHeight;

  return (
    <VirtualList
      width="100%"
      height={listHeight}
      itemCount={rowsLength}
      itemSize={62}
      scrollToIndex={scrollToIndex}
      overscanCount={overScanBuffer}
      onItemsRendered={onRenderItems}
      renderItem={({ index, style }) => (
        <div
          onClick={() => onClickRow({ ...rows[index], index })}
          className="table-row"
          key={`tablerow-${nanoid()}`}
          data-testid={`tablerow-${index}`}
          style={style}
        >
          {checkboxes && (
            <div className="table-cell--checkbox">
              <Checkboxes
                test-id={`row-checkbox-${index}`}
                options={{
                  checked: selected.includes(rows[index][identification]),
                  id: rows[index][identification],
                  value: rows[index][identification],
                }}
                onChange={({ value }: any): void => handleSelected(value, rows[index][identification])}
              />
            </div>
          )}
          {columns.map(
            (column: string): JSX.Element => (
              <div className="table-cell" key={column}>
                <div className="table-cell--content">{rows[index][column]}</div>
              </div>
            ),
          )}
        </div>
      )}
    />
  );
};

export default TableBody;

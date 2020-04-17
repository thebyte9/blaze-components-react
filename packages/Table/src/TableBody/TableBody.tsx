import { Checkboxes } from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import React from "react";
import VirtualList from "react-tiny-virtual-list";
interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}
interface ITableBody {
  allRows: object[];
  checkboxes?: boolean;
  identification: string;
  selected: any[];
  handleSelected: (
    checked: ICheckbox[],
    value: string | ICheckbox[],
    isMultiselect?: boolean
  ) => void;
  columns: string[];
  placeholder: string | JSX.Element;
  utils: {
    uniqueId: (element: any) => string;
  };
  bodyRef: any;
  scrollToIndex: number;
  overScanBuffer: number;
  onRenderItems?: (arg: any) => void;
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
  utils: { uniqueId },
  bodyRef,
  overScanBuffer = 20,
  onRenderItems,
  scrollToIndex = 0,
  onClickRow
}: ITableBody): JSX.Element => {
  return (
    <div ref={bodyRef} className="table-body">
      {bodyRef.current && allRows.length && (
        <VirtualList
          width={"100%"}
          height={bodyRef.current.offsetHeight}
          itemCount={allRows.length}
          itemSize={62}
          scrollToIndex={scrollToIndex}
          overscanCount={overScanBuffer}
          onItemsRendered={onRenderItems}
          renderItem={({ index, style }) => (
            <div
              onClick={() => onClickRow({ ...allRows[index], index })}
              className="table-row"
              key={uniqueId(allRows[index])}
              data-testid={`tablerow-${index + 1}`}
              style={style}
            >
              {checkboxes && (
                <div className="table-cell--checkbox">
                  <Checkboxes
                    test-id={`row-checkbox-${index + 1}`}
                    options={{
                      checked: selected.includes(
                        allRows[index][identification]
                      ),
                      id: allRows[index][identification],
                      value: allRows[index][identification]
                    }}
                    onChange={({ value }: { value: ICheckbox[] }): void =>
                      handleSelected(value, allRows[index][identification])
                    }
                  />
                </div>
              )}
              {columns.map(
                (column: string): JSX.Element => (
                  <div className="table-cell" key={column}>
                    <div className="table-cell--content">
                      {allRows[index][column]}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        />
      )}

      {!allRows.length && (
        <div className="table-body-placeholder">
          <div>{placeholder}</div>
        </div>
      )}
    </div>
  );
};

export default withUtils(TableBody);

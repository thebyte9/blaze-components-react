import Checkboxes from "@blaze-react/checkboxes";
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
}

const TableBody = ({
  allRows,
  checkboxes,
  identification,
  selected,
  handleSelected,
  columns,
  placeholder,
  utils: { uniqueId }
}: ITableBody): JSX.Element => (
  <div>
    <VirtualList
      width="100%"
      height={450}
      itemCount={allRows.length}
      itemSize={62}
      renderItem={({ index, style }) => (
        <div
          key={uniqueId(allRows[index])}
          data-testid={`tablerow-${index + 1}`}
          style={style}
        >
          {checkboxes && (
            <div>
              <Checkboxes
                data-testid={`row-checkbox-${index + 1}`}
                options={{
                  checked: selected.includes(allRows[index][identification]),
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
              <div key={column}>{allRows[index][column]}</div>
            )
          )}
        </div>
      )}
    ></VirtualList>

    {!allRows.length && (
      <div>
        <div
        // colSpan={checkboxes ? columns.length + 1 : columns.length}
        // align="center"
        >
          {placeholder}
        </div>
      </div>
    )}
  </div>
);

export default withUtils(TableBody);

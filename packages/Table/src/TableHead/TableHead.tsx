import Checkboxes from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import React from "react";
interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}
interface ITableHead {
  checkboxes?: boolean;
  selected: any[];
  identification: string;
  allRows: object[];
  handleSelected: (
    checked: ICheckbox[],
    value: string | ICheckbox[],
    isMultiselect?: boolean
  ) => void;
  enableOrderBy: (column: string) => JSX.Element;
  sortColumns: object[];
  utils: {
    uniqueId: (element: any) => string;
  };
}

const TableHead = ({
  checkboxes,
  selected,
  identification,
  allRows,
  handleSelected,
  enableOrderBy,
  sortColumns,
  utils: { uniqueId }
}: ITableHead): JSX.Element => (
  <thead>
    <tr>
      {checkboxes && (
        <th>
          <Checkboxes
            options={Object.assign(
              {},
              {
                checked: selected.length === allRows.length,
                value: allRows.map((row: object) => row[identification])
              }
            )}
            onChange={({ value }: { value: ICheckbox[] }): void =>
              handleSelected(value, value, true)
            }
            data-testid="select_all"
          />
        </th>
      )}
      {Object.keys(sortColumns).map(
        (column: string): JSX.Element => (
          <th key={uniqueId(column)}>{enableOrderBy(column)}</th>
        )
      )}
    </tr>
  </thead>
);

export default withUtils(TableHead);

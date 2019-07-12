import Checkboxes from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import React from "react";

interface ITableHead {
  checkboxes?: boolean;
  selected: any[];
  identification: string;
  allRows: object[];
  handleSelected: (
    checked: object[],
    value: string,
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
}: ITableHead) => (
  <thead>
    <tr>
      {checkboxes && (
        <th>
          <Checkboxes
            options={[
              Object.assign(
                {},
                {
                  checked: selected.length === allRows.length,
                  value: allRows.map((row: any) => row[identification])
                }
              )
            ]}
            onChange={({ checked }: { checked: any }): void =>
              handleSelected(checked, checked, true)
            }
            data-testid="select_all"
          />
        </th>
      )}
      {Object.keys(sortColumns).map(
        (column: any): JSX.Element => (
          <th key={uniqueId(column)}>
            {column}
            {enableOrderBy(column)}
          </th>
        )
      )}
    </tr>
  </thead>
);

export default withUtils(TableHead);

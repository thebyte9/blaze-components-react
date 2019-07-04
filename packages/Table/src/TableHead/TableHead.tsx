import Checkboxes from "@blaze-react/checkboxes";
import utils from "@blaze-react/utils";
import React from "react";

interface ITableHead {
  checkboxes?: boolean;
  selected: any[];
  identification: string;
  allRows: object[];
  handleSelected: (checked: object[], value: string, isMultiselect?: boolean) => void;
  enableOrderBy: (column: string) => JSX.Element;
  sortColumns: object[];
  utils: {
    uniqueId: (element: any) => string
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
              withEffect
              options={[
                Object.assign(
                  {},
                  {
                    checked: selected.length === allRows.length,
                    id: "Select_all",
                    value: allRows.map((row: any) => row[identification])
                  }
                )
              ]}
              onChange={({ checked }: { checked: any }) =>
                handleSelected(checked, checked, true)
              }
            />
          </th>
        )}
        {Object.keys(sortColumns).map((column: any) => (
          <th key={uniqueId(column)}>
            {column}
            {enableOrderBy(column)}
          </th>
        ))}
      </tr>
    </thead>
  );

export default utils(TableHead);

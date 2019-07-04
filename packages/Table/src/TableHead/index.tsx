import Checkboxes from "@blaze-react/checkboxes";
import utils from "@blaze-react/utils";
import React from "react";

interface ITableHead {
  checkboxes: any;
  selected: any;
  identification: any;
  allRows: any;
  handleSelected: any;
  enableOrderBy: any;
  sortColumns: any;
  utils: { uniqueId: any };
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

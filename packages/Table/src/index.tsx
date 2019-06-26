import React, { useState, useEffect, FunctionComponent } from "react";
import uuidv1 from "uuid/v1";
import Checkboxes from "@blaze-react/checkboxes";
type TableProps = {
  placeholder?: string,
  checkboxes?: boolean,
  data: {
    identification: string,
    columns: string[],
    rows: any[]
  },
  value?: string
  onSelect: (...args: any[]) => any
};
const Table: FunctionComponent<TableProps> = ({
  data: { columns, rows, identification },
  onSelect,
  checkboxes,
  placeholder,
  value
}) => {
  const [selected, setSelected] = useState<any[]>([]);
  const handleSelected = ([checked]: any[], multiselect = false) => {
    if (multiselect) {
      if (checked) setSelected([...checked.value]);
      else setSelected([]);
      return;
    }
    if (checked && !selected.includes(checked.value))
      setSelected([...selected, checked.value]);
    else setSelected(selected.filter(_value => _value !== value));
  };
  useEffect(() => onSelect(selected));
  const colSpan = checkboxes ? columns.length + 1 : columns.length;
  const thead = (
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
                    value: rows.map(row => row[identification]),
                    id: "Select_all",
                    checked: selected.length === rows.length
                  }
                )
              ]}
              onChange={({ checked }: { checked: any }) => handleSelected(checked, true)}
            />
          </th>
        )}
        {columns.map(column => (
          <th key={uuidv1()}>{column}</th>
        ))}
      </tr>
    </thead>
  );
  const tbody = (
    <tbody>
      {rows.map(row => (
        <tr key={uuidv1()}>
          {checkboxes && (
            <td>
              <Checkboxes
                withEffect
                options={[
                  {
                    value: row[identification],
                    id: row[identification],
                    checked: selected.includes(row[identification])
                  }
                ]}
                onChange={({ checked }: any) =>
                  handleSelected(checked, row[identification])
                }
              />
            </td>
          )}
          {columns.map(column => (
            <td key={uuidv1()}>{row[column]}</td>
          ))}
        </tr>
      ))}
      {!rows.length && (
        <tr>
          <td colSpan={colSpan} align="center">
            {placeholder}
          </td>
        </tr>
      )}
    </tbody>
  );
  return (
    <div className="table-scroll__wrapper">
      <div className="table-scroll">
        <table>
          {thead}
          {tbody}
        </table>
      </div>
    </div>
  );
};
Table.defaultProps = {
  placeholder: "No records available",
  checkboxes: false,
  data: {
    identification: "",
    columns: [],
    rows: []
  },
  onSelect: () => { }
};
export default Table;

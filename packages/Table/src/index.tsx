import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface ICheckbox {
  checked: boolean;
  id: string | number;
  value: any;
}
interface ITableProps {
  placeholder?: string;
  checkboxes?: boolean;
  data: {
    identification: string;
    columns: string[];
    orderBy: string[];
    rows: object[];
  };
  value?: string;
  overScanBuffer?: number;
  onSelect?: (arg: any[]) => any;
  onSort?: (arg: any) => any;
  onRenderItems?: (arg: any) => void;
  onClickRow?: (arg: any) => void;
}
const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy },
  onSelect = () => ({}),
  onSort = () => ({}),
  onClickRow = () => ({}),
  checkboxes,
  placeholder,
  overScanBuffer,
  onRenderItems
}) => {
  const [selected, setSelected] = useState<any[]>([]);
  const [allRows, setAllRows] = useState<object[]>(rows);
  const [allColumns, setAllColumns] = useState<any>(columns);
  const headRef = useRef<any>(null);
  const bodyRef = useRef<any>(null);

  useEffect(() => {
    setAllRows(rows);
    setAllColumns(columns);
  }, [rows, columns]);

  useEffect(() => {
    if (
      bodyRef &&
      bodyRef.current &&
      bodyRef.current.firstElementChild &&
      allRows.length
    ) {
      bodyRef.current.firstElementChild.addEventListener(
        "scroll",
        (event: any) => syncScroll(headRef.current, event)
      );
    }

    if (headRef && headRef.current && headRef.current.firstElementChild) {
      headRef.current.addEventListener("scroll", (event: any) =>
        syncScroll(bodyRef.current.firstElementChild, event)
      );
    }
    return () => {
      if (bodyRef && bodyRef.current && bodyRef.current.firstElementChild) {
        bodyRef.current.firstElementChild.removeEventListener(
          "scroll",
          syncScroll
        );
      }
      if (headRef.current) {
        headRef.current.removeEventListener("scroll", syncScroll);
      }
    };
  }, [bodyRef.current, headRef.current, allRows]);

  const syncScroll = (ref: any, event: any) => {
    ref.scrollLeft = event.target.scrollLeft;
  };

  const handleSelected = (
    [checked]: ICheckbox[],
    value: string | ICheckbox[],
    multiselect = false
  ): void => {
    let checkedValue = [];

    if (checked && !selected.includes(checked.value)) {
      checkedValue = [...selected, checked.value];
    } else {
      checkedValue = selected.filter(currentValue => currentValue !== value);
    }

    if (multiselect) {
      checkedValue = checked ? [...checked.value] : [];
    }

    setSelected(checkedValue);
    onSelect(checkedValue);
  };

  return (
    <div className="table-wrapper">
      <TableHead
        onSort={onSort}
        orderBy={orderBy}
        headRef={headRef}
        columns={allColumns}
      />
      <TableBody
        onClickRow={onClickRow}
        bodyRef={bodyRef}
        allRows={allRows}
        checkboxes={checkboxes}
        identification={identification}
        selected={selected}
        handleSelected={handleSelected}
        columns={columns}
        placeholder={placeholder}
        overScanBuffer={overScanBuffer}
        onRenderItems={onRenderItems}
      />
    </div>
  );
};

Table.defaultProps = {
  checkboxes: false,
  data: {
    columns: [],
    identification: "",
    orderBy: [],
    rows: []
  },
  placeholder: "No records available"
};
export default Table;

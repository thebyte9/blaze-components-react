import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { ITableRow, ICheckboxItem } from './interfaces';

interface ITableProps {
  placeholder?: string;
  checkboxes?: boolean;
  data: {
    identification: string;
    columns: string[];
    orderBy: string[];
    rows: ITableRow[];
    appliedSort?: any;
    labels: Record<string, unknown>;
  };
  value?: string;
  overScanBuffer?: number;
  onSelect?: (arg: any[]) => any;
  onSort?: (arg: any) => any;
  onRenderItems?: (arg: any) => void;
  onClickRow?: (arg: any) => void;
  scrollToIndex?: number;
}


const Table: FunctionComponent<ITableProps> = ({
  data: { columns, rows, identification, orderBy, appliedSort, labels },
  onSelect = () => ({}),
  onSort = () => ({}),
  onClickRow = () => ({}),
  checkboxes,
  placeholder = '', 
  overScanBuffer = 0,
  onRenderItems,
  scrollToIndex = 0,
}) => {
  const [selected, setSelected] = useState<any[]>([]);
  const [allRows, setAllRows] = useState<ITableRow[]>(rows);
  const [allColumns, setAllColumns] = useState<any>(columns);
  const headRef = useRef<any>(null);
  const bodyRef = useRef<any>(null);

  useEffect(() => {
    setAllRows(rows);
    setAllColumns(columns);
  }, [rows, rows && rows.length, columns, columns && columns.length]);

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
    [checked]: ICheckboxItem[],
    value: string | ICheckboxItem[],
    multiselect = false
  ): void => {
    let checkedValue = [];

    if (checked && !selected.includes(checked.value)) {
      checkedValue = [...selected, checked.value];
    } else {
      checkedValue = selected.filter((currentValue) => currentValue !== value);
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
        appliedSort={appliedSort}
        labels={labels}
      />
      <TableBody
        scrollToIndex={scrollToIndex}
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
    rows: [],
    labels: {},
  },
  placeholder: "No records available",
};
export default Table;

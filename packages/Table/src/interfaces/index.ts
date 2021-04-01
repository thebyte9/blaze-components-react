import { ICheckboxItem } from '../../../Checkboxes/src';

interface ITableRow {
  [index: string]: string | ICheckboxItem[];
}

export { ITableRow, ICheckboxItem }


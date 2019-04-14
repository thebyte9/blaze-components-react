import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkboxes from '../Checkboxes';

const Table = ({
  data: { columns, rows, identification },
  onSelect
}) => {
  const [checkedStatus, setAllAsChecked] = useState(false);

  const options = [Object.assign({}, { value: rows.map(row => row[identification]) })];

  const handleSelected = ([selected], multiselect = false) => {
    if (multiselect) setAllAsChecked(!checkedStatus);
    return onSelect(selected ? selected.value : null);
  };

  const tableHeaders = (
    <thead>
      <tr>
        <th>
          <Checkboxes options={options} onChange={({ checked }) => handleSelected(checked, true)} />
        </th>
        {columns.map(column => <th>{column}</th>)}
      </tr>
    </thead>
  );

  const tableBody = rows.map(row => (
    <tr>
      <td>
        <Checkboxes
          withEffect
          options={[{ value: row[identification], checked: checkedStatus }]}
          onChange={({ checked }) => handleSelected(checked)}
          />
      </td>
      {columns.map(column => <td>{row[column]}</td>)}
    </tr>
  ));

  return (
    <div className="table-scroll__wrapper">
      <div className="table-scroll">
        <table>
          {tableHeaders}
          {tableBody}
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func
};

Table.defaultProps = {
  data: [],
  onSelect: () => {}
};

export default Table;

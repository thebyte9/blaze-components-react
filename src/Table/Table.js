import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkboxes from '../Checkboxes';

const Table = ({
  data: {
    columns,
    rows,
    identification,
  },
  onSelect,
  hasCheckboxes
}) => {
  const [selected, setSelected] = useState([]);

  const handleSelected = ([checked], value, multiselect = false) => {
    if (multiselect) {
      if (checked) setSelected([...checked.value]);
      else setSelected([]);
      return;
    }

    if (checked && !selected.includes(checked.value)) setSelected([...selected, checked.value]);
    else setSelected(selected.filter(_value => _value !== value));
  };

  useEffect(() => onSelect(selected));

  const thead = (
    <thead>
      <tr>
        {
          hasCheckboxes && (
            <th>
              <Checkboxes
                withEffect
                options={[
                  Object.assign(
                    {},
                    {
                      value: rows.map(row => row[identification]),
                      id: 'Select_all',
                      checked: selected.length === rows.length
                    }
                  )
                ]}
                onChange={({ checked }) => handleSelected(checked, checked, true)}
                />
            </th>
          )
        }
        {columns.map(column => <th key={column}>{column}</th>)}
      </tr>
    </thead>
  );

  const tbody = (
    <tbody>
      {
        rows.map(row => (
          <tr key={row[identification]}>
            {
              hasCheckboxes
              && (
                <td>
                  <Checkboxes
                  withEffect
                  options={
                    [
                      {
                        value: row[identification],
                        id: row[identification],
                        checked: selected.includes(row[identification])
                      }
                    ]
                  }
                  onChange={({ checked }) => handleSelected(checked, row[identification])}
                  />
                </td>
              )
            }
            {columns.map(column => <td key={row[column]}>{row[column]}</td>)}
          </tr>
        ))
      }
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

Table.propTypes = {
  data: PropTypes.object,
  onSelect: PropTypes.func,
  hasCheckboxes: PropTypes.bool
};

Table.defaultProps = {
  data: {},
  onSelect: () => {},
  hasCheckboxes: true,
};

export default Table;

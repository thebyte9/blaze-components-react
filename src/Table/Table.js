import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import sortBy from 'sort-by';
import Checkboxes from '../Checkboxes';

const Table = ({
  data: {
    columns,
    rows,
    identification,
  },
  onSelect,
  checkboxes,
  placeholder,
}) => {
  const [_rows, setRows] = useState(rows);
  const [selected, setSelected] = useState([]);

  const [sortColumns, setSortColumns] = useState(
    columns.reduce((result, item) => ({ ...result, [item]: item }), {})
  );

  const handleSelected = ([checked], value, multiselect = false) => {
    if (multiselect) {
      if (checked) setSelected([...checked.value]);
      else setSelected([]);
      return;
    }

    if (checked && !selected.includes(checked.value)) setSelected([...selected, checked.value]);
    else setSelected(selected.filter(_value => _value !== value));
  };

  const sort = (column) => {
    setRows([..._rows.sort(sortBy(sortColumns[column]))]);

    setSortColumns({
      ...sortColumns,
      [column]: (sortColumns[column] === column) ? `-${column}` : column
    });
  };

  useEffect(() => onSelect(selected));

  const colSpan = checkboxes ? columns.length + 1 : columns.length;

  const thead = (
    <thead>
      <tr>
        {
          checkboxes && (
            <th>
              <Checkboxes
                withEffect
                options={[
                  Object.assign(
                    {},
                    {
                      value: _rows.map(row => row[identification]),
                      id: 'Select_all',
                      checked: selected.length === _rows.length
                    }
                  )
                ]}
                onChange={({ checked }) => handleSelected(checked, checked, true)}
                />
            </th>
          )
        }
        {Object.keys(sortColumns).map(column => (
          <th key={uuidv1()}>
            {column}
            <i id={`sort_${column}`} className="material-icons" onClick={() => sort(column)} role="button">
              {sortColumns[column].includes('-') ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </i>
          </th>
        ))}
      </tr>
    </thead>
  );

  const tbody = (
    <tbody>
      {
        _rows.map(row => (
          <tr key={uuidv1()}>
            {
              checkboxes
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
            {columns.map(column => <td key={uuidv1()}>{row[column]}</td>)}
          </tr>
        ))
      }
      {!_rows.length && (
      <tr>
        <td colSpan={colSpan} align="center">{placeholder}</td>
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

Table.propTypes = {
  placeholder: PropTypes.string,
  checkboxes: PropTypes.bool,
  data: PropTypes.shape({
    identification: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.array
  }),
  onSelect: PropTypes.func
};

Table.defaultProps = {
  placeholder: 'No records available',
  checkboxes: false,
  data: {},
  onSelect: () => {}
};

export default Table;

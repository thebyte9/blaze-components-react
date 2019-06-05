import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import Input from '../Input';
import Checkboxes from '../Checkboxes';

const MultiSelect = ({
  data: [data = [], key = ''],
  keys,
  s,
  children
}) => {
  const [selected, setSelected] = useState([]);
  const [a, setA] = useState(data);

  const handleKeyUp = (event) => {
    const { target: { value } } = event;

    const _a = a.map((d) => {
      let _d = d;
      keys.forEach((_key) => {
        const match = d[_key].toLowerCase().includes(value.toLowerCase());
        _d = Object.assign({}, d, { show: match });
      });
      return _d;
    });

    setA(_a);
  };

  const handleChange = ({ checked, data: _data }) => {
    setSelected(checked);
    setA(_data);
    s(a);
  };

  return (
    <div className="container">

      {
        selected.map(n => <div key={uuidv1()}>{n[key]}</div>)
      }

      {children}

      <Input
            label="Press enter after you typed."
            placeholder="Search"
            onKeyUp={handleKeyUp}
            />
      {
        <Checkboxes
            options={a.map(d => Object.assign({}, d, { label: d[key] }))}
            onChange={handleChange}
            withEffect
            />
      }
    </div>
  );
};

MultiSelect.propTypes = {
  data: PropTypes.array,
  keys: PropTypes.array,
  s: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

MultiSelect.defaultProps = {
  data: [],
  keys: [],
  s: () => {},
  children: ''
};

export default MultiSelect;


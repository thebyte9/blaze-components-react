import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import Input from '../Input';
import Checkboxes from '../Checkboxes';

const MultiSelect = ({
  data: { data, filterBy: keys, keyValue },
  selected: getSelected,
  placeholder,
  children
}) => {
  const [selected, setSelected] = useState([]);
  const [dataCopy, setDataCopy] = useState(data);

  const setStatus = (obj, status) => Object.assign({}, obj, { show: status });

  const handleKeyUp = (event) => {
    const { target: { value } } = event;

    const _dataCopy = dataCopy.map((copy) => {
      let _copy = setStatus(copy, false);

      keys.forEach((_key) => {
        const match = copy[_key].toLowerCase().includes(value.toLowerCase());
        if (match) _copy = setStatus(copy, true);
      });

      return _copy;
    });

    setDataCopy(_dataCopy);
  };

  const handleChange = ({ checked, data: _data }) => {
    setSelected(checked);
    setDataCopy(_data);
    getSelected(_data);
  };

  return (
    <Fragment>

      {
        selected.map(_selected => <div key={uuidv1()}>{_selected[keyValue]}</div>)
      }

      {children}

      <Input placeholder={placeholder} onKeyUp={handleKeyUp} />
      {
        <Checkboxes
            options={dataCopy.map(_dataCopy => (
              Object.assign({}, _dataCopy, { label: _dataCopy[keyValue] })))}
            onChange={handleChange}
            withEffect
            />
      }
    </Fragment>
  );
};

MultiSelect.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.func,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

MultiSelect.defaultProps = {
  data: {},
  selected: () => {},
  placeholder: 'Search',
  children: ''
};

export default MultiSelect;


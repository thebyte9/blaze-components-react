import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, required, onChange, options, selected, keys, ...attrs }) => {
  const [selectedOption, setSelectedOption] = useState(selected);

  const handleChange = event => {
    setSelectedOption(event.target.value);
    onChange({ event, selected: event.target.value });
  };

  const isRequired = required ? 'required' : '';

  const setOption = (value, text) => (
    <option key={value} value={value}>
      {text || value}
    </option>
  );

  const renderOptions = () => {
    const [first] = options;

    if (typeof first === 'string') return options.map(option => setOption(option));

    if (first instanceof Array) return options.map(([value, text]) => setOption(value, text));

    return options.map(option => {
      const [value, text] = keys;
      return setOption(option[value], option[text]);
    });
  };

  return (
    <Fragment>
      {label && (
        <label htmlFor={attrs.id} className={isRequired}>
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        defaultValue={selectedOption}
        disabled={!options.length}
        {...attrs}>
        <option value={null}>Please Choose...</option>
        {renderOptions()}
      </select>
    </Fragment>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  keys: PropTypes.array,
  options: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.any
};

Select.defaultProps = {
  label: '',
  keys: [],
  options: [],
  required: false,
  onChange: () => {},
  selected: ''
};

export default Select;

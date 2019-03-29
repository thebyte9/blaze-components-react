import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({
  label,
  required,
  onChange,
  options,
  selected,
  keys,
  ...attrs
}) => {
  const [selectedOption, setSelectedOption] = useState(selected);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onChange({ e, selected: e.target.value });
  };

  const isRequired = required ? 'required' : '';
  
  const renderOptions = () => {
    const [first] = options;

    if (typeof first === 'string') {
      return options.map(option => (
        <option key={option} value={option}>{option}</option>
      ));
    }

    if (first instanceof Array) {
      return options.map(([value, text]) => (
        <option key={value} value={value}>{text}</option>
      ));
    }

    return options.map((option) => {
      const [value, text] = keys;
      return (
        <option key={option[value]} value={option[value]}>{option[text]}</option>
      );
    });
  };

  return (
    <Fragment>
      {label && <label htmlFor={attrs.id} className={isRequired}>{label}</label>}
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
  required: PropTypes.bool,
  options: PropTypes.array,
  selected: PropTypes.any,
  keys: PropTypes.array,
  onChange: PropTypes.func,
};
  
Select.defaultProps = {
  label: '',
  options: [],
  required: false,
  selected: null,
  keys: [],
  onChange: () => {}
};

export default Select;


import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({
  label,
  required,
  onChange,
  options,
  ...attrs
}) => {
  const [, setSelectedOption] = useState(null);

  const handleChange = (e = {
    target: {}
  }) => {
    setSelectedOption(e.target.value);
    onChange({ e, value: e.target.value });
  };

  const isRequired = required ? 'required' : '';
  return (
    <Fragment>
      {label && <label htmlFor={attrs.id} className={isRequired}>{label}</label>}
      <select onChange={handleChange} defaultValue={null} disabled={!options.length} {...attrs}>
        <option value={null}>Please Choose...</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
  
Select.defaultProps = {
  label: '',
  options: [],
  required: false,
  onChange: () => {}
};

export default Select;

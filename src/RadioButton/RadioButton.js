import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
  onChange,
  options,
  required,
  ...attrs
}) => {
  const [selected, setSelected] = useState({});

  const handleSelect = ({ event, item }) => {
    if (item.disabled) return;
    setSelected(item);
    onChange({ event, selected: item });
  };

  return (
    <Fragment>
      {required && <span className="required" />}
      {options.map((item) => {
        const {
          value,
          disabled,
          label,
          id
        } = item;

        return (
          <div
            key={label}
            className="form-field form-field--radio"
            onClick={event => handleSelect({ event, item })}
            role="button">
            <input
                readOnly
                type="radio"
                className="form-radio"
                value={value}
                disabled={disabled}
                checked={value === selected.value}
                id={id}
                {...attrs}
                />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </Fragment>
  );
};

RadioButton.propTypes = {
  options: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

RadioButton.defaultProps = {
  options: [],
  required: false,
  onChange: () => {}
};

export default RadioButton;

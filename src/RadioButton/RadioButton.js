import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
  onChange,
  options,
  required,
  ...attrs
}) => {
  const [selected, setSelected] = React.useState({});

  const handleSelect = ({ e, item }) => {
    if (item.disabled) return;
    setSelected(item);
    onChange({ e, selected: item });
  };

  return (
    <Fragment>
      {options.map((item) => {
        const {
          value,
          disabled,
          label
        } = item;

        return (
          <span
            key={label}
            className="form-field form-field--radio"
            onClick={e => handleSelect({ e, item })}
            role="button">
            <input
                readOnly
                type="radio"
                className="form-radio"
                value={value}
                disabled={disabled}
                checked={value === selected.value}
                {...attrs}
                />
            <label htmlFor={attrs.id}>{label}</label>
          </span>
        );
      })}
    </Fragment>
  );
};

RadioButton.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

RadioButton.defaultProps = {
  options: {},
  required: false,
  onChange: () => {}
};

export default RadioButton;

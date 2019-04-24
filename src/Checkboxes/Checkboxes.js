import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Checkboxes = ({
  onChange,
  options,
  withEffect,
  ...attrs
}) => {
  const [data, setData] = useState(options);

  useEffect(() => {
    if (withEffect) setData(options);
  }, [options]);

  const toggle = ({ e, item, key }) => {
    if (item.disabled) return;
    data[key].checked = !item.checked;
    setData([...data]);
    const checked = data.filter(option => option.checked);
    onChange({ e, checked });
  };

  return (
    <Fragment>
      {data.map((item, key) => {
        const {
          value,
          disabled,
          checked,
          required,
          label,
          id
        } = item;
      
        return (
          <span
                key={id}
                className="form-field form-field--checkbox"
                onClick={e => toggle({ e, item, key })}
                role="button">
            <input
                readOnly
                type="checkbox"
                className="form-checkbox"
                value={value}
                disabled={disabled}
                checked={checked || false}
                required={required}
                id={id}
                {...attrs}
                />
            <label
                htmlFor={id}
                className={required ? 'required' : ''}>
              {label}
            </label>
          </span>
        );
      })}
    </Fragment>
  );
};

Checkboxes.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  withEffect: PropTypes.bool
};

Checkboxes.defaultProps = {
  options: [],
  onChange: () => {},
  withEffect: false
};

export default Checkboxes;

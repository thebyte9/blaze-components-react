import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

const Checkboxes = ({
  onChange,
  options,
  withEffect,
  boolean,
  ...attrs
}) => {
  const [data, setData] = useState(Array.isArray(options) ? options : [options]);

  useEffect(() => {
    if (withEffect) setData(options);
  }, [options]);

  const toggle = ({ event, item, key }) => {
    if (item.disabled) return;
    data[key].checked = !item.checked;
    setData([...data]);
    let checked = data.filter(option => option.checked);
    if (boolean) checked = !!checked.length;
    onChange({ event, checked });
  };

  return (
    <Fragment>
      {data.map((item, key) => {
        const {
          checked = false,
          value,
          disabled,
          required,
          label,
          id = uuidv1()
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
                checked={checked}
                required={required}
                id={id}
                {...attrs}
                />
            &nbsp; &nbsp;
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
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  withEffect: PropTypes.bool,
  boolean: PropTypes.bool,
  onChange: PropTypes.func
};

Checkboxes.defaultProps = {
  options: [],
  withEffect: false,
  boolean: false,
  onChange: () => {}
};

export default Checkboxes;

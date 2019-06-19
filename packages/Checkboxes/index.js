import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

const Checkboxes = ({ onChange, options, withEffect, boolean, ...attrs }) => {
  const [data, setData] = useState(Array.isArray(options) ? options : [options]);

  useEffect(
    () => {
      if (withEffect) setData(options);
    },
    [options, withEffect]
  );

  const toggle = ({ event, item, key }) => {
    if (item.disabled) return;
    data[key].checked = !item.checked;
    setData([...data]);
    let checked = data.filter(option => option.checked);
    if (boolean) checked = !!checked.length;
    onChange({ event, checked, data });
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
          show = true,
          id = uuidv1()
        } = item;

        if (!show) return <Fragment key={id} />;

        return (
          <div
            key={id}
            className={`form-field form-field--checkbox ${required ? 'required' : ''}`}
            onClick={event => toggle({ event, item, key })}
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
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </Fragment>
  );
};

Checkboxes.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Checkboxes = ({
  onChange,
  options,
  ...attrs
}) => {
  const [data, setData] = useState(options);

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
          label
        } = item;

        return (
          <span
                key={label}
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
                {...attrs}
                />
            <label
                htmlFor={attrs.id}
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
};

Checkboxes.defaultProps = {
  options: [],
  onChange: () => {}
};

export default Checkboxes;

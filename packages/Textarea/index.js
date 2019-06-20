import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ value, label, limit, onChange, required, ...attrs }) => {
  const [content, setContent] = useState(value);

  const handleChange = event => {
    let _content = event.target.value;

    if (limit && _content.length > limit) _content = _content.slice(0, limit);

    setContent(_content);
    onChange({ event, value: _content });
  };

  const isRequired = required ? 'required' : '';
  const total = limit && limit - content.length;

  return (
    <Fragment>
      {label && (
        <label htmlFor={attrs.id} className={isRequired}>
          {label}
        </label>
      )}
      <textarea
        value={content}
        rows={attrs.rows}
        cols={attrs.cols}
        onChange={handleChange}
        required={required}
        {...attrs}
      />
      {!!limit && <span>{total}</span>}
    </Fragment>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  limit: PropTypes.number,
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  label: '',
  value: '',
  required: false,
  limit: 0,
  onChange: () => {}
};

export default Textarea;

import React, { Fragment, useState, TextareaHTMLAttributes, FunctionComponent } from "react";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  required?: boolean,
  limit?: number,
  onChange: (...args: any[]) => void,
  value?: string,
  placeholder: string
};
const Textarea: FunctionComponent<TextareaProps> = ({
  value,
  label,
  limit,
  onChange,
  required,
  id,
  ...attrs
}) => {
  const [content, setContent] = useState<string>('');
  const handleChange = (event: any) => {
    let _content = event.target.value;
    if (limit && _content.length > limit) _content = _content.slice(0, limit);
    setContent(_content);
    onChange({ event, value: _content });
  };
  const isRequired = required ? "required" : "";
  const total = limit && limit - content.length;
  return (
    <Fragment>
      {label && (
        <label htmlFor={id} className={isRequired}>
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
Textarea.defaultProps = {
  label: "",
  value: "",
  required: false,
  limit: 0,
  onChange: () => { }
};
export default Textarea;

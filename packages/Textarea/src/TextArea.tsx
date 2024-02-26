import { buildClassNames, ErrorMessage } from '@blaze-react/utils';

import React, { FunctionComponent, TextareaHTMLAttributes, useEffect, useState } from 'react';
interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  limit?: number;
  onChange: (...args: any[]) => void;
  value?: string;
  error?: boolean;
  validationMessage?: string | JSX.Element;
  placeholder?: string;
}

const Textarea: FunctionComponent<ITextareaProps> = ({
  value,
  label,
  limit,
  onChange,
  error,
  validationMessage,
  required,
  ...attrs
}) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => setContent(value || ''), [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let {
      target: { value: newContent },
    } = event;

    if (limit && newContent.length > limit) {
      newContent = newContent.slice(0, limit);
    }

    setContent(newContent);
    onChange({ event, value: newContent });
  };

  const requiredClassName: string = buildClassNames({ required });

  const total: number = !limit ? 0 : limit - content.length;

  const fieldName = `textarea-${attrs.name}`

  return (
    <div className="form-field form-field--textarea">
      {label && (
        <label htmlFor={fieldName} className={requiredClassName}>
          {label}
        </label>
      )}
      <textarea
        value={content}
        rows={attrs.rows}
        cols={attrs.cols}
        onChange={handleChange}
        required={required}
        id={fieldName}
        {...attrs}
      />
      {!!limit && <span>{total}</span>}
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};

Textarea.defaultProps = {
  error: false,
  label: '',
  limit: 0,
  placeholder: '',
  required: false,
  validationMessage: 'This field is required',
  value: '',
};

export default Textarea;

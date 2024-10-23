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
  tooltip?: string | JSX.Element;
}

const Textarea: FunctionComponent<ITextareaProps> = ({
  value,
  label,
  limit,
  onChange,
  error,
  validationMessage,
  required,
  tooltip,
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

  const fieldName = attrs.id || `textarea-${attrs.name}`;

  const labelWithTooltip = <>{label} {tooltip}</>

  return (
    <div className="form-field form-field--textarea">
      {labelWithTooltip && (
        <label htmlFor={fieldName} className={requiredClassName}>
          {labelWithTooltip}
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

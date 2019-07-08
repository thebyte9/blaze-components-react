import React, {
  Fragment,
  FunctionComponent,
  TextareaHTMLAttributes,
  useState
} from "react";
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
  id,
  ...attrs
}) => {
  const [content, setContent] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let { target: { value: newContent } } = event;

    if (limit && newContent.length > limit) {
      newContent = newContent.slice(0, limit);
    }

    setContent(newContent);
    onChange({ event, value: newContent });
  };

  const requiredClassName: string = 'required';

  const isRequired: string = required ? requiredClassName : '';

  const getTotal = (): number => {
    if (!limit) {
      return 0;
    }
    return limit - content.length;
  }

  const total: number = getTotal();

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
      {error && <div className="validation">
        <i className="material-icons">warning</i>
        {validationMessage}
      </div>}
    </Fragment>
  );
};
Textarea.defaultProps = {
  error: false,
  label: '',
  limit: 0,
  placeholder: '',
  required: false,
  validationMessage: 'This field is required',
  value: ''
};
export default Textarea;

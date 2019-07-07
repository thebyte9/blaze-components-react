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
  placeholder?: string;
}
const Textarea: FunctionComponent<ITextareaProps> = ({
  value,
  label,
  limit,
  onChange,
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

  const requiredClassName = 'required';

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
    </Fragment>
  );
};
Textarea.defaultProps = {
  label: '',
  limit: 0,
  placeholder: '',
  required: false,
  value: ''
};
export default Textarea;

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
  placeholder: string;
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
  const [content, setContent] = useState<string>("");
  const handleChange = (event: any) => {
    let newContent = event.target.value;
    if (limit && newContent.length > limit) {
      newContent = newContent.slice(0, limit);
    }
    setContent(newContent);
    onChange({ event, value: newContent });
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
  limit: 0,
  onChange: (): void => {
    return;
  },
  required: false,
  value: ""
};
export default Textarea;

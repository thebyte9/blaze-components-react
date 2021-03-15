import withUtils from "@blaze-react/utils";
import React, {
  FunctionComponent,
  TextareaHTMLAttributes,
  useEffect,
  useState
} from "react";
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}
interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  limit?: number;
  onChange: (...args: any[]) => void;
  value?: string;
  error?: boolean;
  validationMessage: string | JSX.Element;
  placeholder?: string;
  utils: {
    buildClassNames: (className: string | object, optionalClassNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
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
  utils: { buildClassNames, ErrorMessage },
  ...attrs
}) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => setContent(value || ""), [value]);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    let {
      target: { value: newContent }
    } = event;

    if (limit && newContent.length > limit) {
      newContent = newContent.slice(0, limit);
    }

    setContent(newContent);
    onChange({ event, value: newContent });
  };

  const requiredClassName: string = buildClassNames({ required });

  const total: number = !limit ? 0 : limit - content.length;

  return (
    <div className="form-field form-field--textarea">
      {label && (
        <label htmlFor={id} className={requiredClassName}>
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
      {error && <ErrorMessage message={validationMessage} />}
    </div>
  );
};
Textarea.defaultProps = {
  error: false,
  label: "",
  limit: 0,
  placeholder: "",
  required: false,
  validationMessage: "This field is required",
  value: ""
};
export default withUtils(Textarea);

import withUtils from "@blaze-react/utils";
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
  utils: {
    classNames: (...args: any) => string;
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
  utils: { classNames },
  ...attrs
}) => {
  const [content, setContent] = useState<string>("");

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

  const requiredClassName = classNames({ required });

  const total: number = !limit ? 0 : limit - content.length;

  return (
    <Fragment>
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
      {error && (
        <div className="validation">
          <i className="material-icons">warning</i>
          {validationMessage}
        </div>
      )}
    </Fragment>
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

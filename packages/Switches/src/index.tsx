import withUtils from "@blaze-react/utils";
import React, { Fragment, FunctionComponent, useState } from "react";

interface IOptions {
  checked: boolean;
  value: string;
  disabled: boolean;
  required: boolean;
  label: string;
  id?: string;
}
interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}
type TlabelPosition = "right" | "left" | "base" | "top";
type TModifiers =
  | "checked"
  | "default"
  | "disabled"
  | "primary"
  | "secondary"
  | "unchecked";
interface ISwitchesProps {
  labelPosition?: TlabelPosition;
  options: IOptions[] | IOptions;
  modifier?: TModifiers;
  returnBoolean?: boolean;
  error?: boolean;
  validationMessage: string | JSX.Element;
  onChange: ({
    event,
    value,
    data,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    value: IOptions[] | boolean;
    data: IOptions[];
  }) => void;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}
const Switches = withUtils(
  ({
    labelPosition,
    onChange,
    options,
    modifier,
    returnBoolean,
    error,
    validationMessage,
    utils: { uniqueId, classNames, ErrorMessage },
    ...attrs
  }: ISwitchesProps): JSX.Element => {
    const {
      wrap,
      formatedOptions,
    }: {
      wrap: (child: JSX.Element[]) => JSX.Element;
      formatedOptions: IOptions[];
    } = Array.isArray(options)
      ? {
          formatedOptions: options,
          wrap: (child: JSX.Element[]): JSX.Element => (
            <div className="form-group form-group--switch">{child}</div>
          ),
        }
      : {
          formatedOptions: [options],
          wrap: (child: JSX.Element[]): JSX.Element => <>{child}</>,
        };

    const [data, setData] = useState<IOptions[]>(formatedOptions);

    const toggle = ({
      event,
      item,
      key,
    }: {
      event: React.ChangeEvent<HTMLInputElement>;
      item: IOptions;
      key: number;
    }): void => {
      if (item.disabled) {
        return;
      }

      data[key].checked = !item.checked;
      setData([...data]);

      const checked: IOptions[] = data.filter(
        (option: IOptions): boolean => option.checked
      );

      if (returnBoolean) {
        onChange({ event, value: !!checked.length, data });
        return;
      }

      onChange({ event, value: checked, data });
    };

    const switchClassNames: string = classNames("switch", {
      [`switch--${modifier}`]: !!modifier,
      [`switch--label--${labelPosition}`]: !!labelPosition,
    });

    return (
      <Fragment>
        {wrap(
          data.map(
            (item: IOptions, key: number): JSX.Element => {
              const {
                checked = false,
                value,
                disabled,
                required,
                label,
                id = uniqueId(item),
              } = item;

              return (
                <div className={switchClassNames} key={id}>
                  <div className="switch__text">{label}</div>
                  <div className="switch__item">
                    <input
                      readOnly
                      type="checkbox"
                      value={value}
                      disabled={disabled}
                      checked={checked}
                      required={required}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ): void => toggle({ event, item, key })}
                      id={id}
                      {...attrs}
                    />
                    <label htmlFor={id}>toggle</label>
                  </div>
                </div>
              );
            }
          )
        )}
        {error && <ErrorMessage message={validationMessage} />}
      </Fragment>
    );
  }
);
const availableModifiers: object = {
  checked: "checked",
  default: "default",
  disabled: "disabled",
  primary: "primary",
  secondary: "secondary",
  unchecked: "unchecked",
};

const availablePositions: object = {
  base: "base",
  left: "left",
  right: "right",
  top: "top",
};

Switches.availableModifiers = availableModifiers;
Switches.availablePositions = availablePositions;

Switches.defaultProps = {
  error: false,
  labelPosition: "right",
  modifier: "",
  returnBoolean: false,
  validationMessage: "This field is required",
};
export default Switches;

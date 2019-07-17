import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useState } from "react";

interface IOptions {
  checked: boolean;
  value: string;
  disabled: boolean;
  required: boolean;
  label: string;
  id?: string;
}
interface ISwitchesProps {
  labelPosition?: string;
  options: IOptions[] | IOptions;
  modifier?: string;
  returnBoolean?: boolean;
  onChange: ({
    event,
    checked,
    data
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    checked: IOptions[] | boolean;
    data: IOptions[];
  }) => void;
  utils: {
    uniqueId: (element: any) => string;
    classNames: (className: string | object, classNames?: object) => string;
  };
}
const Switches: FunctionComponent<ISwitchesProps> = ({
  labelPosition,
  onChange,
  options,
  modifier,
  returnBoolean,
  utils: { uniqueId, classNames },
  ...attrs
}): JSX.Element => {
  const {
    wrap,
    formatedOptions
  }: {
    wrap: (child: JSX.Element[]) => JSX.Element;
    formatedOptions: IOptions[];
  } = Array.isArray(options)
    ? {
        formatedOptions: options,
        wrap: (child: JSX.Element[]): JSX.Element => (
          <div className="form-group form-group--switch">{child}</div>
        )
      }
    : {
        formatedOptions: [options],
        wrap: (child: JSX.Element[]): JSX.Element => <>{child}</>
      };

  const [data, setData] = useState<IOptions[]>(formatedOptions);

  const toggle = ({
    event,
    item,
    key
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
      onChange({ event, checked: !!checked.length, data });
      return;
    }

    onChange({ event, checked, data });
  };

  const switchClassNames: string = classNames("switch", {
    [`switch--${modifier}`]: !!modifier,
    [`switch--label--${labelPosition}`]: !!labelPosition
  });

  return wrap(
    data.map(
      (item: IOptions, key: number): JSX.Element => {
        const {
          checked = false,
          value,
          disabled,
          required,
          label,
          id = uniqueId(item)
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                  toggle({ event, item, key })
                }
                id={id}
                {...attrs}
              />
              <label htmlFor={id}>toggle</label>
            </div>
          </div>
        );
      }
    )
  );
};
Switches.defaultProps = {
  labelPosition: "right",
  modifier: "",
  options: [],
  returnBoolean: false
};
export default withUtils(Switches);

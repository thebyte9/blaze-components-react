import React, { Fragment, useState } from 'react';
import { ErrorMessage, buildClassNames } from '@blaze-react/utils';
import Tooltip from '@blaze-react/tooltip';

interface IOptions {
  checked: boolean;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  id?: string;
}

type TLabelPosition = 'right' | 'left' | 'base' | 'top';
type TModifiers = 'checked' | 'default' | 'disabled' | 'primary' | 'secondary' | 'unchecked';

interface ISwitchesChange {
  event: React.ChangeEvent<HTMLInputElement>;
  value: IOptions[] | boolean;
  data: IOptions[];
}

interface ISwitchesProps extends React.HTMLAttributes<HTMLInputElement> {
  labelPosition?: TLabelPosition;
  options: IOptions[] | IOptions;
  modifier?: TModifiers;
  returnBoolean?: boolean;
  error?: boolean;
  tooltip?: any | string | JSX.Element;
  validationMessage?: string | JSX.Element;
  alignVertically?: boolean;
  icon?: React.ReactNode;
  onText?: string;
  offText?: string;
  onChange: (payload: ISwitchesChange) => void;
}

const Switches = ({
  labelPosition = 'right',
  onChange,
  options,
  modifier,
  returnBoolean = false,
  error = false,
  validationMessage = 'This field is required',
  tooltip,
  alignVertically = false,
  icon,
  onText = 'ON',
  offText = 'OFF',
  ...attrs
}: ISwitchesProps): JSX.Element => {
  const {
    wrap,
    formattedOptions,
  }: {
    wrap: (child: JSX.Element[]) => JSX.Element;
    formattedOptions: IOptions[];
  } = Array.isArray(options)
      ? {
        formattedOptions: options,
        wrap: (child: JSX.Element[]): JSX.Element => (
          <div className="form-group form-group--switch">{child}</div>
        ),
      }
      : {
        formattedOptions: [options],
        wrap: (child: JSX.Element[]): JSX.Element => <>{child}</>,
      };

  const [data, setData] = useState<IOptions[]>(
    formattedOptions.map((option, i) => ({
      checked: !!option.checked,
      value: option.value,
      disabled: !!option.disabled,
      required: !!option.required,
      label: option.label ?? '',
      id: option.id ?? `switch-${i}`,
    }))
  );

  const toggle = ({
    event,
    item,
    index,
  }: {
    event: React.ChangeEvent<HTMLInputElement>;
    item: IOptions;
    index: number;
  }): void => {
    if (item.disabled) return;

    const next = [...data];
    next[index] = { ...item, checked: !item.checked };
    setData(next);

    const checked = next.filter((opt) => opt.checked);
    onChange({
      event,
      value: returnBoolean ? !!checked.length : checked,
      data: next,
    });
  };

  const switchClassNames: string = buildClassNames('switch', {
    [`switch--${modifier}`]: !!modifier,
    [`switch--label--${labelPosition}`]: !!labelPosition,
    'switch--vertical': alignVertically,
  });

  return (
    <Fragment>
      {wrap(
        data.map((item: IOptions, index: number): JSX.Element => {
          const {
            checked = false,
            value,
            disabled,
            required,
            label = '',
            id = `switch-${index}`,
          } = item;

          const hasVisibleLabel = !!String(label).trim();
          const buttonAriaLabel =
            !hasVisibleLabel && (typeof tooltip === 'string' ? tooltip : 'Toggle');

          const Button = (
            <div className="switch__item">
              <input
                readOnly
                type="checkbox"
                value={value}
                disabled={disabled}
                checked={checked}
                required={required}
                onChange={(event) => toggle({ event, item, index })}
                id={id}
                aria-label={hasVisibleLabel ? undefined : buttonAriaLabel}
                {...attrs}
              />
              <label htmlFor={id}>
                {icon ? (
                  <span className="switch__icon" aria-hidden="true">
                    {icon}
                  </span>
                ) : null}

                <span className="switch__state" aria-hidden="true">
                  {checked ? onText : offText}
                </span>
              </label>
            </div>
          );

          return (
            <div className={switchClassNames} key={id}>
              {hasVisibleLabel && tooltip ? <Tooltip {...tooltip} /> : null}

              {hasVisibleLabel ? (
                <div className="switch__text">{label}</div>
              ) : null}

              {!hasVisibleLabel && tooltip ? (
                <Tooltip {...tooltip}>{Button}</Tooltip>
              ) : (
                Button
              )}
            </div>
          );
        })
      )}
      {error && <ErrorMessage message={validationMessage} />}
    </Fragment>
  );
};

const availableModifiers = {
  checked: 'checked',
  default: 'default',
  disabled: 'disabled',
  primary: 'primary',
  secondary: 'secondary',
  unchecked: 'unchecked',
};

const availablePositions = {
  base: 'base',
  left: 'left',
  right: 'right',
  top: 'top',
};

(Switches as any).availableModifiers = availableModifiers;
(Switches as any).availablePositions = availablePositions;

Switches.defaultProps = {
  error: false,
  labelPosition: 'right',
  modifier: '',
  returnBoolean: false,
  validationMessage: 'This field is required',
  alignVertically: false,
  icon: undefined,
  onText: '',
  offText: '',
};

export default Switches;

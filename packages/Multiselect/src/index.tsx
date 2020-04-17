import Checkboxes from "@blaze-react/checkboxes";
import Chip from "@blaze-react/chips";
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}

interface IData {
  id?: string;
  checked?: boolean;
  show?: boolean;
}

interface IMultiSelectProps {
  data: {
    identification: string;
    keyValue: string;
    filterBy: any[];
    data: object[];
  };
  getSelected: (...args: any[]) => any;
  label?: string;
  limit?: number;
  placeholder?: string;
  id?: string;
  children?: any;
  notFoundMessage?: string;
  required?: boolean;
  limitReachedMessage?: string;
  onChange?: (arg: { event: Event; value: string; name: string }) => void;
  error?: boolean;
  name: string;
  validationMessage: string | JSX.Element;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
    uniqueId: (element: any) => string;
  };
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue, identification },
  utils: { ErrorMessage, uniqueId, classNames },
  validationMessage,
  notFoundMessage,
  limitReachedMessage,
  getSelected,
  label,
  limit,
  placeholder,
  children,
  onChange,
  error,
  required,
  name,
  ...attrs
}): JSX.Element => {
  const multiRef = useRef<HTMLDivElement>(null);
  const [dataCopy, setDataCopy] = useState<any>([]);
  const [limitReached, setLimitReached] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return function cleanup() {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const reachedLimit = checkLimit(data);
      const verifiedData = reachedLimit
        ? data.map((option: any) => ({ ...option, disabled: !option.checked }))
        : data;
      updateData(verifiedData);
    }
  }, [data]);

  const setStatus = (obj: object, status: boolean): object =>
    Object.assign({}, obj, { show: status });

  const handleInputChange = ({
    event,
    value
  }: {
    event: any;
    value: string;
  }) => {
    setSearchValue(value);
    const parsedDataCopy: object[] = parseDataCopy(value);
    if (onChange) {
      onChange({ event, value, name });
    }
    updateData(parsedDataCopy);
  };

  const handleOutsideClick = (event: any) => {
    if (multiRef.current !== null && !multiRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  const parseDataCopy = (value: string) =>
    dataCopy.map((copy: object) =>
      setStatus(
        copy,
        !!keys.some(key => {
          const copyKey = copy[key].toString().toLowerCase();
          return copyKey.includes(value.toLowerCase());
        })
      )
    );

  const updateData = (newData: IData[]) => {
    const reachedLimit = checkLimit(newData);
    const verifiedData = newData.map((ele: any): object => ({
      ...ele,
      disabled: reachedLimit && !ele.checked
    }));
    setDataCopy(verifiedData);
    setLimitReached(reachedLimit);
  };

  const handleKeyDown = ({
    key: keyName,
    target: { value }
  }: {
    key: string;
    target: {
      value: string;
    };
  }) => {
    if (keyName === "Enter") {
      const parsedDataCopy: object[] = parseDataCopy(value);

      const elementToAdd = parsedDataCopy.findIndex(
        (parsedData: IData) => parsedData.show
      );
      const newDataCopy: IData[] = [...dataCopy];
      newDataCopy[elementToAdd].checked = true;
      updateData(newDataCopy);
      const selectedData = getChecked(newDataCopy);
      callGetSelected(selectedData);
    }
  };

  const handleCheckBoxChange = ({
    value,
    data: localData
  }: {
    value: any;
    data: any;
  }) => {
    updateData(localData);
    callGetSelected(value);
  };

  const parseCheckBoxOptions = (elements: object[]): object[] => {
    return elements.map((element: any): object => ({
      ...element,
      label: getLabel(element[keyValue], false)
    }));
  };

  const handleDelete = (id: string | number): void => {
    const elementToDelete: number = dataCopy.findIndex(
      ({ id: itemId }: { id: string | number }) => itemId === id
    );
    const updatedData = [...dataCopy];
    updatedData[elementToDelete].checked = false;
    const selectedData = getChecked(updatedData);
    updateData(updatedData);
    callGetSelected(selectedData);
  };

  const getChecked = (newDataCopy: IData[]) =>
    newDataCopy.filter(({ checked }: { checked: boolean }) => checked);

  const callGetSelected = (newDataCopy: IData[]) =>
    getSelected({
      event: {
        target: {
          name,
          value: newDataCopy.map(({ id }: IData) => id)
        }
      }
    });

  const handleClearAll = (): void => {
    const formatedElements: object[] = dataCopy.map((item: IData) => ({
      ...item,
      checked: false
    }));
    callGetSelected([]);
    setShow(false);
    setSearchValue("");
    updateData(formatedElements);
  };

  const handleFocus = (): void => setShow(true);

  const checkLimit = (dataToCheck: any) => {
    if (limit) {
      const selectedOptions = dataToCheck.filter(
        ({ checked }: { checked: boolean }) => checked
      );
      const reachedLimit = selectedOptions.length >= limit;
      return reachedLimit;
    }
    return false;
  };

  const matchQuery: boolean = !!dataCopy.filter((item: IData) => item.show)
    .length;
  const checkedItems = dataCopy.filter((item: IData) => item.checked);

  const requiredClassName: string = classNames({ required });

  const labelParser = (defaultLabel: string | [string, string]) => Array.isArray(defaultLabel) ? defaultLabel.join(', ') : defaultLabel;

  const getLabel = (defaultLabel?: string | [string, string], isChip?: boolean) => {
    if (Array.isArray(defaultLabel)) {
      const [main, sub] = defaultLabel;
      const mainLabel = labelParser(main);
      const subLabel = labelParser(sub);

      return isChip ? mainLabel : [mainLabel, subLabel];
    }
    return defaultLabel;
  };

  return (
    <div className="form-field form-field--multiselect">
      <div className="multiselect" ref={multiRef}>
        <div className="chip__wrapper">
          <label htmlFor={attrs.id} className={requiredClassName}>
            {label}
          </label>
          {!!checkedItems.length && (
            <span
              data-cy={`multiSelect-${label}-clearAll-button`}
              className="chip__wrapper__clear"
              onClick={handleClearAll}
            >
              Clear all
            </span>
          )}
        </div>
        {children}

        <div className="multiselect__input__container">
          <div className="multiselect__input__container__chips">
            {checkedItems.map(
              (selectedValue: object, index: number): JSX.Element => (
                <Chip
                  modifiers={[
                    Chip.availableModifiers.parent.deletable,
                    Chip.availableModifiers.parent.small
                  ]}
                  onDelete={() => handleDelete(selectedValue[identification])}
                  action={() => handleDelete(selectedValue[identification])}
                  key={uniqueId(selectedValue)}
                >
                  <Chip.Label
                    data-cy={`multiSelect-${label}-chip${index + 1}-label`}
                  >
                    {getLabel(selectedValue[keyValue], true)}
                  </Chip.Label>
                  <Chip.Icon
                    data-cy={`multiSelect-${label}-chip${index + 1}-icon`}
                    modifier={Chip.availableModifiers.icon.delete}
                  >
                    <i className="material-icons">clear</i>
                  </Chip.Icon>
                </Chip>
              )
            )}
            <Input
              value={searchValue}
              placeholder={placeholder}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              {...attrs}
            />
          </div>
        </div>

        {show && (
          <>
            <div className="multiselect__dropdown">
              {error && <ErrorMessage message={validationMessage} />}

              {!matchQuery && <p>{notFoundMessage}</p>}

              <Checkboxes
                data-cy={attrs['data-cy']}
                options={parseCheckBoxOptions(dataCopy)}
                onChange={handleCheckBoxChange}
              />
            </div>
            {limitReached && <p>{limitReachedMessage}</p>}
          </>
        )}
      </div>
    </div>
  );
};
MultiSelect.defaultProps = {
  children: "",
  error: false,
  getSelected: () => void 0,
  label: "",
  limit: 0,
  limitReachedMessage: "Select item limit reached",
  notFoundMessage: "No records available",
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Choose...",
  required: false,
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);

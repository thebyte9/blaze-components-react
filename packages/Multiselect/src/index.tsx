import Checkboxes from "@blaze-react/checkboxes";
import Chip from "@blaze-react/chips";
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import unionBy from "lodash.unionby";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";

interface IErrorMessage {
  message: string | JSX.Element;
  icon?: string;
}


interface IData {
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
  children?: any;
  selected?: any[];
  notFoundMessage?: string;
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
  utils: { ErrorMessage, uniqueId },
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
  name,
  selected
}): JSX.Element => {
  const multiRef = useRef<HTMLDivElement>(null);
  const [dataCopy, setDataCopy] = useState<any>([]);
  const [limitReached, setLimitReached] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const shouldUpdate =
      differenceWith(dataCopy, data, isEqual).length ||
      differenceWith(data, dataCopy, isEqual).length;
    const elementsWithSelected = unionBy(selected, data, "id");

    if (!dataCopy || shouldUpdate) {
      setDataCopy(
        elementsWithSelected.map((element: IData) => {
          element.show = true;
          return element;
        })
      );
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return function cleanup() {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [data]);

  const setStatus = (obj: object, status: boolean): object =>
    Object.assign({}, obj, { show: status });

  const handleInputChange = ({ event, value }: { event: any; value: string }) => {
    const parsedDataCopy: object[] = parseDataCopy(value);

    if (onChange) {
      onChange({ event, value, name });
    }
    setDataCopy(parsedDataCopy);
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

  const updateData = (element: number, value: boolean) => {
    const newDataCopy = [...dataCopy];
    newDataCopy[element].checked = value;
    setDataCopy(newDataCopy);
    checkLimit(newDataCopy);
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

      updateData(elementToAdd, true);
    }
  };

  const handleCheckBoxChange = ({
    value,
    data: localData
  }: {
    value: any;
    data: any;
  }) => {
    setDataCopy(localData);
    checkLimit(localData);
    getSelected({
      event: {
        target: {
          name,
          value
        }
      }
    });
  };

  const parseCheckBoxOptions = (elements: object[]): object[] => {
    return elements.map((element: any): object => ({
      ...element,
      label: element[keyValue]
    }));
  };

  const handleDelete = (id: string | number): void => {
    const elementToDelete: number = dataCopy.findIndex(
      ({ id: itemId }: { id: string | number }) => itemId === id
    );
    updateData(elementToDelete, false);
  };

  const handleClearAll = (): void => {
    const formatedElements: object[] = dataCopy.map((item: IData) => {
      item.checked = false;
      return item;
    });
    setDataCopy(formatedElements);
    setShow(false);
    checkLimit(formatedElements);
  };

  const handleFocus = (): void => setShow(true);

  const checkLimit = (dataToCheck: any) => {
    if (limit) {
      const selectedOptions = dataToCheck.filter(
        ({ checked }: { checked: boolean }) => checked
      );
      const reachedLimit = selectedOptions.length >= limit;
      setLimitReached(reachedLimit);
    }
  };
  const matchQuery: boolean = !!dataCopy.filter((item: IData) => item.show).length;

  return (
    <>
      {label && <label>{label}</label>}
      <div className="multiselect" ref={multiRef}>
        {dataCopy
          .filter((item: IData) => item.checked)
          .map(
            (selectedValue: object): JSX.Element => (
              <Chip
                modifiers={[
                  Chip.availableModifiers.parent.deletable,
                  Chip.availableModifiers.parent.small
                ]}
                onDelete={() => handleDelete(selectedValue[identification])}
                action={() => handleDelete(selectedValue[identification])}
                key={uniqueId(selectedValue)}
              >
                <Chip.Label>{selectedValue[keyValue]}</Chip.Label>
                <Chip.Icon modifier={Chip.availableModifiers.icon.delete}>
                  <i className="material-icons">clear</i>
                </Chip.Icon>
              </Chip>
            )
          )}

        {children}
        <Input
          value={dataCopy}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          className="multiselect__input"
        />
        {show && !limitReached && (
          <div className="multiselect__dropdown">
            {error && <ErrorMessage message={validationMessage} />}

            {!matchQuery && <p>{notFoundMessage}</p>}

            <Checkboxes
              options={parseCheckBoxOptions(dataCopy)}
              onChange={handleCheckBoxChange}
            />
          </div>
        )}
        <span className="multiselect__clear" onClick={handleClearAll}>
          <i className="material-icons">clear</i>
        </span>
        {limitReached && <p>{limitReachedMessage}</p>}
      </div>
    </>
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
  placeholder: "Search...",
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);

import Checkboxes from "@blaze-react/checkboxes";
import Chip from "@blaze-react/chips";
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import unionBy from "lodash.unionby";
import React, { FunctionComponent, useEffect, useState } from "react";
import uuidv1 from "uuid/v1";

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
  placeholder?: string;
  children?: any;
  selected?: any[];
  notFoundMessage: string;
  onChange?: (arg: { event: Event; value: string; name: string }) => void;
  error?: boolean;
  name: string;
  validationMessage: string | JSX.Element;
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
    ErrorMessage: FunctionComponent<IErrorMessage>;
  };
}
const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue, identification },
  utils: { ErrorMessage },
  validationMessage,
  notFoundMessage,
  getSelected,
  placeholder,
  children,
  onChange,
  error,
  name,
  selected
}): JSX.Element => {
  const [dataCopy, setDataCopy] = useState<any>([]);
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
    const parsedDataCopy: object[] = parseDataCopy(value);

    if (onChange) {
      onChange({ event, value, name });
    }
    setDataCopy(parsedDataCopy);
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

      if (elementToAdd >= 0) {
        const newDataCopy = [...dataCopy];
        newDataCopy[elementToAdd].checked = true;
        setDataCopy(newDataCopy);
      }
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
    return elements
      ? elements.map((element: any): object => ({
          ...element,
          label: element[keyValue]
        }))
      : [];
  };

  const handleDelete = (id: string | number): void => {
    const elementToDelete: number = dataCopy.findIndex(
      ({ id: itemId }: { id: string | number }) => itemId === id
    );

    if (elementToDelete >= 0) {
      const newDataCopy = [...dataCopy];
      newDataCopy[elementToDelete].checked = false;
      setDataCopy(newDataCopy);
    }
  };

  const handleClearAll = (): void => {
    const formatedElements: object[] = dataCopy.map((item: IData) => {
      item.checked = false;
      return item;
    });

    setDataCopy(formatedElements);
    setShow(false);
  };

  const handleFocus = (): void => setShow(true);

  const matchQuery: boolean =
    !!dataCopy.length && !!dataCopy.filter((item: IData) => item.show).length;

  return (
    <>
      <div className="multiselect">
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
                key={uuidv1()}
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
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          className="multiselect__input"
        />

        {show && (
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
      </div>
    </>
  );
};
MultiSelect.defaultProps = {
  children: "",
  error: false,
  getSelected: () => void 0,
  notFoundMessage: "No records available",
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Search...",
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);

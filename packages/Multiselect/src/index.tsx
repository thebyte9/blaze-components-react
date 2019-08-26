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
        elementsWithSelected.map(e => {
          e.show = true;
          return e;
        })
      );
    }
  }, [data]);

  const setStatus = (obj: any, status: any): object =>
    Object.assign({}, obj, { show: status });

  const handleInputChange = ({
    event,
    value
  }: {
    event: any;
    value: string;
  }) => {
    const parsedDataCopy = dataCopy.map((copy: any) =>
      setStatus(
        copy,
        !!keys.some(key => {
          const copyKey = copy[key].toString().toLowerCase();
          return copyKey.includes(value.toLowerCase());
        })
      )
    );

    if (onChange) {
      onChange({ event, value, name });
    }
    setDataCopy(parsedDataCopy);
  };

  const handleKeyDown = ({
    key: keyName,
    target
  }: {
    key: string;
    target: any;
  }) => {
    if (keyName === "Enter") {
      if (!target.value.length) {
        return;
      }
      const a = [...dataCopy];

      const parsedDataCopy = a.map((copy: any) =>
        setStatus(
          copy,
          !!keys.some(key => {
            const copyKey = copy[key].toString().toLowerCase();
            return copyKey.includes(target.value.toLowerCase());
          })
        )
      );

      const elementToAdd = parsedDataCopy.findIndex((f: any) => f.show);

      if (elementToAdd >= 0) {
        a[elementToAdd].checked = true;
        setDataCopy(a);
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

  const handleDelete = (id: any) => {
    const elementToDelete = dataCopy.findIndex(
      ({ id: itemId }: { id: any }) => itemId === id
    );

    if (elementToDelete >= 0) {
      const a = [...dataCopy];
      a[elementToDelete].checked = false;
      setDataCopy(a);
    }
  };

  const handleClearAll = () => {
    const formatedElements = dataCopy.map((item: any) => {
      item.checked = false;
      return item;
    });

    setDataCopy(formatedElements);
    setShow(false);
  };

  const handleFocus = () => setShow(true);

  const matchQuery =
    !!dataCopy.length && !!dataCopy.filter((d: any) => d.show).length;

  return (
    <>
      <div className="ttags">
        {dataCopy
          .filter((a: any) => a.checked)
          .map(
            (selectedValue: any): JSX.Element => (
              <Chip
                modifiers={[
                  Chip.availableModifiers.parent.deletable,
                  Chip.availableModifiers.parent.small
                ]}
                onDelete={() => handleDelete(selectedValue[identification])}
                action={() => handleDelete(selectedValue[identification])}
                key={uuidv1()}
              >
                <Chip.Label>
                  {selectedValue[keyValue]} {selectedValue[identification]}
                </Chip.Label>
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
          className="ttag-input"
        />

        {show && (
          <div className="tselect">
            {error && <ErrorMessage message={validationMessage} />}

            {!matchQuery && <p>kkkkkkk</p>}

            <Checkboxes
              options={parseCheckBoxOptions(dataCopy)}
              onChange={handleCheckBoxChange}
            />
          </div>
        )}
        <span className="tclear" onClick={handleClearAll}>
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
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Search...",
  validationMessage: "This field is required"
};
export default withUtils(MultiSelect);

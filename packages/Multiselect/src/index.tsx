import withUtils from "@blaze-react/utils";
import React, { useEffect, useRef, useState } from "react";
import { IData, IMultiSelectProps } from "./interface";
import MultiSelectBar from './MultiSelectBar'
import MultiSelectList from "./MultiSelectList";


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
  const [activeElement, setActiveElement] = useState(0);

  const handleOutsideClick = (event: any) => {
    if (multiRef.current !== null && !multiRef.current.contains(event.target)) {
      setShow(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
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

  const parseDataCopy = (value: string) => {
    return dataCopy.map((copy: any) => ({
      ...copy,
      show: !!keys.some((key: any) => {
        const copyKey = copy[key].toString().toLowerCase();
        return copyKey.includes(value.toLowerCase());
      })
    }));

  }

  const handleInputChange = ({
    event,
    value
  }: {
    event: any;
    value: string;
  }) => {
    setSearchValue(value);
    const parsedDataCopy: object[] = parseDataCopy(value);
    setActiveElement(0)
    if (onChange) {
      onChange({ event, value, name });
    }
    updateData(parsedDataCopy);
  };

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

  const getCheckedIds = (newDataCopy: IData[]) => {
    return newDataCopy.reduce((acc: any, { checked, id }: { checked: boolean, id: string }) => {
      if (checked) {
        acc.push(id)
      }
      return acc
    }, []);
  }

  const updateData = (newData: IData[]) => {
    const reachedLimit = checkLimit(newData);
    const verifiedData = newData.map((ele: any, index: number): object => ({
      index,
      ...ele,
      disabled: reachedLimit && !ele.checked
    }));
    setDataCopy(verifiedData);
    setLimitReached(reachedLimit);
    return verifiedData
  };

  const handleKeyDown = (event: any) => {
    const { keyCode } = event

    if (keyCode === 27) { //escape
      if (!show) return
      setShow(!show)
    }

    if (keyCode === 38) { // arrow up
      if (activeElement === 0) return
      setActiveElement(activeElement - 1)

    }
    if (keyCode === 40) { // arrow down
      if (activeElement === dataCopy.length - 1) return
      setActiveElement(activeElement + 1)
    }

    if (keyCode === 13) { // enter
      if (searchValue) {
        const originalIndex = matchQuery[activeElement].index
        console.log('originalIndex', dataCopy[originalIndex])
        handleCheckBoxChange({
          index: originalIndex,
          value: { checked: !dataCopy[originalIndex].checked },
          data: dataCopy
        })
        return
      }

      handleCheckBoxChange({
        index: activeElement,
        value: { checked: !dataCopy[activeElement].checked },
        data: dataCopy
      })
    }
  };

  const handleCheckBoxChange = ({
    index,
    value,
    data: localData
  }: {
    index: number,
    value: any;
    data: any;
  }) => {
    const updatedData = [...localData]
    if (index !== activeElement) {
      setActiveElement(index)
    }
    updatedData[index].checked = value.checked
    updateData(updatedData);
    getSelected({
      event: {
        target: {
          name,
          value: getCheckedIds(updatedData)
        }
      }
    });
  };

  const handleDelete = (id: string | number): void => {
    const elementToDelete: number = dataCopy.findIndex(
      ({ id: itemId }: { id: string | number }) => itemId === id
    );
    const updatedData = [...dataCopy];
    updatedData[elementToDelete].checked = false;
    const selectedData = getCheckedIds(updatedData);
    updateData(updatedData);
    getSelected({
      event: {
        target: {
          name,
          value: selectedData
        }
      }
    });
  };

  const handleClearAll = (): void => {
    const formatedElements: object[] = dataCopy.map((item: IData) => ({
      ...item,
      checked: false
    }));
    setShow(false);
    setSearchValue("");
    updateData(formatedElements);
    getSelected({
      event: {
        target: {
          name,
          value: []
        }
      }
    });
  };

  const handleFocus = (): void => setShow(true);



  const matchQuery: any = dataCopy.filter((item: IData) => item.show)
  const checkedItems = dataCopy.filter((item: IData) => item.checked);

  return (
    <div className="form-field form-field--multiselect">
      <div className="multiselect" ref={multiRef}>
        <MultiSelectBar
          required={required}
          label={label}
          attrs={attrs}
          checkedItems={checkedItems}
          handleClearAll={handleClearAll}
          handleDelete={handleDelete}
          identification={identification}
          uniqueId={uniqueId}
          keyValue={keyValue}
          searchValue={searchValue}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          handleFocus={handleFocus}
          classNames={classNames}
        />

        {show && (<MultiSelectList
          activeElement={activeElement}
          error={error}
          validationMessage={validationMessage}
          matchQuery={matchQuery}
          notFoundMessage={notFoundMessage}
          dataCopy={dataCopy}
          keyValue={keyValue}
          limitReached={limitReached}
          limitReachedMessage={limitReachedMessage}
          handleCheckBoxChange={handleCheckBoxChange}
          ErrorMessage={ErrorMessage}
        />)}
      </div>
    </div>
  );
};
MultiSelect.defaultProps = {
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

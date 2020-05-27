import withUtils from "@blaze-react/utils";
import React, { useEffect, useRef, useState } from "react";
import { IData, IMultiSelectProps } from "./interface";
import MultiSelectBar from "./MultiSelectBar";
import MultiSelectList from "./MultiSelectList";

const MultiSelect: React.SFC<IMultiSelectProps> = ({
  data: { data, filterBy: keys, keyValue, identification },
  onItemsRendered,
  utils: { ErrorMessage, uniqueId, classNames },
  validationMessage,
  notFoundMessage,
  limitReachedMessage,
  searchTerm,
  getSelected,
  label,
  limit,
  placeholder,
  onChange,
  error,
  required,
  name,
  isDynamic,
  ...attrs
}): JSX.Element => {
  const multiRef = useRef<HTMLDivElement>(null);
  const [dataCopy, setDataCopy] = useState<any>([]);
  const [limitReached, setLimitReached] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [verifiedRanges, setVerifiedRanges] = useState<number[]>([]);

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
    setSearchValue(searchTerm);
    const parsedDataCopy: object[] = parseDataCopy(searchTerm);
    console.log("parsedDataCopy", parsedDataCopy);
    updateData(parsedDataCopy);
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

  const handleOnItemsRenderer = async (params: any) => {
    if (!isDynamic) {
      return;
    }
    const { startIndex, stopIndex } = params;
    const rowsLength = dataCopy.length;
    const loadIndex = Math.floor(rowsLength / 2);
    if (
      (loadIndex > 0 &&
        loadIndex < startIndex &&
        !verifiedRanges.includes(loadIndex)) ||
      (stopIndex === rowsLength - 1 && startIndex === 0)
    ) {
      const response = await onItemsRendered({ ...params });
      setVerifiedRanges([...verifiedRanges, loadIndex]);
      setDataCopy(response.data);
    }
  };

  const parseDataCopy = (value: string) => {
    return dataCopy.map((copy: any) => ({
      ...copy,
      show: !!keys.some((key: any) => {
        const copyKey = copy[key].toString().toLowerCase();
        return copyKey.includes(value.toLowerCase());
      }),
    }));
  };

  const handleInputChange = ({
    event,
    value,
  }: {
    event: any;
    value: string;
  }) => {
    setSearchValue(value);
    if (onChange) {
      onChange({ event, value, name, clearList: () => setDataCopy([]) });
    }
    if (isDynamic) {
      return;
    }
    const parsedDataCopy: object[] = parseDataCopy(value);
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
    return newDataCopy.reduce(
      (acc: any, { checked, id }: { checked: boolean; id: string }) => {
        if (checked) {
          acc.push(id);
        }
        return acc;
      },
      []
    );
  };

  const updateData = (newData: IData[]) => {
    const reachedLimit = checkLimit(newData);
    const verifiedData = newData.map((ele: any, index: number): object => ({
      index,
      ...ele,
      disabled: reachedLimit && !ele.checked,
    }));
    setDataCopy(verifiedData);
    setLimitReached(reachedLimit);
    return verifiedData;
  };

  const handleKeyDown = (event: any) => {
    const { keyCode } = event;

    if (keyCode === 27) {
      // escape
      if (!show) {
        return;
      }
      setShow(!show);
    }

    if (keyCode === 40) {
      // arrow down
      if (show) {
        return;
      }
      setShow(!show);
    }
  };

  const handleCheckBoxChange = ({
    id,
    value,
    data: localData,
  }: {
    id: string;
    name: string;
    value: any;
    data: any;
  }) => {
    const reachedLimit = checkLimit(localData);
    if (reachedLimit) {
      return;
    }
    const updatedData = [...localData];
    const index = updatedData.findIndex((e: any) => e[keyValue] === id);
    updatedData[index].checked = value.checked;
    updateData(updatedData);
    getSelected({
      event: {
        target: {
          name,
          value: getCheckedIds(updatedData),
        },
      },
    });
  };

  const handleDelete = ({ id }: { id: string | number }): void => {
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
          value: selectedData,
        },
      },
    });
  };

  const handleClearAll = (): void => {
    const formatedElements: object[] = dataCopy.map((item: IData) => ({
      ...item,
      checked: false,
    }));
    setShow(false);
    setSearchValue("");
    updateData(formatedElements);
    getSelected({
      event: {
        target: {
          name,
          value: [],
        },
      },
    });
  };

  const labelParser = ({ label: lab }: { label: string[] | string }) =>
    Array.isArray(lab) ? lab.join(", ") : lab;
  const getLabel = ({
    label: lab,
    isChip,
  }: {
    label: string | [string, string];
    isChip?: boolean;
  }) => {
    if (Array.isArray(lab)) {
      const [main, sub] = lab;
      const mainLabel = labelParser({ label: main });
      const subLabel = labelParser({ label: sub });
      return isChip ? mainLabel : [mainLabel, subLabel];
    }
    return lab;
  };

  const handleFocus = (): void => setShow(true);

  const matchQuery: any = dataCopy.filter((item: IData) => item.show);
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
          getLabel={getLabel}
        />

        {show && (
          <MultiSelectList
            data-cy={attrs["data-cy"]}
            onItemsRendered={handleOnItemsRenderer}
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
            getLabel={getLabel}
          />
        )}
      </div>
    </div>
  );
};
MultiSelect.defaultProps = {
  error: false,
  getSelected: () => void 0,
  isDynamic: false,
  label: "",
  limit: 0,
  limitReachedMessage: "Select item limit reached",
  notFoundMessage: "No records available",
  onChange: (arg: { event: Event; value: string }) => {
    return arg;
  },
  placeholder: "Choose...",
  required: false,
  validationMessage: "This field is required",
};
export default withUtils(MultiSelect);

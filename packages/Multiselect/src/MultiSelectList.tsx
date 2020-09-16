import { Checkbox } from "@blaze-react/checkboxes";
import withUtils from "@blaze-react/utils";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import React, { useEffect, useState } from "react";
import VirtualList from "react-tiny-virtual-list";

const MultiSelectList = ({
  dataCopy,
  error,
  getLabel,
  handleCheckBoxChange,
  keyValue,
  limitReached,
  limitReachedMessage,
  matchQuery,
  notFoundMessage,
  onItemsRendered,
  utils: { ErrorMessage },
  validationMessage,
  ...attrs
}: any) => {
  const [list, setList] = useState<any>([]);
  const itemSize = 45;

  useEffect(() => {
    if (differenceWith(dataCopy, list, isEqual)) {
      const newList = matchQuery.length ? matchQuery : dataCopy;
      setList(newList);
    }
  }, [matchQuery, dataCopy]);

  return (
    <>
      <div className="multiselect__dropdown">
        {error && <ErrorMessage message={validationMessage} />}

        {!matchQuery.length && <p>{notFoundMessage}</p>}
        {!!list.length && (
          <div>
            <VirtualList
              width={"100%"}
              height={"245px"}
              itemCount={list.length}
              itemSize={itemSize}
              overscanCount={20}
              onItemsRendered={onItemsRendered}
              renderItem={({ index, style }) => (
                <div
                  style={style}
                  key={list[index].id || list[index][keyValue] || index}
                >
                  <Checkbox
                    full
                    data-cy={`${
                      attrs["data-cy"] || "multiselect"
                    }-checkbox-cy-${index}`}
                    testId={`checkbox-${index}`}
                    {...list[index]}
                    label={getLabel({
                      isChip: false,
                      label: list[index][keyValue],
                    })}
                    onChange={({ value }: { value: any }) =>
                      handleCheckBoxChange({
                        data: dataCopy,
                        id: list[index][keyValue],
                        value,
                      })
                    }
                  />
                </div>
              )}
            ></VirtualList>
          </div>
        )}
      </div>
      {limitReached && <p>{limitReachedMessage}</p>}
    </>
  );
};

export default withUtils(MultiSelectList);

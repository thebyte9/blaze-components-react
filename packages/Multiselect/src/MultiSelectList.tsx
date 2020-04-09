import Checkbox from "@blaze-react/checkboxes/src/Checkbox";
import differenceWith from 'lodash.differencewith'
import isEqual from 'lodash.isequal'
import React, { useEffect, useState } from 'react'
import VirtualList from "react-tiny-virtual-list";
import withUtils from "@blaze-react/utils";

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
}: any) => {
  const [list, setList] = useState([])
  const itemSize = 45;

  useEffect(() => {
    if (differenceWith(dataCopy, list, isEqual)) {
      const newList = matchQuery.length ? matchQuery : dataCopy
      setList(newList)
    }
  }, [matchQuery, dataCopy])

  return (
    <>
      <div className="multiselect__dropdown">
        {error && <ErrorMessage message={validationMessage} />}

        {!matchQuery.length && <p>{notFoundMessage}</p>}
        {!!list.length && <div>
          <VirtualList
            width={"100%"}
            height={'245px'}
            itemCount={list.length}
            itemSize={itemSize}
            overscanCount={20}
            onItemsRendered={onItemsRendered}
            renderItem={({ index, style }) =>
              (
                <div style={style} key={index}  >
                  <Checkbox {...list[index]} label={getLabel({ label: list[index][keyValue], isChip: false })} onChange={({ value }: { value: any }) => handleCheckBoxChange({ index, value, data: dataCopy })} />
                </div>
              )
            }></VirtualList>
        </div>}

      </div>
      {limitReached && <p>{limitReachedMessage}</p>}
    </>
  )
}

export default withUtils(MultiSelectList)
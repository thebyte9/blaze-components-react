import React, { useState, useEffect } from 'react'
import Checkbox from "@blaze-react/checkboxes/src/Checkbox";
import VirtualList from "react-tiny-virtual-list";
import withUtils from "@blaze-react/utils";
import differenceWith from 'lodash.differencewith'
import isEqual from 'lodash.isequal'

const MultiSelectList = ({
  error,
  validationMessage,
  matchQuery,
  notFoundMessage,
  dataCopy,
  keyValue,
  limitReached,
  limitReachedMessage,
  handleCheckBoxChange,
  activeElement,
  onItemsRendered,
  utils: { ErrorMessage },
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(activeElement)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [listLength, setListLength] = useState(0)
  const [list, setList] = useState([])
  const itemSize = 45;

  useEffect(() => {
    if (activeElement !== currentIndex) {
      setCurrentIndex(activeElement)
      setScrollOffset(itemSize * activeElement)
    }
    if (activeElement === currentIndex || differenceWith(dataCopy, list, isEqual)) {
      const length = matchQuery.length > 0 ? matchQuery.length : dataCopy.length
      const newList = matchQuery.length ? matchQuery : dataCopy
      setListLength(length)
      setList(newList)
    }
  }, [activeElement, matchQuery, dataCopy])



  return (
    <>
      <div className="multiselect__dropdown">
        {error && <ErrorMessage message={validationMessage} />}

        {!matchQuery.length && <p>{notFoundMessage}</p>}
        {!!list.length && <div>
          <VirtualList
            width={"100%"}
            height={'245px'}
            itemCount={listLength}
            itemSize={itemSize}
            scrollOffset={scrollOffset}
            overscanCount={20}
            onItemsRendered={onItemsRendered}
            renderItem={({ index, style }) => (
              <div style={{ ...style, ...activeElement === index ? { background: '#F0F0F0' } : {} }} key={index}  >
                <Checkbox {...list[index]} label={list[index][keyValue]} onChange={({ value }: { value: any }) => handleCheckBoxChange({ index, value, data: dataCopy })} />
              </div>
            )}></VirtualList>
        </div>}

      </div>
      {limitReached && <p>{limitReachedMessage}</p>}
    </>
  )
}

export default withUtils(MultiSelectList)
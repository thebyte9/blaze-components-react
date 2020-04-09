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
  onItemsRendered,
  utils: { ErrorMessage },
}: any) => {
  const [list, setList] = useState([])
  const itemSize = 45;

  useEffect(() => {
    if (differenceWith(dataCopy, list, isEqual)) {
      const newList = matchQuery.length ? matchQuery : dataCopy
      setList(newList)
    }
  }, [matchQuery, dataCopy])

  const labelParser = (label: string[] | string) => Array.isArray(label) ? label.join(', ') : label
  const getLabel = ({ label, isChip }: { label: string | [string, string], isChip?: boolean }) => {
    console.log('label', label)
    if (Array.isArray(label)) {
      const [main, sub] = label;
      const mainLabel = labelParser(main);
      const subLabel = labelParser(sub);
      return isChip ? mainLabel : [mainLabel, subLabel];
    }
    return label;
  };



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
            renderItem={({ index, style }) => {
              console.log('list[index][keyValue] ->', list[index][keyValue])
              return (
                <div style={style} key={index}  >
                  <Checkbox {...list[index]} label={getLabel({ label: list[index][keyValue], isChip: false })} onChange={({ value }: { value: any }) => handleCheckBoxChange({ index, value, data: dataCopy })} />
                </div>
              )
            }}></VirtualList>
        </div>}

      </div>
      {limitReached && <p>{limitReachedMessage}</p>}
    </>
  )
}

export default withUtils(MultiSelectList)
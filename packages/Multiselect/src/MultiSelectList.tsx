import { Checkbox } from '@blaze-react/checkboxes';
import { ErrorMessage } from '@blaze-react/utils';
import differenceWith from 'lodash.differencewith';
import isEqual from 'lodash.isequal';
import React, { useEffect, useRef, useState } from 'react';
import VirtualList from 'react-tiny-virtual-list';

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
  validationMessage,
  ...attrs
}: any) => {
  const [list, setList] = useState<any>([]);
  const itemSize = 45;

  const [heights, setHeights] = useState<{ [i: number]: number }>({});
  const listRef = useRef<any>(null);

  const observer = useRef<ResizeObserver>();
  useEffect(() => {
    observer.current = new ResizeObserver(entries => {
      let didChange = false;
      const newHeights = { ...heights };

      for (const ent of entries) {
        const idx = parseInt(ent.target.getAttribute('data-row-index')!, 10);
        const h = ent.contentRect.height;
        if (newHeights[idx] !== h) {
          newHeights[idx] = h;
          didChange = true;
        }
      }

      if (didChange) {
        setHeights(newHeights);
        listRef.current && listRef.current.recomputeSizes();
      }
    });
    return () => observer.current?.disconnect();
  }, [heights, listRef]);

  useEffect(() => {
    setHeights({});
    listRef.current && listRef.current.scrollToOffset(0);
  }, [dataCopy, matchQuery]);

  useEffect(() => {
    if (differenceWith(dataCopy, list, isEqual)) {
      const newList = matchQuery.length ? matchQuery : dataCopy;
      setList(newList);
    }
  }, [matchQuery, dataCopy]);

  return (
    <>
      {!limitReached ? <div className="multiselect__dropdown">
        {error && <ErrorMessage message={validationMessage} />}

        {!matchQuery.length && <p>{notFoundMessage}</p>}
        {!!list.length && (
          <div>
            <VirtualList
              ref={listRef}
              width={'100%'}
              height={'245px'}
              itemCount={list.length}
              itemSize={(index) => heights[index] || itemSize}
              estimatedItemSize={itemSize}
              overscanCount={20}
              onItemsRendered={onItemsRendered}
              renderItem={({ index, style }) => {
                const item = list[index];
                const id = item.id || item[keyValue] || index;
                return (
                  <div
                    style={{ ...style, height: heights[index] }}
                    data-row-index={index}
                    key={id}
                    className="multiselect__dropdown-item"
                    ref={el => {
                      if (el) observer.current!.observe(el);
                      else observer.current!.disconnect();
                    }}
                  >
                    <Checkbox
                      full
                      data-cy={`${attrs['data-cy'] || 'multiselect'}-checkbox-cy-${index}`}
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
                )
              }}
            ></VirtualList>
          </div>
        )}
      </div> : <p>{limitReachedMessage}</p>}
    </>
  );
};

export default MultiSelectList;

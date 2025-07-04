import { Checkbox } from '@blaze-react/checkboxes';
import { ErrorMessage } from '@blaze-react/utils';
import differenceWith from 'lodash.differencewith';
import isEqual from 'lodash.isequal';
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';

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
  searchValue,
  ...attrs
}: any) => {
  const [list, setList] = useState<any[]>([]);
  const itemSize = 45;
  const overscanCount = 5;

  const [heights, setHeights] = useState<{ [i: number]: number }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(245);
  const lastRendered = useRef({ startIndex: -1, stopIndex: -1 });

  const observer = useRef<ResizeObserver>();

  useEffect(() => {
    observer.current = new ResizeObserver(entries => {
      let didChange = false;
      const newHeights = { ...heights };
      entries.forEach(ent => {
        const idx = parseInt(ent.target.getAttribute('data-row-index')!, 10);
        const height = ent.contentRect.height;
        if (newHeights[idx] !== height) {
          newHeights[idx] = height;
          didChange = true;
        }
      });
      if (didChange) {
        setHeights(newHeights);
      }
    });
    return () => observer.current?.disconnect();
  }, [heights]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const resizeObserver = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height);
    });
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (differenceWith(dataCopy, list, isEqual)) {
      setList(matchQuery.length ? matchQuery : dataCopy);
    }
  }, [dataCopy, matchQuery]);

  useLayoutEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>('[data-row-index]');
    if (!nodes.length) return;
    const newHeights: { [i: number]: number } = {};
    nodes.forEach(node => {
      const idx = parseInt(node.dataset.rowIndex!, 10);
      newHeights[idx] = node.getBoundingClientRect().height;
    });
    setHeights(height => ({ ...height, ...newHeights }));
  }, [list]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setScrollTop(el.scrollTop);
    }
  }, [heights]);

  const { positions, totalHeight } = useMemo(() => {
    const positions: number[] = [];
    let totalHeight = 0;
    list.forEach((_, i) => {
      positions[i] = totalHeight;
      totalHeight += heights[i] || itemSize;
    });
    return { positions, totalHeight };
  }, [list, heights]);

  const { startIndex, endIndex } = useMemo(() => {
    if (!list.length || containerHeight <= 0) {
      return { startIndex: 0, endIndex: -1 };
    }

    let startIndex = 0;
    let endIndex = list.length;
    while (startIndex < endIndex) {
      const mid = Math.floor((startIndex + endIndex) / 2);
      if (positions[mid] < scrollTop) {
        startIndex = mid + 1;
      } else {
        endIndex = mid;
      }
    }
    startIndex = Math.max(0, startIndex - 1);

    let position = positions[startIndex];
    endIndex = startIndex;
    while (endIndex < list.length && position < scrollTop + containerHeight) {
      position += heights[endIndex] || itemSize;
      endIndex++;
    }

    startIndex = Math.max(0, startIndex - overscanCount);
    endIndex = Math.min(list.length - 1, endIndex + overscanCount);

    return { startIndex, endIndex };
  }, [scrollTop, containerHeight, positions, heights, list.length]);

  useEffect(() => {
    if (
      lastRendered.current.startIndex !== startIndex ||
      lastRendered.current.stopIndex !== endIndex
    ) {
      onItemsRendered({ startIndex, stopIndex: endIndex });
      lastRendered.current = { startIndex, stopIndex: endIndex };
    }
  }, [startIndex, endIndex, onItemsRendered]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <>
      {!limitReached ? (
        <div className="multiselect__dropdown">
          {error && <ErrorMessage message={validationMessage} />}

          {!matchQuery.length && <p>{notFoundMessage}</p>}
          {!!list.length && !!matchQuery.length && (
            <div
              ref={scrollContainerRef}
              style={{
                height: '245px',
                overflowY: 'auto',
                position: 'relative',
              }}
              onScroll={handleScroll}
            >
              <div style={{ height: totalHeight }}>
                {list.slice(startIndex, endIndex + 1).map((item, idx) => {
                  const actualIndex = startIndex + idx;
                  const id = item.id ?? item[keyValue] ?? actualIndex;

                  return (
                    <div
                      key={id}
                      data-row-index={actualIndex}
                      style={{
                        position: 'absolute',
                        top: positions[actualIndex],
                        left: 0,
                        width: '100%',
                      }}
                      ref={el => {
                        if (el) observer.current?.observe(el);
                      }}
                    >
                      <Checkbox
                        full
                        data-cy={`${attrs['data-cy'] || 'multiselect'}-checkbox-cy-${idx}`}
                        data-testid={`checkbox-${idx}`}
                        {...item}
                        label={getLabel({
                          isChip: false,
                          label: item[keyValue],
                        })}
                        onChange={({ value }: { value: any }) =>
                          handleCheckBoxChange({
                            data: dataCopy,
                            id: item[keyValue],
                            value,
                          })
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>{limitReachedMessage}</p>
      )}
    </>
  );
};

export default MultiSelectList;

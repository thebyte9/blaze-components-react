import React from 'react';
import DragHandler from '../DragHandler';
import { buildClassNames } from '../utils/buildClassNames';

interface IItem {
  [index: string]: any;
  item: {
    id?: any;
  };
}
interface IDropTarget {
  overId: any;
  mode: 'before' | 'after' | 'inside';
}
interface INestableItemProps {
  item: IItem;
  index?: number;
  onMouseEnter: (...args: any[]) => void;
  onDragStart: (...args: any[]) => void;
  dragItem?: any;
  dropTarget?: IDropTarget | null;
  renderItem: any;
  childrenProp: string;
}

const NestableItem: React.SFC<INestableItemProps> = ({
  item,
  index,
  onMouseEnter,
  onDragStart,
  dragItem,
  dropTarget,
  renderItem: RenderItem,
  childrenProp,
}) => {
  // The drag handle must be a STABLE component type. An inline
  // `() => <DragHandler/>` creates a new type on every render, so the re-render
  // triggered by drag start (is-dragging / drop indicators) unmounts and
  // remounts the handle — detaching the native drag's source element. Chrome
  // then stops delivering drag events for that drag (and dragend on a detached
  // source is lost, leaving the drag layer stuck on screen).
  const latest = React.useRef({ item, onDragStart });
  latest.current = { item, onDragStart };
  const BoundDragHandler = React.useMemo(
    () => () => (
      <DragHandler onDragStart={(e: any) => latest.current.onDragStart(e, latest.current.item)} />
    ),
    []
  );

  const isDragging = dragItem && dragItem.id === item.id;
  const hasChildrenProperty = item[childrenProp];
  const hasChildren = item[childrenProp] && item[childrenProp].length;
  const isDropTarget = dropTarget && dropTarget.overId === item.id;
  const listItemClassName = buildClassNames('nestable-item', {
    'drop-after': isDropTarget && dropTarget.mode === 'after',
    'drop-before': isDropTarget && dropTarget.mode === 'before',
    'drop-inside': isDropTarget && dropTarget.mode === 'inside',
    'is-dragging': isDragging,
    'nestable-item-parent': hasChildrenProperty,
  });

  return (
    <li
      className={listItemClassName}
      id={item.id}
      data-testid={`nestable-item-${index}`}
      onMouseEnter={(e) => onMouseEnter(e, item)}
      onMouseMove={(e) => onMouseEnter(e, item)}
    >
      <div className="nestable-item-name">
        <RenderItem item={item} index={index} DragHandler={BoundDragHandler}>
          {hasChildrenProperty && hasChildren ? (
            <ol className="nestable-list">
              {item[childrenProp].map((element: any, i: number) => (
                <NestableItem
                  key={element.id}
                  index={i}
                  item={element}
                  dragItem={dragItem}
                  dropTarget={dropTarget}
                  renderItem={RenderItem}
                  childrenProp={childrenProp}
                  onMouseEnter={onMouseEnter}
                  onDragStart={onDragStart}
                />
              ))}
            </ol>
          ) : null}
        </RenderItem>
      </div>
    </li>
  );
};

NestableItem.defaultProps = {
  dragItem: null,
  dropTarget: null,
};

export default NestableItem;

import classnames from "classnames";
import React from "react";
import DragHandler from "../DragHandler";
type NestableItemProps = {
  item: {
    id?: any;
  };
  isCopy?: boolean;
  index?: number;
  onMouseEnter: (...args: any[]) => any;
  onDragStart: (...args: any[]) => any;
  dragItem?: object;
  renderItem: (...args: any[]) => any;
  childrenProp: string;
};
const NestableItem: React.SFC<NestableItemProps> = ({
  item,
  isCopy,
  index,
  onMouseEnter,
  onDragStart,
  dragItem,
  renderItem: RenderItem,
  childrenProp
}) => {
  const isDragging = !isCopy && dragItem && dragItem.id === item.id;
  const hasChildrenProperty = item[childrenProp];
  const hasChildren = item[childrenProp] && item[childrenProp].length;
  const listItemClassName = classnames(
    `nestable-item${isCopy ? "-copy" : ""}`,
    `nestable-item${isCopy ? "-copy" : ""}-${item.id}`,
    {
      "nestable-item-parent": hasChildrenProperty,
      "is-dragging": isDragging
    }
  );
  return (
    <li className={listItemClassName}>
      <div
        className="nestable-item-name"
        onMouseEnter={e => onMouseEnter(e, item)}
      >
        <RenderItem
          item={item}
          index={index}
          DragHandler={() => (
            <DragHandler onDragStart={e => onDragStart(e, item)} />
          )}
        >
          {hasChildrenProperty && hasChildren ? (
            <ol className="nestable-list">
              {item[childrenProp].map((_item, _index) => (
                <NestableItem
                  key={_item.id}
                  index={_index}
                  item={_item}
                  isCopy={isCopy}
                  dragItem={dragItem}
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
  isCopy: false
};

export default NestableItem;

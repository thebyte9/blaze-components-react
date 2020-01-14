import classnames from "classnames";
import React from "react";
import DragHandler from "../DragHandler";
interface INestableItemProps {
  item: {
    id?: any;
  };
  isCopy?: boolean;
  index?: number;
  onMouseEnter: (...args: any[]) => any;
  onDragStart: (...args: any[]) => any;
  dragItem?: any;
  renderItem: any;
  childrenProp: string;
}
const NestableItem: React.SFC<INestableItemProps> = ({
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
    {
      "is-dragging": isDragging,
      "nestable-item-parent": hasChildrenProperty
    }
  );

  return (
    <li className={listItemClassName} id={item.id}>
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
              {item[childrenProp].map((element: any, i: number) => (
                <NestableItem
                  key={element.id}
                  index={i}
                  item={element}
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

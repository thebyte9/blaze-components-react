import React from "react";
type DragLayerProps = {
  dragItem: object,
  dragLayerRef: object
};
const DragLayer: React.SFC<DragLayerProps> = ({
  dragItem,
  children,
  dragLayerRef
}) => {
  const el = document.querySelector(`.nestable-item-${dragItem.id}`);
  return (
    <div className="nestable-drag-layer">
      <ol
        className="nestable-list"
        ref={dragLayerRef}
        style={{ width: el.clientWidth }}
      >
        {children}
      </ol>
    </div>
  );
};
export default DragLayer;

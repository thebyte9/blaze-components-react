import React from "react";
interface IDragLayerProps {
  dragItem: any;
  dragLayerRef: any;
}
const DragLayer: React.SFC<IDragLayerProps> = ({
  dragItem,
  children,
  dragLayerRef
}) => {
  const el: any = document.getElementById(dragItem.id);
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

import React from "react";
type DragHandlerProps = {
  onDragStart: (...args: any[]) => any
};
const DragHandler: React.SFC<DragHandlerProps> = ({ onDragStart }) => (
  <div className="list__drag" onDragStart={onDragStart} draggable>
    <i className="material-icons">drag_indicator</i>
  </div>
);
export default DragHandler;

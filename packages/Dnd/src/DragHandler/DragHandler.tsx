import React from 'react';
interface IDragHandlerProps {
  onDragStart: (...args: any[]) => any;
}
const DragHandler: React.SFC<IDragHandlerProps> = ({ onDragStart }) => (
  <div className="list__drag" onDragStart={onDragStart} draggable data-testid="drag-handler">
    <i className="material-icons">drag_indicator</i>
  </div>
);
export default DragHandler;

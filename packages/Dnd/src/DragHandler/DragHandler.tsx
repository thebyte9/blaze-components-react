import React from 'react';
interface IDragHandlerProps {
  onDragStart: (...args: any[]) => any;
  draggable?: boolean;
}
const DragHandler: React.SFC<IDragHandlerProps> = ({ onDragStart, draggable }) => (
  <div className="list__drag" onDragStart={onDragStart} draggable={draggable} data-testid="drag-handler">
    <i className="material-icons">drag_indicator</i>
  </div>
);
export default DragHandler;
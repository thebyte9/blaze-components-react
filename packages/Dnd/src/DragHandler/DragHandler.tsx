import React from 'react';
interface IDragHandlerProps {
  onDragStart: (...args: any[]) => any;
  isDraggable: boolean
}
const DragHandler: React.SFC<IDragHandlerProps> = ({ onDragStart, isDraggable }) => (
  <div className="list__drag" onDragStart={onDragStart} draggable={isDraggable} data-testid="drag-handler">
    <i className="material-icons">{isDraggable ? 'drag_indicator' : 'drag_disabled'}</i>
  </div>
);
export default DragHandler;
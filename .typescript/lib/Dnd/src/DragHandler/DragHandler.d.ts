import React from "react";
interface IDragHandlerProps {
    onDragStart: (...args: any[]) => any;
}
declare const DragHandler: React.SFC<IDragHandlerProps>;
export default DragHandler;

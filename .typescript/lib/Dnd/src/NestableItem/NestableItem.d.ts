import React from "react";
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
declare const NestableItem: React.SFC<INestableItemProps>;
export default NestableItem;

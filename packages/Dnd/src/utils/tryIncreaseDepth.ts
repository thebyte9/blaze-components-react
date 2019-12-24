import { getItemByPath } from "./getItemByPath";
import { getPathById } from "./getPathById";

const tryIncreaseDepth = ({ dragItem, items, childrenProp }: any): any => {
  if (!dragItem) {
    return;
  }
  const pathFrom = getPathById({
    childrenProp,
    id: dragItem.id,
    items
  });
  const itemIndex = pathFrom[pathFrom.length - 1];

  if (itemIndex > 0) {
    const prevSibling: any = getItemByPath({
      childrenProp,
      items,
      path: pathFrom.slice(0, -1).concat(itemIndex - 1)
    });

    if (prevSibling[childrenProp] && !prevSibling[childrenProp].length) {
      const pathTo = pathFrom
        .slice(0, -1)
        .concat(itemIndex - 1)
        .concat(prevSibling[childrenProp].length);

      return { dragItem, pathFrom, pathTo };
    }
  }
};

export { tryIncreaseDepth };

import { getItemByPath } from "./getItemByPath";
import { getPathById } from "./getPathById";

const tryDecreaseDepth = ({ dragItem, items, childrenProp }: any): any => {
  const pathFrom = getPathById({
    childrenProp,
    id: dragItem.id,
    items
  });
  const itemIndex = pathFrom[pathFrom.length - 1];

  if (pathFrom.length > 1) {
    const parent = getItemByPath({
      childrenProp,
      items,
      path: pathFrom.slice(0, -1)
    });

    if (itemIndex + 1 === parent[childrenProp].length) {
      const pathTo = pathFrom.slice(0, -1);
      pathTo[pathTo.length - 1] += 1;
      return { dragItem, pathFrom, pathTo };
    }
  }
};

export { tryDecreaseDepth };

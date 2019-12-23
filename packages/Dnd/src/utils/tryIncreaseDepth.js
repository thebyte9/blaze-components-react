import { getItemByPath } from './getItemByPath';
import { getPathById } from './getPathById';

const tryIncreaseDepth = ({ dragItem, items, childrenProp }) => {
  if (!dragItem) return;
  const pathFrom = getPathById({
    id: dragItem.id,
    items,
    childrenProp
  });
  const itemIndex = pathFrom[pathFrom.length - 1];

  if (itemIndex > 0) {
    const prevSibling = getItemByPath({
      path: pathFrom.slice(0, -1).concat(itemIndex - 1),
      items,
      childrenProp
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

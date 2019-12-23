import { getItemByPath } from "./getItemByPath";

const getRealNextPath = ({ prevPath, nextPath, items, childrenProp }: any) => {
  const prevPathLastIndex = prevPath.length - 1;
  const nextPathLastIndex = nextPath.length - 1;

  if (prevPath.length < nextPath.length) {
    let wasShifted = false;

    return nextPath.map((nextElement: any, index: number) => {
      if (wasShifted) {
        return index === nextPathLastIndex ? nextElement + 1 : nextElement;
      }

      if (typeof prevPath[index] !== "number") {
        return nextElement;
      }

      if (nextPath[index] > prevPath[index] && index === prevPathLastIndex) {
        wasShifted = true;
        return nextElement - 1;
      }

      return nextElement;
    });
  }
  if (prevPath.length === nextPath.length) {
    if (nextPath[nextPathLastIndex] > prevPath[nextPathLastIndex]) {
      const target = getItemByPath({
        childrenProp,
        items,
        path: nextPath
      });

      if (target[childrenProp] && target[childrenProp].length) {
        return nextPath
          .slice(0, -1)
          .concat(nextPath[nextPathLastIndex] - 1)
          .concat(0);
      }
    }
  }

  return nextPath;
};

export { getRealNextPath };

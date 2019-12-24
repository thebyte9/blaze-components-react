const getPathById = ({ id, items, childrenProp }: any) => {
  let path: any[] = [];
  items.forEach((item: any, index: number) => {
    if (item.id === id) {
      path.push(index);
    } else if (item[childrenProp]) {
      const childrenPath = getPathById({
        childrenProp,
        id,
        items: item[childrenProp]
      });

      if (childrenPath.length) {
        path = path.concat(index).concat(childrenPath);
      }
    }
  });

  return path;
};

export { getPathById };

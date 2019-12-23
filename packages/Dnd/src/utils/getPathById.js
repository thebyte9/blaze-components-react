const getPathById = ({ id, items, childrenProp }) => {
  let path = [];
  items.forEach((item, index) => {
    if (item.id === id) {
      path.push(index);
    } else if (item[childrenProp]) {
      const childrenPath = getPathById({ id, items: item[childrenProp], childrenProp });

      if (childrenPath.length) {
        path = path.concat(index).concat(childrenPath);
      }
    }
  });

  return path;
};

export { getPathById };

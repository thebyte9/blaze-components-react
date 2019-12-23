const getSplicePath = (path, options = {}) => {
  const splicePath = {};
  const numToRemove = options.numToRemove || 0;
  const itemsToInsert = options.itemsToInsert || [];
  const lastIndex = path.length - 1;
  let currentPath = splicePath;

  path.forEach((element, index) => {
    if (index === lastIndex) {
      currentPath.$splice = [[element, numToRemove, ...itemsToInsert]];
    } else {
      const nextPath = {};
      currentPath[element] = { [options.childrenProp]: nextPath };
      currentPath = nextPath;
    }
  });

  return splicePath;
};

export { getSplicePath };

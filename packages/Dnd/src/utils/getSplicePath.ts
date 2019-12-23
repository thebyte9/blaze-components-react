const getSplicePath = (path: any, options: any = {}) => {
  const splicePath = {};
  const numToRemove = options.numToRemove || 0;
  const itemsToInsert = options.itemsToInsert || [];
  const lastIndex = path.length - 1;
  let currentPath: any = splicePath;

  path.forEach((element: any, index: number) => {
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

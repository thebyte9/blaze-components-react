const listWithChildren = (list, childrenProp) =>
  list.map(item => ({
    ...item,
    [childrenProp]: item[childrenProp] ? listWithChildren(item[childrenProp], childrenProp) : null
  }));

export { listWithChildren };

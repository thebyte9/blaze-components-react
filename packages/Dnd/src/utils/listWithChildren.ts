const listWithChildren = (list: any[], childrenProp: any): any =>
  list.map(item => ({
    ...item,
    [childrenProp]: item[childrenProp]
      ? listWithChildren(item[childrenProp], childrenProp)
      : null
  }));

export { listWithChildren };

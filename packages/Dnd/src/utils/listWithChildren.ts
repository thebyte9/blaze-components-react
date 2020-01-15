import uuid from "uuid";

const listWithChildren = (list: any[], childrenProp: any): any =>
  list.map(item => ({
    ...item,
    id: item.id || uuid(),
    [childrenProp]: item[childrenProp]
      ? listWithChildren(item[childrenProp], childrenProp)
      : null
  }));

export { listWithChildren };

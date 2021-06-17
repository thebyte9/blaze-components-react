import { nanoid } from 'nanoid';

const listWithChildren = (list: any[], childrenProp: any): any =>
  list.map((item) => ({
    ...item,
    id: item.id || nanoid(),
    [childrenProp]: item[childrenProp] ? listWithChildren(item[childrenProp], childrenProp) : null,
  }));

export { listWithChildren };

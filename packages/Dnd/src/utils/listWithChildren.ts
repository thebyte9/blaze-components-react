import { v4 as uuidv4 } from 'uuid';

const listWithChildren = (list: any[], childrenProp: any): any =>
  list.map(item => ({
    ...item,
    id: item.id || uuidv4(),
    [childrenProp]: item[childrenProp]
      ? listWithChildren(item[childrenProp], childrenProp)
      : null
  }));

export { listWithChildren };

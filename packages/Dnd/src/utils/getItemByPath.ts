function getItemByPath({ path, items, childrenProp }: any) {
  let item: any = null;
  path.forEach((index: number) => {
    const list = item ? item[childrenProp] : items;
    item = list[index];
  });

  return item;
}

export { getItemByPath };

function getItemByPath({ path, items, childrenProp }) {
  let item = null;
  path.forEach(index => {
    const list = item ? item[childrenProp] : items;
    item = list[index];
  });

  return item;
}

export { getItemByPath };

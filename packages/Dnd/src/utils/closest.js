const closest = (target, selector) => {
  while (target) {
    if (target.matches && target.matches(selector)) return target;
    // eslint-disable-next-line no-param-reassign
    target = target.parentNode;
  }
  return null;
};

export { closest };

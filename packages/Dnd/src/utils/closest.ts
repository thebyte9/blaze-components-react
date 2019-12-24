const closest = (target: any, selector: any) => {
  while (target) {
    if (target.matches && target.matches(selector)) {
      return target;
    }
    target = target.parentNode;
  }
  return null;
};

export { closest };

const filterAvailableClasses = (classes: Record<string, unknown>) => 
  !!classes && Object.keys(classes).filter(classKey => !!classes[classKey]).map(key => `${key}`).join(' ');

const buildClassNames = (className: string | Record<string, unknown>, optionalClasses: Record<string, unknown> = {}): string => {
  const baseClassName: string = typeof className === 'string' ? className : filterAvailableClasses(className)
  const filteredOptionalClasses: string = filterAvailableClasses(optionalClasses);
  const parsedClassName = !!filteredOptionalClasses ? `${baseClassName} ${filteredOptionalClasses}` : baseClassName
  
  return parsedClassName;
}

export default buildClassNames;